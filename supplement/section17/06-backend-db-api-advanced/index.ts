import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API-DOCS 만들기
const typeDefs = `#graphql
  input CreateBoardInput {
    writer: String
    title: String
    content: String
  }

  type MyBoard {
    number: Int
    writer: String
    title: String
    content: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # createBoard(writer: String, title: String, content: String): String

    # 실무방식
    createBoard(createBoardInput: CreateBoardInput): String
  }
`;

// API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },

    // 한개만 꺼내기
    fetchBoard: async (parent, args, context, info) => {
      const result = await Board.findOne({
        where: {
          number: args.number,
        },
      });
      return result;
    },
  },

  Mutation: {
    // createBoard: async (parent: any, args: any, context: any, info: any) => {
    //   await Board.insert({
    //     ...args,
    //     // writer: args.writer,
    //     // title: args.title,
    //     // content: args.content,
    //   });

    //   return "등록에 성공했어요!";
    // },

    // 실무방식
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // content: args.createBoardInput.content,
      });

      return "등록에 성공했어요!";
    },

    // 수정하기
    updateBoard: async (parent, args, context, info) => {
      await Board.update({ number: args.number }, { writer: "영희" });
    },

    // 삭제하기
    deleteBoard: async (parent, args, context, info) => {
      await Board.delete({ number: args.number }); // 해당 게시글 삭제해줘!
      Board.update({ number: args.number }, { isDeleted: true }); // 해당 게시글 삭제했다 치자! (소프트삭제)
      Board.update({ number: args.number }, { deletedAt: new Date() }); // 삭제일까지 알 수 있는 효율적인 방법! (소프트삭제)
    },
  },
};

const 서버설정 = new ApolloServer({
  typeDefs,
  resolvers,
});

const 내DB연결설정 = new DataSource({
  type: "postgres",
  host: "34.64.158.127",
  port: 5030,
  username: "postgres",
  password: "postgres2025",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

내DB연결설정
  .initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!!");

    // DB접속해 놓고, 24시간 작동하자!
    startStandaloneServer(서버설정).then(() => {
      console.log("그래프큐엘 백엔드서버가 정상적으로 실행되었습니다."); // 포트: 4000
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다!!!");
    console.log("원인: ", error);
  });
