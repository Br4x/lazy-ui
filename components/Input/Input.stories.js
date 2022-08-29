import UiInput from "./Input.vue";

export default {
  title: "Components/Input",
  component: UiInput,
  template: `<ui-input {...args}>{{args.default}}</ui-input>`,
  argTypes: {
    type:{
      control: {
        type: 'text'
      }
    },
    value:{
      control: {
        type: 'text'
      }
    },
    isValid: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
  },
};

export const Base = {
  args: {
    isValid: null,
    placeholder: "Le nom de ton chat ?",
    label: "Nom du chat",
    value: "Nom du chat",
    disabled: false,
    type: 'text'
  },
};
