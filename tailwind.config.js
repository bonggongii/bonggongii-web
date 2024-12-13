/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',  // Next.js에서 사용하는 페이지 파일들
    './src/components/**/*.{js,ts,jsx,tsx}',  // 프로젝트의 컴포넌트 폴더
    './src/app/**/*.{js,ts,jsx,tsx}',  // Next.js 13 앱 디렉토리
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

