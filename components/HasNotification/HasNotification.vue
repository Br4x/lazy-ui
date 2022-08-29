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
        'bg-purple-500': color == 'purple',
        'bg-yellow-500': color == 'yellow',
        'bg-gray-500': color == 'gray',
        'bg-cool-gray-500': color == 'cool-gray',
        'bg-pink-500': color == 'pink',
        'bg-red-500': color == 'red',
        'bg-orange-500': color == 'orange',
        'bg-green-500': color == 'green',
        'bg-teal-500': color == 'teal',
        'bg-blue-500': color == 'blue',
        'bg-indigo-500': color == 'indigo',
      }"
    class="absolute inline-flex rounded-full h-6 w-6 relief" />
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
    
