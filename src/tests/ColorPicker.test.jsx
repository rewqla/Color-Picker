import { fireEvent, screen } from "@testing-library/react";
import ColorPicker from "../components/ColorPicker";
import { renderWithProviders } from "../utils/renderWithProviders";

test("it should convert RGB to HEX correctly", async () => {
  // render the component
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
