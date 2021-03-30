import React from "react";
import Header from "./header/header";

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
