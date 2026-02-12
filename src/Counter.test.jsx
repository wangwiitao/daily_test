import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import { Counter } from "./Counter";
it("should render the Counter", () => {
  render(<Counter />);
  screen.debug();
});
