import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { expect, test, describe, vi } from "vitest";
import { Button } from "./Button";

describe("Render the button correctly", () => {
  test("should render the button with the correct text", async () => {
    render(<Button text="Click me!" />);

    const button = await screen.findByRole("button");

    expect(button.firstChild).toHaveTextContent("Click me!");
  });

  test("should call the onClick function when clicked", async () => {
    const onClick = vi.fn();
    render(<Button text="Click me!" onClick={onClick} />);

    const button = await screen.findByRole("button");

    await user.click(button);

    expect(onClick).toHaveBeenCalledOnce();
  });

  test("should have a type of button by default", async () => {
    render(<Button text="Click me!" />);

    const button = await screen.findByRole("button");

    expect(button).toHaveAttribute("type", "button");
  });

  test("should have a type of submit when specified", async () => {
    render(<Button text="Click me!" onClick={() => {}} type="submit" />);

    const button = await screen.findByRole("button");

    expect(button).toHaveAttribute("type", "submit");
  });
});
