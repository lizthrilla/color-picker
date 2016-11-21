let hue = 128
let sat = 100
let light = 50
let alpha = 1
cnst swatch = document.querySelector('.swatch')
const displayColor() = >
//hsl (128,100 %, 50 %)
const getHSL = () => {
  return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
}

const main = () => {
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    console.log(getHSL())
    swatch.backgroundColor = getHSL()
  })
}

document.addEventListener('DOMContentLoaded', main)
