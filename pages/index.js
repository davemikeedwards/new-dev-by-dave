import Router from "next/router";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    Router.push("/home");
  }, []);

  return <div>Loading...</div>;
}
