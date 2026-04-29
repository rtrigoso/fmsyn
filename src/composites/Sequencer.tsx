import Knob from "./Knob";
import Switch from "../components/Switch";

export default function Sequencer() {
  const steps = new Array(8).fill(false);

  return (
    <div>
      <div class="button play"></div>
      <div class="button stop"></div>
      <div class="tempo_selection"><Knob name="tempo_selection" /></div>
      <div class="display tempo"></div>
      <div class="sequence">
        {steps.map((value, index) => (
          <Switch name={`step_${index}`} isActive={value} />
          )
        )}
      </div>
    </div>
  )
}
