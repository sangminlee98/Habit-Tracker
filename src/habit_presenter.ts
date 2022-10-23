import { IHabit, IHabits } from "./types";

export default class HabitPresenter {
  habits;
  constructor(habits: IHabits) {
    this.habits = habits;
  }
  getHabits() {
    return this.habits;
  }

  increment(
    habit: IHabit,
    update: React.Dispatch<React.SetStateAction<IHabits>>
  ) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: item.count + 1 };
      }
      return item;
    });
    update(this.habits);
  }

  decrement(
    habit: IHabit,
    update: React.Dispatch<React.SetStateAction<IHabits>>
  ) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    update(this.habits);
  }

  delete(habit: IHabit, update: React.Dispatch<React.SetStateAction<IHabits>>) {
    this.habits = this.habits.filter((item) => item.id !== habit.id);
    update(this.habits);
  }

  add(name: string, update: React.Dispatch<React.SetStateAction<IHabits>>) {
    this.habits = [...this.habits, { id: Date.now(), name, count: 0 }];
    update(this.habits);
  }

  reset(update: React.Dispatch<React.SetStateAction<IHabits>>) {
    this.habits = this.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    update(this.habits);
  }
}
