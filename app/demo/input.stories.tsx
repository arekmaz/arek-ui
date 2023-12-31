import { Input } from "~/components/ui/input";
import { VStack } from "~/components/ui/stack";

export const Inputs = () => {
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>Inputs:</p>

      <label>
        Input
        <Input />
      </label>

      <label>
        Input
        <Input disabled />
      </label>

      <label>
        Placeholder
        <Input placeholder="placeholder" />
      </label>

      <label>
        Error
        <Input status="error" defaultValue="error" />
      </label>

      <label>
        Error placeholder
        <Input placeholder="placeholder" status="error" />
      </label>
    </VStack>
  );
};
