export default function Sequencer() {
  const steps = new Array(8).fill(false);

  return (
    <div>
      <div class="button play"></div>
      <div class="button stop"></div>
      <div class="knob tempo_selection"></div>
      <div class="display tempo"></div>
      <div class="sequence">
        {steps.map((value, index) => (
          <input
            type="checkbox"
            name={`step_${index}`}
            value={value} />
          )
        )}
      </div>
    </div>
  )
}
