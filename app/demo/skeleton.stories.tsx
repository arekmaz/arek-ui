import { Skeleton } from "~/components/ui/skeleton";
import { Story } from "./storyHelpers";
import { HStack, Stack } from "~/components/ui/stack";

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="size-12" variant="circle" />
      <Stack spacing={2}>
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </Stack>
    </div>
  );
}
const List = () => {
  return (
    <Stack spacing={2} align="stretch" className="w-full">
      <HStack>
        <Skeleton className="h-2 flex-1" />
        <Skeleton className="h-2 flex-[5]" />
      </HStack>
      <HStack>
        <Skeleton className="h-2 flex-[3]" />
        <Skeleton className="h-2 flex-[2]" />
      </HStack>
      <HStack>
        <Skeleton className="h-2 flex-[4]" />
        <Skeleton className="h-2 flex-1" />
      </HStack>
      <HStack>
        <Skeleton className="h-2 flex-[3]" />
        <Skeleton className="h-2 flex-[8]" />
      </HStack>
      <HStack>
        <Skeleton className="h-2 flex-1" />
        <Skeleton className="h-2 flex-[5]" />
      </HStack>
      <HStack>
        <Skeleton className="h-2 flex-[3]" />
        <Skeleton className="h-2 flex-[2]" />
      </HStack>
      <HStack>
        <Skeleton className="h-2 flex-[4]" />
        <Skeleton className="h-2 flex-1" />
      </HStack>
      <HStack>
        <Skeleton className="h-2 flex-[3]" />
        <Skeleton className="h-2 flex-[8]" />
      </HStack>
    </Stack>
  );
};

export const Skeletons = () => {
  return (
    <Story title="skeletons" componentFilename="skeleton">
      <SkeletonDemo />
      <List />
    </Story>
  );
};
