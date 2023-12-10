/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      width: {
        'video_custom' : '50rem',
        'video_resp' : '32rem',
        'video_cel' : '23rem',
      },

      height: {
        'video_h' : '35rem',
        'video_h_resp' : '25rem',
        'video_h_cel' : '20rem',
      },
    },
  },
  plugins: [],
}
