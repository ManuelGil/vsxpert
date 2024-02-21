module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    purgecss: {
      content: ['./**/*.{astro,js,html}']
    }
  }
}
