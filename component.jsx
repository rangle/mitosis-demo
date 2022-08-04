import * as React from "react";
import { useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";
export type Props = {
  initCount?: number;
  winCount?: number;
};
export type State = {
  count: number;
};

export default function Component(props: Props) {
  const state = useLocalObservable(() => ({ count: 0 }));

  useEffect(() => {
    if (props.initCount !== undefined) {
      state.count = props.initCount;
    }
  }, []);

  return (
    <div>
      {state.count > (props.winCount ?? 10) ? (
        <>
          <h1>You Win!!!</h1>
        </>
      ) : null}

      <h1>{state.count}</h1>

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

