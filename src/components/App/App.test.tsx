import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { expect, test, describe } from "vitest";
import { App } from "./App";

describe("Render the app correctly", () => {
  test("should render the title", async () => {
    render(<App />);

    const header = await screen.findByText("Valletta Software");

    expect(header).toBeInTheDocument();
  });

  test("should have a functioning button that increments the counter", async () => {
    render(<App />);

    const button = await screen.findByRole("button");
    const counter = await screen.findByText("0");

    expect(counter.innerHTML).toBe("0");

    await user.click(button);
    await user.click(button);

    expect(counter.innerHTML).toBe("2");
  });
});
