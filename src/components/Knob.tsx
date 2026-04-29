interface KnobProps {
  min?: number;
  max?: number;
  name?: string;
}

export default function Knob({ min, max, name }: KnobProps) {
  return (
    <input type="range" min={min} max={max} name={name} class="knob" />
  );
}
