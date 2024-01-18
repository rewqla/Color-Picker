import { screen, waitFor, fireEvent } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "../utils/renderWithProviders";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("It should save color after clicking the Save Color button", async () => {
  renderWithProviders(<App />);

  const noSavedColors = await screen.findByText(/No saved colors yet./i);
  expect(noSavedColors).toBeInTheDocument();

  fireEvent.change(await screen.findByLabelText("red"), {
    target: { value: "123" },
  });

  const saveColorButton = await screen.findByRole("button", {
    name: /Save Color/i,
  });

  await waitFor(async () => {
    await user.click(saveColorButton);
  });

  expect(noSavedColors).not.toBeInTheDocument();
});

test("It should display saved color after clicking the Display color button", async () => {
  renderWithProviders(<App />);

  const initialBackgroundColor = (await screen.findByTestId("color-preview"))
    .style.backgroundColor;

  const displayColorButton = await screen.findByRole("button", {
    name: /Display color/i,
  });

  await waitFor(async () => {
    await user.click(displayColorButton);
  });
  await waitFor(async () => {
    const newBackgroundColor = (await screen.findByTestId("color-preview"))
      .style.backgroundColor;

    expect(initialBackgroundColor).not.toBe(newBackgroundColor);
  });
});

test("It should remove after clicking the Delete button", async () => {
  renderWithProviders(<App />);

  const initialSavedColors = await screen.findAllByRole("listitem");

  const deleteButton = await screen.findByRole("button", { name: /Delete/i });
  await waitFor(async () => {
    await user.click(deleteButton);
  });
  await waitFor(async () => {
    const updatedSavedColors = screen.queryAllByRole("listitem");
    expect(updatedSavedColors.length).toBe(initialSavedColors.length - 1);
  });
});
