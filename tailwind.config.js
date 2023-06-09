/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@headlessui/tailwindcss'),
    require('@headlessui/vue'),
  ],
}

