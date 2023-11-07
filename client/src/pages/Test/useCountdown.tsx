import { useEffect, useRef } from "react";
import { testState } from "../../states/Test.state";

export function millisToMinutesAndSeconds(millis: number) {
  const minutes = Math.floor(millis / 60000);
  const seconds = Number(((millis % 60000) / 1000).toFixed(0));
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export const useCountdown = () => {
  const [remainingTime, setRemainingTime] = testState((test) => [
    test.remainingTime,
    test.setRemainingTime,
  ]);
  const interval = 1000;
  const isFinished = useRef(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (remainingTime > 0) setRemainingTime(remainingTime - interval);
    }, interval);

    if (remainingTime === 0) {
      isFinished.current = true;
      console.warn("Test finished");
    }

    return () => clearInterval(countdown);
  }, [remainingTime]);

  return { remainingTime };
};
