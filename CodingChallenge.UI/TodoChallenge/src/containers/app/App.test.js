import { reducer } from "../../store/todo/reducer";

test("text change action", () => {
  const prevState = {
    todos: [
      { id: 0, text: "not this one" },
      { id: 1, text: "this one" },
      { id: 2, text: "not this one either" },
    ],
  };
  const nextState = reducer(prevState, {
    type: "TODO_ACTION/TODO_TEXT_CHANGE",
    id: 1,
    text: "text changed",
  });
  const expectedState = {
    todos: [
      { id: 0, text: "not this one" },
      { id: 1, text: "text changed" },
      { id: 2, text: "not this one either" },
    ],
  };
  expect(nextState).toStrictEqual(expectedState);
});

test("isComplete change action", () => {
  const prevState = {
    todos: [
      { id: 0, text: "not this one", isComplete: false },
      { id: 1, text: "this one", isComplete: false },
      { id: 2, text: "not this one either", isComplete: false },
    ],
  };
  const nextState = reducer(prevState, {
    type: "TODO_ACTION/TODO_COMPLETE_CHANGE",
    id: 1,
    isComplete: true,
  });
  const expectedState = {
    todos: [
      { id: 0, text: "not this one", isComplete: false },
      { id: 1, text: "this one", isComplete: true },
      { id: 2, text: "not this one either", isComplete: false },
    ],
  };
  expect(nextState).toStrictEqual(expectedState);
});

test("add todo action", () => {
  const prevState = {
    todos: [
      { id: 0, text: "not this one", isComplete: false },
      { id: 1, text: "this one", isComplete: false },
      { id: 2, text: "not this one either", isComplete: false },
    ],
  };
  const todoToAdd = { id: 3, text: "pass this test", isComplete: false };
  const nextState = reducer(prevState, {
    type: "TODO_ACTION/ADD_TODO",
    todo: todoToAdd,
  });
  const expectedState = {
    todos: [
      ...prevState.todos,
      { id: 3, text: "pass this test", isComplete: false },
    ],
  };
  expect(nextState).toStrictEqual(expectedState);
});
