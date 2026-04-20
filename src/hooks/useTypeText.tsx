import { useEffect, useState } from 'react';

const useTypeText = (
  text: string,
  interval: number = 30,
  isStart: boolean = false,
) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    if (!isStart || isDone) return;

    let counter = 0;
    let canceled = false;

    const setDrift = () => Math.random() * 100 >= 50;

    const randomDrift = (max: number, min: number) => {
      return Math.random() * (max - min + 1) + min;
    };

    const type = () => {
      if (canceled) return;
      setDisplayText(text.slice(0, counter + 1));

      if (counter === text.length) {
        setIsDone(true);
        return;
      }
      counter++;

      const delay = setDrift()
        ? interval + randomDrift(5, 10)
        : interval - randomDrift(30, 50);

      setTimeout(type, delay);
    };

    type();

    return () => {
      canceled = true;
    };
  }, [isStart, text]);

  return [displayText, isDone];
};

export default useTypeText;
