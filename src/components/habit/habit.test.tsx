import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Habit from "./habit";

describe("Habit", () => {
  it("renders", () => {
    const component = renderer.create(
      <Habit
        habit={{ id: 1, name: "test", count: 1 }}
        onIncrement={jest.fn()}
        onDecrement={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
  describe("Habit Test", () => {});
});
