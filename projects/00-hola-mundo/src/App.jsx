import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import React from "react";
export function App() {
  return (
    <>
      <TwitterFollowCard userName="mjordan23" name="Michael Jordan" />
      <TwitterFollowCard userName="mbjordan" name="Michael B Jordan" />
      <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard userName="stevenadams" name="Steven Adams" />
    </>
  );
}
