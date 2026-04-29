import { render } from "@testing-library/preact";
import { expect, test } from "bun:test";
import Switch from "../../components/Switch";

test("Switch renders a valid preact component", () => {
  const { container } = render(<Switch />);
  expect(container.firstChild).not.toBeNull();
});
