import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Story } from "./storyHelpers";
import { InputGroup } from "~/components/ui/input-group";
import { EyeOff, LockIcon } from "lucide-react";
import { Stack } from "~/components/ui/stack";
import { IconButton } from "~/components/ui/icon-button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function ProfileForm() {
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
}

export const Forms = () => {
  return (
    <Story title="forms" componentFilename="form">
      <ProfileForm />
    </Story>
  );
};
