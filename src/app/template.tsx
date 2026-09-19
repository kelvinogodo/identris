import { ViewTransition } from "react";

// Templates remount on every navigation, so the enter/exit animations fire
// here (layouts persist and would never trigger them).
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-swap" exit="page-swap" default="none">
      {children}
    </ViewTransition>
  );
}
