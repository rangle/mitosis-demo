import { useState, Show, onMount } from "@builder.io/mitosis";

export type Props = {
  initCount?: number;
  winCount?: number;
};

export type State = {
  count: number;
};

export default function Component(props: Props) {
  // const initCount = props.initCount;
  const state = useState<State>({ count: 0 });

  onMount(() => {
    if (props.initCount !== undefined) {
      state.count = props.initCount;
    }
  });

  return (
    <div>
      {/* DISPLAY SOME JSX CONDITIONALLY */}
      <Show when={state.count > (props.winCount ?? 10)}>
        <h1>You Win!!!</h1>
      </Show>

      {/* DISPLAY THE COUNT */}
      <h1>{state.count}</h1>

      {/* BUTTON TO ADD TO THE COUNT */}
      <button
        onClick={(event) => {
          state.count = state.count + 1;
        }}
      >
        Click to Add One
      </button>

      <button
        onClick={(event) => {
          state.count = props.initCount ?? 0;
        }}
      >
        Reset
      </button>
    </div>
  );
}
