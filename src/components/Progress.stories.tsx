import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [undefined, "primary", "secondary", "accent", "info", "success", "warning", "error"],
    },
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Primary: Story = {
  args: {
    value: 70,
    variant: "primary",
  },
};

export const Indeterminate: Story = {
  args: {
    variant: "primary",
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Progress value={10} />
      <Progress value={25} variant="primary" />
      <Progress value={40} variant="secondary" />
      <Progress value={55} variant="accent" />
      <Progress value={70} variant="info" />
      <Progress value={80} variant="success" />
      <Progress value={90} variant="warning" />
      <Progress value={100} variant="error" />
    </div>
  ),
};
