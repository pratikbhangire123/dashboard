import { CardContainer, Feedback, H3 } from "../index";
import { customerFeedback as feedbacks } from "../../data.json";

export default function CustomerFeedback() {
  return (
    <CardContainer className="box">
      <H3>Customer&apos;s Feedback</H3>
      {feedbacks.map((feedback) => (
        <Feedback
          key={feedback.customerName}
          photo={feedback.customerPhoto}
          name={feedback.customerName}
          rating={feedback.rating}
          review={feedback.review}
        />
      ))}
    </CardContainer>
  );
}
