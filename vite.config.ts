import { fileURLToPath, URL } from 'url';
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import { presetUno } from "unocss";

export default {
  server: {
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  plugins: [
    Unocss({
      presets: [
        presetUno(),
        presetIcons(),
      ],
      rules: [
        ['glass', { 'backdrop-filter': 'blur(2px)', background: 'rgba(255, 255, 255, 0.1)' }],
      ]
    }),
  ],
};