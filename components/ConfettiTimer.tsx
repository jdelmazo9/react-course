import { FC, useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiTimer: FC = () => {
  const [time, setTime] = useState(120);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const minutes_to_show = String(minutes).padStart(2, "0");
  const seconds_to_show = String(seconds).padStart(2, "0");
  const { width, height } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((value) => {
        const newValue = value - 1;
        if (newValue <= 0) clearInterval(interval);
        return newValue;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-6xl">
      <span>{minutes_to_show}</span>:<span>{seconds_to_show}</span>
      {time <= 0 && <Confetti width={width} height={height} />}
    </div>
  );
};

export default ConfettiTimer;
