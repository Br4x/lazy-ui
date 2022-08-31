<template>
  <div class="Input" :class="{ 'opacity-80 cursor-not-allowed': disabled }">
    <label v-if="label">{{ label }}</label>
    <input
      :class="{ 'opacity-80 cursor-not-allowed': disabled }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      v-on="inputListeners"
    />
    
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    disabled: Boolean,
    placeholder: String,
    type: {
      type: String,
      default: "text",
    },
    isValid: Boolean,
    label: String,
    value: {
      type: [String, Number],
      required: false
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
.Input {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1rem 1rem;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgb(255 255 255 / 40%);
  border: 1px solid rgb(209 213 219 / 50%);

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    z-index: 2;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    -webkit-animation: gradient 3s linear infinite;
    animation: gradient 3s linear infinite;
  }

  & label {
    position: absolute;
    top: -27px;
    font-weight: 500;
    left: 0px;
    color: rgb(0 0 0 / 70%);
  }

  & input {
    flex-grow: 1;
    color: black;
    vertical-align: middle;
    border-style: none;
    background: transparent;
    outline: none;
    &::-webkit-input-placeholder {
      color: rgb(0 0 0 / 30%);
    }
  }
}
</style>
