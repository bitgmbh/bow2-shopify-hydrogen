import tailwindConfig from '@bitgmbh/ebiz-patterns-core/lib/tailwind/tailwind.config';
import merge from 'lodash/merge';

const mergedConfig = merge(tailwindConfig, {
  plugins: [require('tailwind-scrollbar')],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'],
  ...mergedConfig,
};