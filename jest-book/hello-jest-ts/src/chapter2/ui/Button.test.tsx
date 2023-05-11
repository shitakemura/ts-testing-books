/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer'
import {
  render,
  fireEvent,
  queryByText,
} from '@testing-library/react'
import { Button } from './Button'

describe('UI snapshot test', () => {
  // snapshot test with react-test-renderer
  test('renders correctly with react-test-renderer', () => {
    const button = renderer.create(<Button />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})

describe('UI interaction test', () => {
  test('changes the button text upon clicking the button with React Testing Library', () => {
    const button = render(<Button />)

    fireEvent.click(button.getByText('ON'))
    expect(button.getByText(/OFF/i)).toBeTruthy()

    fireEvent.click(button.getByText('OFF'))
    expect(button.getByText(/ON/i)).toBeTruthy()
  })
})
