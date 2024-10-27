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

test("Reservation form inputs have the correct attributes", () => {
  render(<ReservationForm />);
  
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("type", "date");
  
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  
  const emailInput = screen.getByLabelText("Email");
  expect(emailInput).toHaveAttribute("type", "email");
  expect(emailInput).toHaveAttribute("required");
});
