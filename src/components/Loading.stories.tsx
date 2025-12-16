import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Feedback/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["spinner", "dots", "ring", "ball", "bars", "infinity"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: [undefined, "primary", "secondary", "accent", "neutral", "info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {
    type: "spinner",
  },
};

export const Dots: Story = {
  args: {
    type: "dots",
  },
};

export const Ring: Story = {
  args: {
    type: "ring",
  },
};

export const Ball: Story = {
  args: {
    type: "ball",
  },
};

export const Bars: Story = {
  args: {
    type: "bars",
  },
};

export const Infinity: Story = {
  args: {
    type: "infinity",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading size="xs" />
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading variant="primary" />
      <Loading variant="secondary" />
      <Loading variant="accent" />
      <Loading variant="info" />
      <Loading variant="success" />
      <Loading variant="warning" />
      <Loading variant="error" />
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading type="spinner" />
      <Loading type="dots" />
      <Loading type="ring" />
      <Loading type="ball" />
      <Loading type="bars" />
      <Loading type="infinity" />
    </div>
  ),
};
