"use client";

export default function List(props) {
  return (
    <div>
      {props.data?.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
