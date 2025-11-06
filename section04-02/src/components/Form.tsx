import { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = {
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

export default function Form({ onSave, children, ...otherProps }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}
