import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Data Input/Input",
  component: Input,
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
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url", "search"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type here",
  },
};

export const Primary: Story = {
  args: {
    placeholder: "Primary input",
    variant: "primary",
  },
};

export const Ghost: Story = {
  args: {
    placeholder: "Ghost input",
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Input size="xs" placeholder="Extra small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Input variant="primary" placeholder="Primary" />
      <Input variant="secondary" placeholder="Secondary" />
      <Input variant="accent" placeholder="Accent" />
      <Input variant="info" placeholder="Info" />
      <Input variant="success" placeholder="Success" />
      <Input variant="warning" placeholder="Warning" />
      <Input variant="error" placeholder="Error" />
    </div>
  ),
};
