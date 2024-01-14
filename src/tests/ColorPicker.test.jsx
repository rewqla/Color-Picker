import { fireEvent, screen } from "@testing-library/react";
import ColorPicker from "../components/ColorPicker";
import { renderWithProviders } from "../utils/renderWithProviders";
import user from "@testing-library/user-event";

test("it should convert RGB to HEX correctly", () => {
  renderWithProviders(<ColorPicker selectedColor={null} />);

  const redInput = screen.getByLabelText("red");
  const greenInput = screen.getByLabelText("green");
  const blueInput = screen.getByLabelText("blue");

  fireEvent.change(redInput, { target: { value: 164 } });
  fireEvent.change(greenInput, { target: { value: 183 } });
  fireEvent.change(blueInput, { target: { value: 164 } });

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
