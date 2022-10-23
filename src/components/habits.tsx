import React from "react";
import { IHabit } from "../types";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

interface IHabitsProps {
  habits: IHabit[];
  onIncrement: (habit: IHabit) => void;
  onDecrement: (habit: IHabit) => void;
  onDelete: (habit: IHabit) => void;
  onAdd: (name: string) => void;
  onReset: () => void;
}

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}: IHabitsProps) => {
  const handleIncrement = (habit: IHabit) => {
    onIncrement(habit);
  };
  const handleDecrement = (habit: IHabit) => {
    onDecrement(habit);
  };
  const handleDelete = (habit: IHabit) => {
    onDelete(habit);
  };

  const handleAdd = (name: string) => {
    onAdd(name);
  };
  return (
    <div>
      <HabitAddForm onAdd={handleAdd} />
      <ul>
        {habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      <button className="habit-reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
