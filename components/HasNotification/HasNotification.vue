<template>
  <span
    class="
      absolute
      flex
      h-6
      w-6
      top-0
      right-0
      transform
      -translate-x-2.5
      -translate-y-2.5
    "
  >
    <span
      :class="{
        'animate-ping': isPulsating,
        'bg-purple-400': color == 'purple',
        'bg-yellow-400': color == 'yellow',
        'bg-gray-400': color == 'gray',
        'bg-cool-gray-400': color == 'cool-gray',
        'bg-pink-400': color == 'pink',
        'bg-red-400': color == 'red',
        'bg-orange-400': color == 'orange',
        'bg-green-400': color == 'green',
        'bg-teal-400': color == 'teal',
        'bg-blue-400': color == 'blue',
        'bg-indigo-400': color == 'indigo',
      }"
      class="
        absolute
        inline-flex
        h-full
        w-full
        rounded-full
        opacity-75
      "
    />
    <span 
    :class="{
        'from-yellow-400': color == 'yellow',
        'to-yellow-600': color == 'yellow',
        'from-gray-400': color == 'gray',
        'to-gray-600': color == 'gray',
        'from-cool-gray-400': color == 'cool-gray',
        'to-cool-gray-600': color == 'cool-gray',
        'from-pink-400': color == 'pink',
        'to-pink-600': color == 'pink',
        'from-red-400': color == 'red',
        'to-red-600': color == 'red',
        'from-orange-400': color == 'orange',
        'to-orange-600': color == 'orange',
        'from-green-400': color == 'green',
        'to-green-600': color == 'green',
        'from-teal-400': color == 'teal',
        'to-teal-600': color == 'teal',
        'from-blue-400': color == 'blue',
        'to-blue-600': color == 'blue',
        'from-indigo-400': color == 'indigo',
        'to-indigo-600': color == 'indigo',
        'from-purple-400': color == 'purple',
        'to-purple-600': color == 'purple',
      }"
    class="absolute inline-flex rounded-full h-6 w-6 relief bg-gradient-to-br" />
  </span>
</template>

<script>
export default {
  name: "HasNotifications",
  props: {
    isPulsating: Boolean,
    color: String
  },
};
</script>

<style lang="scss" scoped>
    .relief {
      box-shadow: inset 1px 1px 3px -3px #ffffff,
        rgb(0 0 0 / 25%) 0px 0.0625em 0.0625em, rgb(0 0 0 / 25%) 0px 0.125em 0.5em,
        rgb(255 255 255 / 10%) 0px 0px 0px 1px inset;
    }
    </style>
    
