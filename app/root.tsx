import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";
import { Button } from "./components/ui/button";
import { useState } from "react";
import { cn } from "./components/utils/cn";

export default function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={cn(mode, "h-screen w-screen flex flex-col")}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Button
          onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
        >
          mode {mode}
        </Button>
      </body>
    </html>
  );
}
