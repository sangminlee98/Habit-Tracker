import React, { Component } from "react";
import { IHabit } from "../App";
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

class Habits extends Component<IHabitsProps> {
  handleIncrement = (habit: IHabit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit: IHabit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit: IHabit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name: string) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            );
          })}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
