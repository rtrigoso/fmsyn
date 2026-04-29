import { render } from "@testing-library/preact";
import { expect, test } from "bun:test";
import Knob from "../../components/Knob";

test("Knob renders a valid preact component", () => {
  const { container } = render(<Knob />);
  expect(container.firstChild).not.toBeNull();
});
