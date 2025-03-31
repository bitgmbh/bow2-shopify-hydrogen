import tailwindConfig from '@bitgmbh/ebiz-patterns-core/lib/tailwind/tailwind.config';

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindConfig,
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'],
};
