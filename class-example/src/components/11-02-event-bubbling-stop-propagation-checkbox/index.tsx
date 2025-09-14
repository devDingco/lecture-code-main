"use client";

export default function Checkbox() {
  const onClick2 = (event) => {
    event.stopPropagation();
    alert("2번 클릭");
  };
  const onClick3 = (event) => {
    alert("3번 클릭");
  };

  return (
    <span onClick={onClick2}>
      <input type="checkbox" onClick={onClick3} />
    </span>
  );
}
