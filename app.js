const input = document.querySelector('input')
const Start = document.querySelector('.Start')
const Clear = document.querySelector('.Clear')
const letterSpan = document.querySelector('.lettersSpan')
const wordsSpan = document.querySelector('.wordsSpan')


window.addEventListener('keypress', (e) => e.key === 'Enter' ? addLeters() : null)

const addLeters = () => {
   let letters = {}

   for (let i = 0; i < input.value.length; i++) {
      const letter = input.value[i]
      if (letters[letter]) {
         letters[letter]++
      } else {
         letters[letter] = 1
      }

   }

   const keySort = Object.keys(letters).sort((a, b) => letters[b] - letters[a])
   console.log('✌️keySort --->', keySort);

   const words = input.value.split(' ').filter((wordsSpan) => wordsSpan.length > 0).length;

   const sum = input.value.length

   letterSpan.textContent = `${words}`
   wordsSpan.textContent = `${sum}`



   input.value = ''
}
Start.addEventListener('click', addLeters)



Clear.addEventListener('click', () => {
   input.value = ''
   letterSpan.textContent = ''
   wordsSpan.textContent = ''
})


