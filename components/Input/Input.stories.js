import UiInput from "./Input.vue";

export default {
  title: "Components/Input",
  component: UiInput,
  template: `<ui-input v-model="value" {...args}>{{args.default}}</ui-input>`,
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
    isLoading: {
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

export const base = {
  args: {
    placeholder: "Le nom de ton chat ?",
    label: "Nom du chat",
    value: "",
    disabled: false,
    isLoading: false,
    type: 'text'
  },
};
