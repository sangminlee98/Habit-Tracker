import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

import renderer from "react-test-renderer";
import { IHabit } from "../../types";
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
  describe("Habit Test", () => {
    let user: UserEvent;
    let habit: IHabit;
    let onIncrement: (habit: IHabit) => void;
    let onDecrement: (habit: IHabit) => void;
    let onDelete: (habit: IHabit) => void;

    const setup = () => {
      user = userEvent.setup();
      render(
        <Habit
          habit={habit}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      );
    };
    beforeEach(() => {
      habit = {
        id: 1,
        name: "Coding",
        count: 1,
      };
      onIncrement = jest.fn();
      onDecrement = jest.fn();
      onDelete = jest.fn();
    });
    it("increase 버튼을 누르면 onIncrement가 호출된다.", async () => {
      setup();
      const increaseBtn = screen.getByTitle("increase");
      await user.click(increaseBtn);
      expect(onIncrement).toHaveBeenCalledWith(habit);
    });
    it("decrease 버튼을 누르면 onDecrement가 호출된다.", async () => {
      setup();
      const decreaseBtn = screen.getByTitle("decrease");
      await user.click(decreaseBtn);
      expect(onDecrement).toHaveBeenCalledWith(habit);
    });
    it("delete 버튼을 누르면 onDelete가 호출된다.", async () => {
      setup();
      const deleteBtn = screen.getByTitle("delete");
      await user.click(deleteBtn);
      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
