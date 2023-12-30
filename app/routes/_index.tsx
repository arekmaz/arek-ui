import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox_1";
import { Combobox } from "~/components/ui/combobox_1";
import { Center, HStack, Stack, VStack } from "~/components/ui/stack";
import { cn } from "~/components/utils/cn";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Center className="w-screen h-screen">
      <div className="w-min">
        <Combobox />
      </div>
    </Center>
  );
}
