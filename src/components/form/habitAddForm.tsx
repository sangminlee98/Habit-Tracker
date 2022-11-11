import React, { memo } from "react";

interface IHabitAddFormProps {
  onAdd: (name: string) => void;
}

const HabitAddForm = memo((props: IHabitAddFormProps) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const formRef = React.createRef<HTMLFormElement>();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = inputRef.current?.value;
    name && props.onAdd(name);
    formRef.current?.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
