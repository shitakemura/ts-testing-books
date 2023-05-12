import { Meta, StoryObj } from '@storybook/react'

import { Result } from './Result'

export default {
  component: Result,
} as Meta<typeof Result>

export const Standard: StoryObj<typeof Result> = {
  args: { tax: 10000 },
}

export const NoResult: StoryObj<typeof Result> = {
  args: { tax: null },
}
