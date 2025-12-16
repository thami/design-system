import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Data Input/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["bordered", "ghost", "primary", "secondary", "accent", "info", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Select an option",
  },
};

export const Primary: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Select an option",
    variant: "primary",
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Disabled select",
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Select size="xs" options={sampleOptions} placeholder="Extra small" />
      <Select size="sm" options={sampleOptions} placeholder="Small" />
      <Select size="md" options={sampleOptions} placeholder="Medium" />
      <Select size="lg" options={sampleOptions} placeholder="Large" />
    </div>
  ),
};
