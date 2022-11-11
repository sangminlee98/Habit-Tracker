import { screen, render } from "@testing-library/react";
import HabitAddForm from "../components/habitAddForm";

describe("HabitAddForm", () => {
  let onAddFn: (name: string) => void;
  beforeEach(() => {
    onAddFn = jest.fn();
  });
  it("form", () => {
    render(<HabitAddForm onAdd={onAddFn} />);
    const formEl = screen.getByRole("form");
    expect(formEl).toBeInTheDocument();
  });
});
