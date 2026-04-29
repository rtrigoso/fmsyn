interface SwitchProps {
  name?: string;
  isActive?: boolean;
}

export default function Switch({ name, isActive }: SwitchProps) {
  return (
    <input
      type="checkbox"
      class="switch"
      name={name}
      checked={isActive} />
  );
}
