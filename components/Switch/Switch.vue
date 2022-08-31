<template>
  <div>
    <div
      class="
        switch
        relative
        inline-block
        w-10
        mr-2
        align-middle
        select-none
        transition
        duration-200
        ease-in
      "
    >
      <input
        type="checkbox"
        name="toggle"
        :checked="value"
        :id="uniqueId"
        :disabled="disabled"
        @change="$emit('change', $event.target.checked)"
        class="
          toggle-checkbox
          absolute
          block
          w-6
          h-6
          rounded-full
          border-transparent
          bg-white
          border-4
          appearance-none
          cursor-pointer
        "
      />
      <label
        :for="uniqueId"
        class="
          toggle-label
          block
          overflow-hidden
          h-6
          rounded-full
          bg-gray-300
          cursor-pointer
          bg-opacity-30
        "
      />
    </div>
    <label for="toggle" class="text-s">
      <slot>Label du switch</slot>
    </label>
  </div>
</template>

<script>
import { uniqueId } from "lodash-es";

export default {
  name: "Switch",
  inheritAttrs: false,
  props: {
    value: Boolean,
    disabled: Boolean,
    color: String,
    id: String
  },
  computed: {
    hasLabel() {
      return !!this.$slots.default;
    },
    uniqueId() {
      return this.id || uniqueId("switch-");
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-label {
  box-shadow: rgb(0 0 0 / 25%) 0px 0.0625em 0.0625em,
    rgb(0 0 0 / 25%) 0px 0.125em 0.5em, rgb(0 0 0 / 5%) 0px 0px 0px 3px inset;
}

.toggle-checkbox {
  box-shadow: inset 3px 3px 3px -3px #ffffff,
    rgb(0 0 0 / 25%) 0px 0.0625em 0.0625em, rgb(0 0 0 / 25%) 0px 0.125em 0.5em,
    rgb(255 255 255 / 10%) 0px 0px 0px 1px inset;
  &:checked {
    @apply: right-0 border-green-400;
    right: 0;
    //border-color: #68D391;
  }
  &:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68d391;
  }
}
</style>
