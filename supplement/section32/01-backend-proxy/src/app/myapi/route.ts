export function GET() {
  console.log("Next 서버에 요청했군요!");

  return new Response(
    JSON.stringify({
      message: "요청에 성공하였습니다",
      mydata: "banana",
    }),
    { status: 200 }
  );
}
