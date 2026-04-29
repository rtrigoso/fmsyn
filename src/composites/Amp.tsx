import Knob from "./Knob";

export default function Amp() {
  return (
    <div>
      <div class="slider volume"></div>
      <div class="grid">
        <div class="graph main"></div>
        <div class="container">
          <div class="attack"><Knob name="attack" /></div>
          <div class="decay"><Knob name="decay" /></div>
          <div class="sustain"><Knob name="sustain" /></div>
          <div class="release"><Knob name="release" /></div>
        </div>
      </div>
    </div>
  );
}
