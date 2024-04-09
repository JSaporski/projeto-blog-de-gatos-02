/***** Related Posts Delay Animation *****/
const related = document.querySelectorAll('.related li')
let delay = 0

related.forEach((post, index) => {
  if (index === 0) {
    return
  }

  post.style.animationDelay = `${(delay += 0.3)}s`
})

/***** Palette *****/
const palette = document.querySelector('.palette')
const paletteBtn = palette.querySelector('.palette-btn')
const paletteWrapper = palette.querySelector('.palette-wrapper')
const rangeInput = paletteWrapper.querySelector('input')

function handleClickOutside(event) {
  if (!palette.contains(event.target)) {
    paletteWrapper.classList.remove('active')
  }
}

paletteBtn.addEventListener('click', () => {
  paletteWrapper.classList.toggle('active')
  document.documentElement.addEventListener('click', handleClickOutside)
})

rangeInput.addEventListener('input', event => {
  document.documentElement.style.setProperty(
    '--hue',
    `${event.currentTarget.value}`
  )
})
