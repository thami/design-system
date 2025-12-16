import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    children: "New software update available.",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    children: "Your purchase has been confirmed!",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning: Invalid email address!",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Error! Task failed successfully.",
    variant: "error",
  },
};
