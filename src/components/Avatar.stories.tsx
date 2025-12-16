import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["circle", "rounded", "square"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "TM",
  },
};

export const Online: Story = {
  args: {
    src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    online: true,
  },
};

export const Offline: Story = {
  args: {
    src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    offline: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="sm" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="md" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="circle" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar shape="rounded" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar shape="square" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="avatar-group -space-x-6">
      <Avatar size="sm" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="sm" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="sm" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <Avatar size="sm" placeholder="+99" />
    </div>
  ),
};
