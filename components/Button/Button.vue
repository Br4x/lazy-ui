<template>
  <button
    :class="{
      'animate-bounce': isBouncing && !disabled,
      'relative': hasBadge,
      'animate-pulse': isFlickering,
      'opacity-25 cursor-not-allowed': disabled
    }"
    class="mx-auto h-16 w-64 flex justify-center items-center"
  >
    <div
      :class="{
        'transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out cursor-pointer': !disabled,
        'cursor-not-allowed': disabled,
        'rounded-full': isRound,
        'rounded-xl': !isRound,
        'bg-gradient-to-br': isGradient,
        'from-yellow-400': isGradient && color == 'yellow',
        'to-yellow-600': isGradient && color == 'yellow',
        'from-gray-400': isGradient && color == 'gray',
        'to-gray-600': isGradient && color == 'gray',
        'from-cool-gray-400': isGradient && color == 'cool-gray',
        'to-cool-gray-600': isGradient && color == 'cool-gray',
        'from-pink-400': isGradient && color == 'pink',
        'to-pink-600': isGradient && color == 'pink',
        'from-red-400': isGradient && color == 'red',
        'to-red-600': isGradient && color == 'red',
        'from-orange-400': isGradient && color == 'orange',
        'to-orange-600': isGradient && color == 'orange',
        'from-green-400': isGradient && color == 'green',
        'to-green-600': isGradient && color == 'green',
        'from-teal-400': isGradient && color == 'teal',
        'to-teal-600': isGradient && color == 'teal',
        'from-blue-400': isGradient && color == 'blue',
        'to-blue-600': isGradient && color == 'blue',
        'from-indigo-400': isGradient && color == 'indigo',
        'to-indigo-600': isGradient && color == 'indigo',
        'from-purple-400': isGradient && color == 'purple',
        'to-purple-600': isGradient && color == 'purple',
        'bg-purple-400':!isGradient && color == 'purple',
        'bg-yellow-500':!isGradient && color == 'yellow',
        'bg-gray-400':!isGradient && color == 'gray',
        'bg-cool-gray-400':!isGradient && color == 'cool-gray',
        'bg-pink-400':!isGradient && color == 'pink',
        'bg-red-400':!isGradient && color == 'red',
        'bg-orange-400':!isGradient && color == 'orange',
        'bg-green-400':!isGradient && color == 'green',
        'bg-teal-400':!isGradient && color == 'teal',
        'bg-blue-400':!isGradient && color == 'blue',
        'bg-indigo-400':!isGradient && color == 'indigo',
      }"
      class="
        relief
        i
        h-16
        w-64
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
      <slot>Button</slot>
    </span>
    <has-notification v-if="hasBadge" :is-pulsating="isBadgePulsating" :color="colorBadge"/>
  </button>
</template>

<script>
import HasNotification from "../HasNotification/HasNotification.vue";
export default {
  components: { HasNotification },
  name: "Button",
  props: {
    isBouncing: Boolean,
    isRound: Boolean,
    isFlickering: Boolean,
    hasBadge: Boolean,
    isGradient: Boolean,
    color: String,
    colorBadge: String,
    isBadgePulsating: Boolean,
    disabled: Boolean
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
