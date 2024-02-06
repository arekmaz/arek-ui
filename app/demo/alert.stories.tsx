import { Terminal } from "lucide-react";
import { Alert } from "~/components/ui/alert";
import { Story } from "./storyHelpers";

const Basic = () => {
  return (
    <Alert>
      <Alert.Icon asChild>
        <Terminal className="h-4 w-4" />
      </Alert.Icon>
      <Alert.Title>Basic Alert!</Alert.Title>
      <Alert.Description>
        You can add components and dependencies to your app using the cli.
      </Alert.Description>
    </Alert>
  );
};

const NoIcon = () => {
  return (
    <Alert>
      {/* <Alert.Icon asChild>
        <Terminal className="h-4 w-4" />
      </Alert.Icon> */}
      <Alert.Title>Basic Alert! - no icon</Alert.Title>
      <Alert.Description>
        You can add components and dependencies to your app using the cli.
      </Alert.Description>
    </Alert>
  );
};

const Error = () => {
  return (
    <Alert variant="destructive">
      <Alert.Icon asChild>
        <Terminal className="h-4 w-4" />
      </Alert.Icon>
      <Alert.Title>Error Alert!</Alert.Title>
      <Alert.Description>
        You can add components and dependencies to your app using the cli.
      </Alert.Description>
    </Alert>
  );
};

export const Alerts = () => {
  return (
    <Story title="alerts" componentFilename="alert">
      <Basic />
      <Error />
      <NoIcon />
    </Story>
  );
};
