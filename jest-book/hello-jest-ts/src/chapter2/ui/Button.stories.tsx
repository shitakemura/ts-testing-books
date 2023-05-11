import { Meta, StoryObj } from '@storybook/react'
import {
  screen,
  userEvent,
} from '@storybook/testing-library'
import { Button } from './Button'

export default { component: Button } as Meta<
  typeof Button
>

export const Primary: StoryObj<typeof Button> = {}
export const Secondary: StoryObj<typeof Button> = {
  args: { primary: false },
}

export const ClickButton: StoryObj<typeof Button> = {
  play: () => {
    const button = screen.getByRole('button')
    userEvent.click(button)
  },
}
