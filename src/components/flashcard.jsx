import { useState } from "react";
import styles from "./flashcard.module.css";

export function FlashCard({ name, picture, answer }) {
  const [isFlip, setIsFlip] = useState(false);
  // const flip = setIsFlip ? <p>{answer}Back of the Card</p>: <p>{name}Front of the Card</p>
  // console.log(flip)
  const handleFlip = () => {
    setIsFlip(!isFlip);
  };

  // const handleClick = () => {
  //  console.log('Button clicked!');
  // Add any other logic you want to execute when the button is clicked
  // const handleFlip = () => {

  // setIsFlipped(!isFlipped);

  return (
    <>
      <div className={styles.flashcardsContainer}>
        <button className={styles.flashcard} onClick={handleFlip}>
          <p className={styles.cross}>❌</p>
          {isFlip ? (
            <p>{answer}</p>
          ) : (
            <>
              <p>{picture}</p>
              <p>{name}</p>
            </>
          )}
        </button>
      </div>
    </>
  );
}
