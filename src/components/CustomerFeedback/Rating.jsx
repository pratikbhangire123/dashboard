export default function Rating({ ratingValue }) {
  const totalStars = 5; // Total number of stars
  const filledStars = Math.floor(ratingValue); // Number of full stars
  const hasHalfStar = ratingValue % 1 !== 0; // Check if there's a half star

  return (
    <div className="my-1">
      {[...Array(totalStars)].map((_, index) => {
        if (index < filledStars) {
          return <i key={index} className="bi-star-fill text-warning"></i>;
        } else if (index === filledStars && hasHalfStar) {
          return <i key={index} className="bi-star-half text-warning"></i>;
        } else {
          return <i key={index} className="bi-star text-neutralLight"></i>;
        }
      })}
    </div>
  );
}
