// ReservationForm.test.js
import { render, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

test("Renders the ReservationForm heading", () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText("RESERVE A TABLE");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Choose date label", () => {
  render(<ReservationForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
