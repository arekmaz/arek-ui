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
import { HStack } from "./components/ui/stack";
import { IconButton } from "./components/ui/icon-button";
import { GithubIcon, MoonIcon, SunIcon } from "lucide-react";

export default function App() {
  const [mode, setMode] = useState<"dark" | "light">("light");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={cn(mode, "h-screen w-screen flex flex-col")}>
        <HStack
          className="fixed bottom-0 left-0 z-overlay w-full pointer-events-none *:pointer-events-auto pb-1 px-1"
          justify="between"
        >
          <IconButton
            onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
          >
            {mode === "light" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
          <IconButton asChild>
            <a href="https://github.com/arekmaz/arek-ui">
              <GithubIcon />
            </a>
          </IconButton>
        </HStack>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
