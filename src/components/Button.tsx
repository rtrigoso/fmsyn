interface ButtonProps {
  name?: string;
}

export default function Button({ name }: ButtonProps) {
  return (
    <input
      type="button"
      class="button"
      name={name} />
  );
}
