import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisikes] = useState(0);

  const addLike = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const addDislike = () => {
    setDisikes((prevValue) => prevValue + 1);
  };

  const resetResults = ()=>{
    setLikes(0);
    setDisikes(0);
  }

  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <div className="result">{likes}</div>
          <Button name="LIKE" onClick={addLike} />
        </div>
        <div className="like-dislike-container">
          <div className="result">{dislikes}</div>
          <Button name="DISLIKE" onClick={addDislike} />
        </div>
      </div>
      <Button name="RESET RESULTS" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
