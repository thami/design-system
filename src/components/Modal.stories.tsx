import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Actions/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          id="modal-default"
          title="Hello!"
          open={open}
          onClose={() => setOpen(false)}
          actions={<Button onClick={() => setOpen(false)}>Close</Button>}
        >
          <p>Press ESC key or click the button below to close</p>
        </Modal>
      </>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Confirmation</Button>
        <Modal
          id="modal-actions"
          title="Confirm Action"
          open={open}
          onClose={() => setOpen(false)}
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p>Are you sure you want to proceed with this action?</p>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Long Modal</Button>
        <Modal
          id="modal-long"
          title="Terms and Conditions"
          open={open}
          onClose={() => setOpen(false)}
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Decline
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Accept
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
        </Modal>
      </>
    );
  },
};
