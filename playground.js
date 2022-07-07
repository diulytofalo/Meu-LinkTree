const inputContainer = document.querySelector('input')

const htmlElement = document.documentElement

console.log(htmlElement)

const brightTheme = {
  '--mainbackground': 'url(https://live.staticflickr.com/2905/14028981322_172b03c5b4_b.jpg)',
  '--maintextcolor': 'rgb(254, 252, 235)',
  '--borderpicturecolor': '#e1b400',
  '--buttoncolor': '#f7de21ea',
  '--darkbuttoncolor': '#e1b400',
  '--textbuttoncolor': 'black',
  '--rocketseatcolor': 'rgb(237, 232, 198)',
}

const darkTheme = {
  '--mainbackground': 'url(https://live.staticflickr.com/3432/3310214210_813d13c899_b.jpg)',
  '--maintextcolor': 'rgb(237, 232, 198)',
  '--borderpicturecolor': 'rgb(237, 232, 198)',
  '--buttoncolor': 'rgb(221, 217, 184)',
  '--darkbuttoncolor': 'rgb(172, 168, 147)',
  '--textbuttoncolor': 'black',
  '--rocketseatcolor': 'rgb(172, 168, 147)',
}

inputContainer.addEventListener('change', function() {
  const isChecked = inputContainer.checked
  isChecked ? changeTheme(darkTheme) : changeTheme(brightTheme)
})

function changeTheme(theme) {
  console.log(theme)
  for (let prop in theme) {
    changeProperty(prop, theme[prop])
  }
}

function changeProperty(property, value) {
  htmlElement.style.setProperty(property, value)
}