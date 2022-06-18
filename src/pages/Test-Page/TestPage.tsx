import type { Component } from "solid-js";
import { useHelloQuery } from "../../../generated/graphql";

const TestPage: Component = () => {
  const [{ data }] = useHelloQuery({ variables: { Name: "Vidur Khanal" } });
  console.log(data);
  return <div>TestPage</div>;
};

export default TestPage;
