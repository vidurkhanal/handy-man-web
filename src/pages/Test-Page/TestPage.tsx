import { createQuery } from "solid-urql";
import { Component, createEffect, createSignal, Show } from "solid-js";
import {
  HelloDocument,
  HelloQuery,
  HelloQueryVariables,
} from "../../../generated/graphql";

const TestPage: Component = () => {
  const [hello, setHello] = createSignal<HelloQuery>();

  const [res, queryState] = createQuery({
    query: HelloDocument,
    variables: { name: "Man" } as HelloQueryVariables,
  });

  createEffect(() => {
    setHello(res());
  });

  // const [{data}] = useHelloQuery({variables:{name:"Man"}})

  return (
    <Show when={!queryState().fetching} fallback={<p>Loading...</p>}>
      <p>{hello()?.hello}</p>
    </Show>
  );
};

export default TestPage;
