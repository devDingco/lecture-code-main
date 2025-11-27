import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/commons/libraries/supabase";

// 게시글 등록 BFF API
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { writer, title, content } = body;

  const result = await supabase.from("board").insert({
    writer,
    title,
    content,
  });
  console.log(result);

  return NextResponse.json(
    { message: "게시글이 성공적으로 등록되었습니다." },
    { status: 200 }
  );
}

// 게시글 목록조회 BFF API
export async function GET() {
  const { data } = await supabase.from("board").select("*");
  console.log(data);

  return NextResponse.json(
    {
      message: "게시글이 성공적으로 조회되었습니다.",
      data,
    },
    { status: 200 }
  );
}
