import { useEffect, useRef } from "react";
import { quizState } from "../../states/Quiz.state";

export function millisToMinutesAndSeconds(millis: number) {
  const minutes = Math.floor(millis / 60000);
  const seconds = Number(((millis % 60000) / 1000).toFixed(0));
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export const useCountdown = () => {
  const [remainingTime, setRemainingTime] = quizState((quiz) => [
    quiz.remainingTime,
    quiz.setRemainingTime,
  ]);
  const interval = 1000;
  const isFinished = useRef(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (remainingTime > 0) setRemainingTime(remainingTime - interval);
    }, interval);

    if (remainingTime === 0) {
      isFinished.current = true;
      console.warn("Quiz finished");
    }

    return () => clearInterval(countdown);
  }, [remainingTime]);

  return { remainingTime };
};
