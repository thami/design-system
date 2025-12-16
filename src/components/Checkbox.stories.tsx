import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Data Input/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [undefined, "primary", "secondary", "accent", "success", "warning", "info", "error"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Remember me",
    checked: false,
  },
};

export const Primary: Story = {
  args: {
    label: "Primary checkbox",
    variant: "primary",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
    checked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox size="xs" checked />
      <Checkbox size="sm" checked />
      <Checkbox size="md" checked />
      <Checkbox size="lg" checked />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Checkbox label="Primary" variant="primary" checked />
      <Checkbox label="Secondary" variant="secondary" checked />
      <Checkbox label="Accent" variant="accent" checked />
      <Checkbox label="Success" variant="success" checked />
      <Checkbox label="Warning" variant="warning" checked />
      <Checkbox label="Info" variant="info" checked />
      <Checkbox label="Error" variant="error" checked />
    </div>
  ),
};
