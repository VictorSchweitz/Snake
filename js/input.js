let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', (e) =>
{
   switch (e.key)
   {
      case 'ArrowUp':
         console.log('Arrow Up')
         inputDirection = { x: 0, y: -1 }
         break

      case 'ArrowRight':
         console.log('Arrow Right')
         inputDirection = { x: 1, y: 0 }
         break

      case 'ArrowDown':
         console.log('Arrow Down')
         inputDirection = { x: 0, y: 1 }
         break

      case 'ArrowLeft':
         console.log('Arrow Left')
         inputDirection = { x: -1, y: 0 }
         break

   }
})

export function getInputDirection()
{
   lastInputDirection = inputDirection
   return inputDirection
}