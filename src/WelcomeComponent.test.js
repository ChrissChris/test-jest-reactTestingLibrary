// The code below import the component which will be tested as well as the render and screen methods from "react-testing-library" which will use in the examples

import { render, screen } from "@testing-library/react"
import WelcomeComponent from "./WelcomeComponent"

it(`Should print out "Welcome to our App" `, () => {
  render(<WelcomeComponent />)

  const greeting = screen.queryByText("Welcome to our app")

  expect(greeting).toBeInTheDocument() // We declare that we will looking for the ,,greeting'' veriable  in the document, in our case (WelcomeComponent)
})
