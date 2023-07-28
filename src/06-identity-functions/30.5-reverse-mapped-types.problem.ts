import { Equal, Expect } from "../helpers/type-utils";

type TypedObj<T> = {
  [K in keyof T]: (name: K) => void;
};

export function makeEventHandlers<T>(obj: TypedObj<T>) {
  return obj;
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "click">>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "focus">>;
  },
});
