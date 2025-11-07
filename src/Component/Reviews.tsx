import type{ ReviewType } from "../Types/Types";
function Reviews(props:{values:ReviewType[]}) {
  const { values } = props;
  return (
    <div>
      <ul className="grid gap-6  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3.5 ">
        {values.map((curr, index) => (
          <li
            key={index}
            className="flex p-3.5 rounded-2xl flex-wrap flex-col gap-2.5 bg-green-50"
            >
            <div className="font-medium">{curr.comment}</div>
            <div >{curr.reviewerName}</div>
            <div>{curr.reviewerEmail}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
