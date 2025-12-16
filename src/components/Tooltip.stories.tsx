import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "./Button";

const meta: Meta<typeof Tooltip> = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    variant: {
      control: "select",
      options: [undefined, "primary", "secondary", "accent", "info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tip: "Hello tooltip!",
    children: <Button>Hover me</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8 p-8">
      <Tooltip tip="Top tooltip" position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip tip="Bottom tooltip" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip tip="Left tooltip" position="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip tip="Right tooltip" position="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip tip="Primary" variant="primary" open>
        <Button variant="primary">Primary</Button>
      </Tooltip>
      <Tooltip tip="Secondary" variant="secondary" open>
        <Button variant="secondary">Secondary</Button>
      </Tooltip>
      <Tooltip tip="Accent" variant="accent" open>
        <Button variant="accent">Accent</Button>
      </Tooltip>
    </div>
  ),
};

export const AlwaysOpen: Story = {
  args: {
    tip: "Always visible tooltip",
    open: true,
    children: <Button>Always open</Button>,
  },
};
