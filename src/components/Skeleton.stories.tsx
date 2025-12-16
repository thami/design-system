import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: "select",
      options: ["rectangle", "circle"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "200px",
    height: "1rem",
  },
};

export const Circle: Story = {
  args: {
    width: "4rem",
    height: "4rem",
    shape: "circle",
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-52">
      <Skeleton shape="circle" width="4rem" height="4rem" />
      <Skeleton height="1rem" />
      <Skeleton height="1rem" />
      <Skeleton height="1rem" width="80%" />
    </div>
  ),
};

export const ArticleSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Skeleton height="12rem" />
      <Skeleton height="2rem" width="60%" />
      <Skeleton height="1rem" />
      <Skeleton height="1rem" />
      <Skeleton height="1rem" width="90%" />
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton shape="circle" width="3rem" height="3rem" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton height="1rem" width="40%" />
            <Skeleton height="0.75rem" width="80%" />
          </div>
        </div>
      ))}
    </div>
  ),
};
