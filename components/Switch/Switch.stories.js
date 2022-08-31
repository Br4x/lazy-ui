import UiSwitch from "./Switch.vue";

export default {
  title: "Components/Switch",
  component: UiSwitch,
  template: `<ui-switch v-model="value" {...args}>{{args.default}}</ui-switch>`,
  argTypes: {
    value: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    color: {
      control: "select",
      options: [
        "transparent",
        "yellow",
        "gray",
        "cool-gray",
        "pink",
        "red",
        "orange",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
      ],
    },
  },
};

export const base = {
  args: {
    value: false,
    disabled: false,
    color: "green"
  },
};
