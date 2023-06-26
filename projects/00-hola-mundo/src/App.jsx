import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import React from 'react';
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard initialIsFollowing={true} userName="mjordan23">
        Michael Jordan
      </TwitterFollowCard>

      <TwitterFollowCard userName="elonmusk">Elon Musk</TwitterFollowCard>
    </section>
  );
}
