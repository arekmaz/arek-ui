import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { InputGroup } from "~/components/ui/input-group";
import { EyeOff, LockIcon } from "lucide-react";
import { Stack } from "~/components/ui/stack";
import { IconButton } from "~/components/ui/icon-button";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Form",
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const ProfileForm: Story = {
  render: () => {
    const form = useForm({ resolver: zodResolver(formSchema) });

    return (
      <Form {...form}>
        <Stack asChild spacing={8}>
          <form onSubmit={form.handleSubmit(() => {})}>
            <Stack>
              <Form.Field
                control={form.control}
                name="username"
                render={({ field }) => (
                  <Form.Item>
                    <Form.Label>Username</Form.Label>
                    <Form.Control>
                      <Input placeholder="shadcn" {...field} />
                    </Form.Control>
                    <Form.Message />
                    <Form.Description>
                      This is your public display name.
                    </Form.Description>
                  </Form.Item>
                )}
              />
              <Form.Field
                control={form.control}
                name="password"
                render={({ field, fieldState: { invalid } }) => (
                  <Form.Item>
                    <Form.Label>Password</Form.Label>
                    <InputGroup status={invalid ? "error" : "normal"}>
                      <InputGroup.LeftAddon>
                        <LockIcon />
                      </InputGroup.LeftAddon>
                      <Form.Control>
                        {/* @ts-expect-error too complex */}
                        <InputGroup.Input
                          type="password"
                          placeholder="∗∗∗∗∗∗"
                          {...field}
                        />
                      </Form.Control>
                      <InputGroup.RightAddon>
                        <IconButton unstyled>
                          <EyeOff />
                        </IconButton>
                      </InputGroup.RightAddon>
                    </InputGroup>
                    <Form.Message />
                    <Form.Description>
                      This is your secret password.
                    </Form.Description>
                  </Form.Item>
                )}
              />
            </Stack>
            <Button type="submit">Submit</Button>
          </form>
        </Stack>
      </Form>
    );
  },
};
