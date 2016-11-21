let hue = 130
let sat = 55
let light = 55
let alpha = 1

//hsl (128,100 %, 50 %)
const getHSL = () => {
  return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
}

const main = () => {
  const swatch = document.querySelector('.swatch')
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    swatch.style.backgroundColor = getHSL()
    console.log(getHSL())
  })
  const satInput = document.querySelector('input[name=sat]')
  satInput.addEventListener('input', () => {
    sat = satInput.value
    swatch.style.backgroundColor = getHSL()
    console.log(getHSL())
})
  const lightInput = document.querySelector('input[name=light]')
  lightInput.addEventListener('input', () => {
  light = lightInput.value
  swatch.style.backgroundColor = getHSL()
  console.log(getHSL())
})
  const alphaInput = document.querySelector('input[name=alpha]')
  alphaInput.addEventListener('input', () => {
    alpha = alphaInput.value
    swatch.style.backgroundColor = getHSL()
    console.log(getHSL())
})
}

document.addEventListener('DOMContentLoaded', main)
