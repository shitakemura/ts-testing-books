import { Meta, StoryObj } from "@storybook/react";
import { deliveryAddresses } from "./fixtures";
import { Form } from "./Form";

export default {
  component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const NoDeliveryAddresses: Story = {
  storyName: "過去のお届け先がない場合",
  args: { deliveryAddresses: [] },
};

export const HasDeliveryAddresses: Story = {
  storyName: "過去のお届け先がある場合",
  args: { deliveryAddresses },
};
