import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import HabitAddForm from "./habitAddForm";
import renderer from "react-test-renderer";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

describe("HabitAddForm", () => {
  it("renders", () => {
    // 스냅샷 테스트
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  describe("Form Submit", () => {
    let onAdd: (name: string) => void;
    let input: HTMLElement;
    let button: HTMLElement;
    let user: UserEvent;
    const setup = () => {
      user = userEvent.setup();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText("Habit");
      button = screen.getByText("Add");
    };
    beforeEach(() => {
      onAdd = jest.fn();
    });
    it("calls onAdd when button is clicked", async () => {
      setup();
      // input에다가 원하는 습관의 이름을 타이핑 한 다음에
      // add라는 버튼을 클릭하면
      // onAdd가 input에 입력된 이름과 함께 호출되어야 함
      await user.type(input, "New Habit");
      await user.click(button);
      expect(onAdd).toHaveBeenCalledTimes(1);
      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });
    it("does not call onAdd when the habit is empty", () => {
      setup();
      user.clear(input);
      user.click(button);
      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
