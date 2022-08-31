<template>
  <button
    :class="{
      'cursor-progress': isLoading,
      'animate-bounce': isBouncing && !disabled,
      'animate-pulse': isFlickering,
      'opacity-25 cursor-not-allowed pointer-events-none': disabled,
    }"
    class="relative mx-auto min-h-16 min-w-32 flex justify-center items-center"
  >
    <div
      :class="{
        'transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out cursor-pointer':
          !disabled,
        'cursor-not-allowed pointer-events-none': disabled,
        'cursor-progress': isLoading,
        'rounded-full': isRound,
        'rounded-xl': !isRound,
        'bg-gradient-to-br': !isNotGradient,
        'from-yellow-400': !isNotGradient && color == 'yellow',
        'to-yellow-600': !isNotGradient && color == 'yellow',
        'from-gray-400': !isNotGradient && color == 'gray',
        'to-gray-600': !isNotGradient && color == 'gray',
        'from-cool-gray-400': !isNotGradient && color == 'cool-gray',
        'to-cool-gray-600': !isNotGradient && color == 'cool-gray',
        'from-pink-400': !isNotGradient && color == 'pink',
        'to-pink-600': !isNotGradient && color == 'pink',
        'from-red-400': !isNotGradient && color == 'red',
        'to-red-600': !isNotGradient && color == 'red',
        'from-orange-400': !isNotGradient && color == 'orange',
        'to-orange-600': !isNotGradient && color == 'orange',
        'from-green-400': !isNotGradient && color == 'green',
        'to-green-600': !isNotGradient && color == 'green',
        'from-teal-400': !isNotGradient && color == 'teal',
        'to-teal-600': !isNotGradient && color == 'teal',
        'from-blue-400': !isNotGradient && color == 'blue',
        'to-blue-600': !isNotGradient && color == 'blue',
        'from-indigo-400': !isNotGradient && color == 'indigo',
        'to-indigo-600': !isNotGradient && color == 'indigo',
        'from-purple-400': !isNotGradient && color == 'purple',
        'to-purple-600': !isNotGradient && color == 'purple',
        'bg-purple-400': isNotGradient && color == 'purple',
        'bg-yellow-500': isNotGradient && color == 'yellow',
        'bg-gray-500': isNotGradient && color == 'gray',
        'bg-cool-gray-500': isNotGradient && color == 'cool-gray',
        'bg-pink-400': isNotGradient && color == 'pink',
        'bg-red-400': isNotGradient && color == 'red',
        'bg-orange-400': isNotGradient && color == 'orange',
        'bg-green-400': isNotGradient && color == 'green',
        'bg-teal-400': isNotGradient && color == 'teal',
        'bg-blue-400': isNotGradient && color == 'blue',
        'bg-indigo-400': isNotGradient && color == 'indigo',
      }"
      class="
        relief
        i
        h-full
        w-full
        items-center
        shadow-2xl
        absolute
        overflow-hidden
      "
    />
    <span
      class="
        text-center text-white
        font-semibold
        z-10
        pointer-events-none
        flex
        justify-content
        items-center
        incrusted
        text-lg
      "
    >
      <div v-if="isLoading" class="w-12 h-12 i-eos-icons-three-dots-loading opacity-80" />
      <slot v-else>Button</slot>
    </span>
    <has-notification
      v-if="hasBadge"
      :is-pulsating="isBadgePulsating"
      :color="colorBadge"
    />
  </button>
</template>

<script>
import HasNotification from "../HasNotification/HasNotification.vue";
export default {
  components: { HasNotification },
  name: "Button",
  inheritAttrs: false,
  props: {
    isBouncing: Boolean,
    isRound: Boolean,
    isFlickering: Boolean,
    hasBadge: Boolean,
    isNotGradient: Boolean,
    color: String,
    colorBadge: String,
    isBadgePulsating: Boolean,
    isLoading: Boolean,
    disabled: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.relief {
  box-shadow: inset 3px 3px 3px -3px #ffffff,
    rgb(0 0 0 / 25%) 0px 0.0625em 0.0625em, rgb(0 0 0 / 25%) 0px 0.125em 0.5em,
    rgb(255 255 255 / 10%) 0px 0px 0px 1px inset;
}

.incrusted {
  text-shadow: #585858 0.8px 0.5px 0;
}
</style>
