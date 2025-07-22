import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta = {
  title: "./Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
    args: {
        name: 'active',
        action: () => console.log('cliocked!~!'),
        className: 'any'
    }
}