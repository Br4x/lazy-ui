import UiButton from "./Button.vue";

export default {
  title: "Components/Button",
  component: UiButton,
  template: `<ui-button {...args}>{{args.default}}</ui-button>`,
  argTypes: {
    isBouncing: {
      control: { type: "boolean" },
    },
    isRound: {
      control: { type: "boolean" },
    },
    isFlickering: {
      control: { type: "boolean" },
    },
    hasBadge: {
      control: { type: "boolean" },
    },
    isGradient: {
      control: { type: "boolean" },
    },
    color: {
      control: "select",
      options: ["yellow", "gray", "cool-gray", "pink", "red", "orange", "green", "teal", "blue", "indigo", "purple"],
    },
    colorBadge: {
      control: "select",
      options: ["yellow", "gray", "cool-gray", "pink", "red", "orange", "green", "teal", "blue", "indigo", "purple"],
    },
    isBadgePulsating: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    default: {
      control: {
        type: 'text'
      },
      defaultValue: 'Button'
    },
  },
};

export const Base = {
  args: {
    isBouncing: false,
    isRound: false,
    isFlickering: false,
    hasBadge: false,
    default: "Hover on me!",
    isGradient: false,
    isBadgePulsating: false,
    color: "yellow",
    disabled: false
  },
};