import HabitPresenter from "../habit_presenter";
import { IHabits } from "../types";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 2 },
    { id: 2, name: "Running", count: 0 },
  ];
  let presenter: HabitPresenter;
  let updateFn: React.Dispatch<React.SetStateAction<IHabits>>;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    updateFn = jest.fn();
  });

  it("habits 초기화", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });
  it("habit의 count를 1 증가시킨다.", () => {
    presenter.increment(habits[0], updateFn);

    expect(presenter.getHabits()[0].count).toBe(3);
    checkUpdateIsCall(1);
  });
  it("habit의 count를 1 감소시킨다.", () => {
    presenter.decrement(habits[0], updateFn);

    expect(presenter.getHabits()[0].count).toBe(1);
    checkUpdateIsCall(1);
  });
  it("habit의 count는 0 아래로 감소시킬 수 없다", () => {
    presenter.decrement(habits[0], updateFn);
    presenter.decrement(habits[0], updateFn);
    presenter.decrement(habits[0], updateFn);

    checkUpdateIsCall(3);
  });
  it("habit을 삭제하면 habits 리스트에서 삭제된다.", () => {
    presenter.delete(habits[0], updateFn);

    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()[0].name).toEqual("Running");
    checkUpdateIsCall(1);
  });
  it("새로운 habit을 추가하면 habits 리스트에 추가된다.", () => {
    presenter.add("Coding", updateFn);

    expect(presenter.getHabits().length).toBe(3);
    expect(presenter.getHabits()[2].name).toEqual("Coding");
    expect(presenter.getHabits()[2].count).toBe(0);
    checkUpdateIsCall(1);
  });
  it("habits를 reset하면 모든 habit의 count는 0이 된다.", () => {
    presenter.reset(updateFn);

    presenter.getHabits().map((habit) => {
      expect(habit.count).toBe(0);
    });
    checkUpdateIsCall(1);
  });
  it("presenter는 habit의 최대 개수를 초과하면 에러를 던진다.", () => {
    presenter.add("Coding", updateFn);
    expect(() => {
      presenter.add("Eating", updateFn);
    }).toThrow("habit의 개수는 3 이상이 될 수 없습니다.");
  });
  function checkUpdateIsCall(times: number) {
    // 업데이트 함수 호출 체크 테스트코드
    expect(updateFn).toHaveBeenCalledTimes(times);
    expect(updateFn).toHaveBeenCalledWith(presenter.getHabits());
  }
});
