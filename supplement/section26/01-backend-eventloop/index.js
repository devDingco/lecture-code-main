import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API-DOCS 만들기
const typeDefs = `#graphql
  type Query {
    fetchBoard: String
  }
`;

// API 만들기
const resolvers = {
  Query: {
    fetchBoard: async () => {
      console.log("요청을 받았습니다.");

      // CPU 인텐시브한 작업
      for (let i = 1; i <= 9000000000; i++) {}

      // CPU 인텐시브한 작업
      for (let i = 1; i <= 9000000000; i++) {}

      return "결과반환";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server).then(() => {
  console.log("그래프큐엘 백엔드서버가 정상적으로 실행되었습니다."); // 포트: 4000
});
