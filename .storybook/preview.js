import { create } from '@storybook/theming';
import { action } from '@storybook/addon-actions';
import { app } from '@storybook/vue3';
import '@unocss/reset/tailwind.css';
import 'uno.css';

// If needed this should make pinia work in Storybook
// import { createPinia } from 'pinia'
// const pinia = createPinia()
// app.use(pinia)


// This makes nuxt-link work in Storybook
app.component('NuxtLink', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a @click="log()" style="cursor:pointer;"><slot>NuxtLink</slot></a>',
});


const CustomViewports = {
  reIPhone12: {
    name: 'iPhone 13 Pro',
    styles: {
      width: '390px',
      height: '844px',
    },
    type: 'mobile',
  },
  reMedium: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  reExtraLarge: {
    name: 'Small Desktop',
    styles: {
      width: '1280px',
      height: '720px',
    },
    type: 'desktop',
  },
};

const CustomGrid = {
  cellSize: 8,
  opacity: 0.2,
  cellAmount: 8,
  offsetX: 8,
  offsetY: 4,
};

const CustomBackgrounds = {
  default: 'gray',
  values: [
    {
      name: 'white',
      value: '#ffffff',
    },
    {
      name: 'gray',
      value: '#eeeeee',
    },
    {
      name: 'dev-mode',
      value: '#0d0d10',
    },
  ],
  grid: CustomGrid,
};

const darkTheme = create({
  base: 'dark',
  appBg: '#212128',
  barBg: '#17171d',
  appContentBg: '#17171d',
  inputBg: '#0d0d10',
  colorPrimary: '#ff4785',
  colorSecondary: '#2c85fc',
})

const lightTheme = create({
  base: 'light',
  appBg: '#f6f9fc',
  barBg: '#ffffff',
  appContentBg: '#ffffff',
  inputBg: '#ffffff',
  colorPrimary: '#ff4785',
  colorSecondary: '#1ea7fd',
})

export const parameters = {
  viewport: { viewports: CustomViewports },
  backgrounds: CustomBackgrounds,
  layout: 'centered',
  panelPosition: 'right',
  controls: { sort: 'alpha' },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Intro',
        [
          'Welcome',
          '*',
        ],
        'Atoms',
        'Molecules',
        'Organisms',
        '*',
      ],
    },
  },
};