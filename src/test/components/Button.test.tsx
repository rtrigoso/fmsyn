import { render } from "@testing-library/preact";
import { expect, test } from "bun:test";
import Button from "../../components/Button";

test("Button renders a valid preact component", () => {
  const { container } = render(<Button />);
  expect(container.firstChild).not.toBeNull();
});
