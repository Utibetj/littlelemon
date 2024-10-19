// timeUtils.test.js
import { initializeTimes, updateTimes } from "./utils/timeUtils";

test("initializeTimes returns the correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns the same times for the initial state", () => {
  const initialState = initializeTimes();
  const action = { type: "UPDATE_TIMES" };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});
