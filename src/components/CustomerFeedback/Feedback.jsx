import { H5, Rating } from "../index";

export default function Feedback({ photo, name, rating, review }) {
  return (
    <div className="mt-3">
      <div className="d-flex align-items-center gap-2">
        <img
          src={photo}
          alt={`${name}'s photo`}
          width={25}
          height={25}
          className="rounded-circle object-fit-fill"
        />

        <H5 color="text-neutral">{name}</H5>
      </div>

      <Rating ratingValue={rating} />

      <p className="text-neutralLight">{review}</p>
    </div>
  );
}
