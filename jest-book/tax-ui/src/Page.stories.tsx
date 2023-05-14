import { Meta, StoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'

import { Presentation } from './Page'

export default {
  component: Presentation,
} as Meta<typeof Presentation>

export const BeforeCalculation: StoryObj<typeof Presentation> = {
  args: { tax: 10000, calcStatus: 'before-calculation' },
}

export const UnderCalculation: StoryObj<typeof Presentation> = {
  args: { tax: 10000, calcStatus: 'under-calculation' },
}

export const Succeeded: StoryObj<typeof Presentation> = {
  args: { tax: 10000, calcStatus: 'succeeded' },
}

export const Failed: StoryObj<typeof Presentation> = {
  args: { tax: 10000, calcStatus: 'failed' },
}

export const ValidationError: StoryObj<typeof Presentation> = {
  args: { tax: 0, calcStatus: 'before-calculation' },
  play: () => {
    userEvent.clear(screen.getByLabelText('勤続年数'))
    userEvent.clear(screen.getByLabelText('退職金'))
    userEvent.tab()
  },
}
