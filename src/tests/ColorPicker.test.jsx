import { fireEvent, screen, waitFor } from "@testing-library/react";
import ColorPicker from "../components/ColorPicker";
import { renderWithProviders } from "../utils/renderWithProviders";
import user from "@testing-library/user-event";

const setRGB = (red, green, blue) => {
  fireEvent.change(screen.getByLabelText("red"), { target: { value: red } });
  fireEvent.change(screen.getByLabelText("green"), {
    target: { value: green },
  });
  fireEvent.change(screen.getByLabelText("blue"), { target: { value: blue } });
};

test("it should convert RGB to HEX correctly", () => {
  renderWithProviders(<ColorPicker selectedColor={null} />);

  setRGB(164, 183, 164);

  const hexInput = screen.getByLabelText("HEX");

  expect(hexInput.value).toBe("#a4b7a4");
});

test('it should generate a random color when the "Random Color" button is clicked', async () => {
  renderWithProviders(<ColorPicker selectedColor={null} />);

  const randomColorButton = screen.getByRole("button", {
    name: /Random Color/i,
  });

  const initialBackgroundColor =
    screen.getByTestId("color-preview").style.backgroundColor;

  await user.click(randomColorButton);

  const newBackgroundColor =
    screen.getByTestId("color-preview").style.backgroundColor;

  expect(initialBackgroundColor).not.toBe(newBackgroundColor);
});

test("triggers API and changes color name", async () => {
  renderWithProviders(<ColorPicker selectedColor={null} />);

  const initialColorName = screen.getByTestId("color-name").textContent;

  setRGB(164, 183, 164);

  await waitFor(() => {
    const newColorName = screen.getByTestId("color-name").textContent;
    expect(initialColorName).not.toBe(newColorName);
  });
});
