import React, { useState } from "react";
import "./App.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import HabitPresenter from "./habit_presenter";
import { IHabit, IHabits } from "./types";

interface IAppProps {
  presenter: HabitPresenter;
}

const App = ({ presenter }: IAppProps) => {
  const [habits, setHabits] = useState<IHabits>(presenter.getHabits());

  const handleIncrement = (habit: IHabit) => {
    presenter.increment(habit, setHabits);
  };
  const handleDecrement = (habit: IHabit) => {
    presenter.decrement(habit, setHabits);
  };
  const handleDelete = (habit: IHabit) => {
    presenter.delete(habit, setHabits);
  };

  const handleAdd = (name: string) => {
    presenter.add(name, setHabits);
  };

  const handleReset = () => {
    presenter.reset(setHabits);
  };

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
