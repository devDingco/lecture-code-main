export async function GET() {
  console.log("Next 서버에 요청했군요!");

  const result = await fetch("https://www.naver.com");
  const data = await result.text();

  return new Response(data, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
