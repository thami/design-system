import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "./Button";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["normal", "compact", "side"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    children: <p>Card content goes here. This is a basic card example.</p>,
  },
};

export const WithImage: Story = {
  args: {
    title: "Card with Image",
    children: <p>A card with an image at the top.</p>,
    image: "https://picsum.photos/400/200",
    imageAlt: "Sample image",
    actions: <Button variant="primary">Action</Button>,
  },
};

export const Compact: Story = {
  args: {
    title: "Compact Card",
    children: <p>Less padding for tighter layouts.</p>,
    variant: "compact",
  },
};

export const Bordered: Story = {
  args: {
    title: "Bordered Card",
    children: <p>Card with a border instead of shadow.</p>,
    bordered: true,
  },
};

export const WithActions: Story = {
  args: {
    title: "Card with Actions",
    children: <p>This card has action buttons.</p>,
    actions: (
      <>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
    ),
  },
};
