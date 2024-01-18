import { screen, waitFor } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "../utils/renderWithProviders";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("It should save color after clicking Save Color button", async () => {
  renderWithProviders(<App />);
  const noSavedColors = await screen.findByText(/No saved colors yet./i);
  expect(noSavedColors).toBeInTheDocument();

  const saveColorButton = await screen.findByRole("button", {
    name: /Save Color/i,
  });

  await waitFor(async () => {
    await user.click(saveColorButton);
  });

  expect(noSavedColors).not.toBeInTheDocument();
});

test("It should remove after clicking Delete button", async () => {
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
