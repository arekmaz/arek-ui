import { Progress } from "~/components/ui/progress";
import { Story } from "./storyHelpers";
import { useEffect, useState } from "react";

const useProgress = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === 100 ? 0 : value + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  return value;
};

const Linear = () => {
  return (
    <Progress value={useProgress()} min={0} max={100}>
      <Progress.Label>Linear</Progress.Label>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
      <Progress.ValueText />
    </Progress>
  );
};

const Circle = () => {
  return (
    <Progress value={useProgress()} min={0} max={100}>
      <Progress.Label>Circle</Progress.Label>
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
      <Progress.ValueText />
    </Progress>
  );
};

export const Progresses = () => {
  return (
    <Story title="Progress" componentFilename="progress">
      <Linear />
      <Circle />
    </Story>
  );
};
