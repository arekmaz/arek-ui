import { Progress } from "~/components/ui/progress";
import { Story } from "./storyHelpers";
import { useEffect, useState } from "react";
import { VStack } from "~/components/ui/stack";

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

const Demo = () => {
  const value = useProgress();
  return (
    <VStack align="stretch" className="w-full" spacing={5}>
      <Progress value={value} min={0} max={100} size="sm">
        <Progress.Label>Linear sm</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress>

      <Progress value={value} min={0} max={100} size="md">
        <Progress.Label>Linear md</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress>

      <Progress value={value} min={0} max={100} size="lg">
        <Progress.Label>Linear lg</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress>

      <Progress value={null} min={0} max={100}>
        <Progress.Label>Linear indeterminate</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress>

      <Progress value={value} min={0} max={100} size="sm">
        <Progress.Label>Circle sm</Progress.Label>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress>

      <Progress value={value} min={0} max={100} size="md">
        <Progress.Label>Circle md</Progress.Label>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress>

      <Progress value={value} min={0} max={100} size="lg">
        <Progress.Label>Circle lg</Progress.Label>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress>

      <Progress value={null} min={0} max={100}>
        <Progress.Label>Circle indeterminate</Progress.Label>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress>
    </VStack>
  );
};

export const Progresses = () => {
  return (
    <Story title="Progress" componentFilename="progress">
      <Demo />
    </Story>
  );
};
