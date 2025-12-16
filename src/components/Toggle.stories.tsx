import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Data Input/Toggle",
  component: Toggle,
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
    label: "Enable notifications",
    checked: false,
  },
};

export const Primary: Story = {
  args: {
    label: "Primary toggle",
    variant: "primary",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled toggle",
    disabled: true,
    checked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="xs" checked />
      <Toggle size="sm" checked />
      <Toggle size="md" checked />
      <Toggle size="lg" checked />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toggle label="Primary" variant="primary" checked />
      <Toggle label="Secondary" variant="secondary" checked />
      <Toggle label="Accent" variant="accent" checked />
      <Toggle label="Success" variant="success" checked />
      <Toggle label="Warning" variant="warning" checked />
      <Toggle label="Info" variant="info" checked />
      <Toggle label="Error" variant="error" checked />
    </div>
  ),
};
