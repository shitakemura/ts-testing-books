import { Meta, StoryObj } from '@storybook/react'

import { Result } from './Result'

export default {
  component: Result,
} as Meta<typeof Result>

export const Standard: StoryObj<typeof Result> = {
  args: { tax: 10000, calcStatus: 'succeeded' },
}

export const NoResult: StoryObj<typeof Result> = {
  args: { tax: 0, calcStatus: 'before-calculation' },
}
