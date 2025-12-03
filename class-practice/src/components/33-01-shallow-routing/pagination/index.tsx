export default function Pagination() {
  return (
    <div>
      {new Array(10).fill("철수").map((_, index) => (
        <button key={index + 1} id={String(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
