import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["bordered", "lifted", "boxed"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs = [
  { id: "tab1", label: "Tab 1", content: "Content for Tab 1" },
  { id: "tab2", label: "Tab 2", content: "Content for Tab 2" },
  { id: "tab3", label: "Tab 3", content: "Content for Tab 3" },
];

export const Bordered: Story = {
  render: () => {
    const [active, setActive] = useState("tab1");
    return <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} variant="bordered" />;
  },
};

export const Lifted: Story = {
  render: () => {
    const [active, setActive] = useState("tab1");
    return <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} variant="lifted" />;
  },
};

export const Boxed: Story = {
  render: () => {
    const [active, setActive] = useState("tab1");
    return <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} variant="boxed" />;
  },
};

export const Sizes: Story = {
  render: () => {
    const [active, setActive] = useState("tab1");
    return (
      <div className="flex flex-col gap-8">
        <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} size="xs" />
        <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} size="sm" />
        <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} size="md" />
        <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} size="lg" />
      </div>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [active, setActive] = useState("tab1");
    const tabsWithDisabled = [
      { id: "tab1", label: "Tab 1", content: "Content for Tab 1" },
      { id: "tab2", label: "Tab 2 (Disabled)", content: "Content for Tab 2", disabled: true },
      { id: "tab3", label: "Tab 3", content: "Content for Tab 3" },
    ];
    return <Tabs tabs={tabsWithDisabled} activeTab={active} onChange={setActive} />;
  },
};
