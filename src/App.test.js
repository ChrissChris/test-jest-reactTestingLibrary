import { render, screen } from "@testing-library/react"
import App from "./App.js" // We import the App component which will be checked with test below

it("should list and check for items A,B,Cn respectively", () => {
  render(<App />)

  const items = screen.getAllByText(/Item/) // Here we check for all items which start with name "Item"

  expect(items.length).toEqual(3) // Here we check and say that we expect the number of items to be equal of 3.
})
