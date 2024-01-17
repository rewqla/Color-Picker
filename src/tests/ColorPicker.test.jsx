import { fireEvent, screen, waitFor } from "@testing-library/react";
import ColorPicker from "../components/ColorPicker";
import { renderWithProviders } from "../utils/renderWithProviders";
import user from "@testing-library/user-event";

const setRGB = async (red, green, blue) => {
  fireEvent.change(await screen.findByLabelText("red"), {
    target: { value: red },
  });
  fireEvent.change(await screen.findByLabelText("green"), {
    target: { value: green },
  });
  fireEvent.change(await screen.findByLabelText("blue"), {
    target: { value: blue },
  });
};

test("it should convert RGB to HEX correctly", async () => {
  renderWithProviders(<ColorPicker selectedColor={null} />);

  await setRGB(164, 183, 164);

  const hexInput = await screen.findByLabelText("HEX");

  expect(hexInput.value).toBe("#a4b7a4");
});

test('it should generate a random color when the "Random Color" button is clicked', async () => {
  renderWithProviders(<ColorPicker selectedColor={null} />);

  const randomColorButton = await screen.findByRole("button", {
    name: /Random Color/i,
  });

  const initialBackgroundColor = (await screen.findByTestId("color-preview"))
    .style.backgroundColor;

  await user.click(randomColorButton);

  const newBackgroundColor = (await screen.findByTestId("color-preview")).style
    .backgroundColor;

  expect(initialBackgroundColor).not.toBe(newBackgroundColor);
});

test("triggers API and changes color name", async () => {
  renderWithProviders(<ColorPicker selectedColor={null} />);

  const initialColorName = screen.queryByTestId("color-name");

  await setRGB(164, 183, 164);

  await waitFor(() => {
    const newColorName = screen.queryByTestId("color-name").textContent;
    expect(initialColorName).not.toBe(newColorName);
  });
});
