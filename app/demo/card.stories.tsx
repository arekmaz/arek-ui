import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Story } from "./storyHelpers";
import { Input } from "~/components/ui/input";
import { Select } from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { Portal } from "@ark-ui/react";
import { ChevronsUpDownIcon } from "lucide-react";

const Basic = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select items={[]}>
                <Select.Control>
                  <Select.Trigger id="framework">
                    <Select.ValueText placeholder="Select" />
                  </Select.Trigger>
                  <Select.Indicator asChild>
                    <ChevronsUpDownIcon />
                  </Select.Indicator>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      <Select.Item item={{ value: "react" }}>react</Select.Item>
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export const Cards = () => {
  return (
    <Story title="cards">
      <Basic />
    </Story>
  );
};
