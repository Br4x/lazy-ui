<template>
  <div
    class="
      Input
      relative
      items-center
      flex
      w-full
      flex-row
      max-w-sm
      rounded-sm
      p-4
      pr-8
      border border-slate-300
      bg-white bg-opacity-40
      backdrop-blur-sm
      backdrop-saturate-180
    "
    :class="{
      'opacity-80 cursor-not-allowed': disabled,
      'is-empty': value === '',
      'is-valid': isValid,
      'is-invalid': isValid === false,
    }"
  >
    <label
      class="absolute left-0 font-medium -top-7"
      :class="{
        'opacity-80 cursor-not-allowed': disabled,
        'color-green-400': isValid,
        'color-red-400': isValid === false,
      }"
      v-if="label"
    >
      {{ label }}
    </label>
    <input
      class="
        grow
        align-middle
        border-none
        bg-transparent
        outline-0
        placeholder-black placeholder-opacity-25
      "
      :class="{ 'opacity-80 cursor-not-allowed': disabled }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      v-bind="$attrs"
      v-on="inputListeners"
    />
    <div v-if="isLoading" class="absolute right-3  w-7 h-7 i-line-md:loading-loop" />
    <div v-if="isValid" class="absolute right-3 w-7 h-7 i-bi:check color-green-400" />
    <div v-if="isValid === false" class="absolute right-3 w-7 h-7 i-prime:times color-red-400" />
  </div>
</template>

<script>
import { assign } from "lodash-es";

export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    isLoading: Boolean,
    disabled: Boolean,
    placeholder: String,
    type: {
      type: String,
      default: "text",
    },
    isValid: {
      type: Boolean,
      default: null,
      required: false,
    },
    label: String,
    value: {
      type: [String, Number],
      required: false,
    },
  },
  computed: {
    inputListeners() {
      return assign({}, this.$listeners, {
        input: (event) => {
          this.$emit("input", event.target.value);
        },
      });
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

  &.is-empty:after {
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

  &.is-valid:after {
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
    background: rgb(74, 222, 128);
    background-size: 500% auto;
  }

  &.is-invalid:after {
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
    background: rgba(248, 113, 113);
    background-size: 500% auto;
  }
}
</style>
