import { useState } from "react";
import Button from "../Button/Button";
import "./styles.ts";
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result
} from './styles';

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDisikes] = useState<number>(0);

  const addLike = (): void => {
    setLikes((prevValue) => prevValue + 1);
  };

  const addDislike = (): void => {
    setDisikes((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLikes(0);
    setDisikes(0);
  }

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikes}</Result>
          <Button name="DISLIKE" onClick={addDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
