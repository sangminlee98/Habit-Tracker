import React, { useEffect } from "react";
import { IHabit } from "../../types";

interface IHabitProps {
  habit: IHabit;
  onIncrement: (habit: IHabit) => void;
  onDecrement: (habit: IHabit) => void;
  onDelete: (habit: IHabit) => void;
}

const Habit = ({ habit, onIncrement, onDecrement, onDelete }: IHabitProps) => {
  const handleIncrement = () => {
    onIncrement(habit);
  };
  const handleDecrement = () => {
    onDecrement(habit);
  };
  const handleDelete = () => {
    onDelete(habit);
  };
  useEffect(() => {
    console.log(`habit: ${habit.name} mounted`);
    return () => console.log(`habit: ${habit.name} will unmount `);
  });
  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
