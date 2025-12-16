import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    variant: {
      control: "select",
      options: [undefined, "neutral", "primary", "secondary", "accent", "success", "warning", "info", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full">
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="w-full">
      <p>Content above</p>
      <Divider>OR</Divider>
      <p>Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-24 items-center">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="w-full flex flex-col gap-2">
      <Divider variant="neutral">Neutral</Divider>
      <Divider variant="primary">Primary</Divider>
      <Divider variant="secondary">Secondary</Divider>
      <Divider variant="accent">Accent</Divider>
      <Divider variant="success">Success</Divider>
      <Divider variant="warning">Warning</Divider>
      <Divider variant="info">Info</Divider>
      <Divider variant="error">Error</Divider>
    </div>
  ),
};
