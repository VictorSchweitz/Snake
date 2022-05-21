import { getInputDirection } from './input.js'

export const SNAKE_SPEED = 1

const snakeBody = [{ x: 11, y: 11 }]

export function update()
{
   // Get input direction
   getInputDirection()

   // Moving each piece to where the piece in front of it used to be
   for (let i = snakeBody.length - 2; i >= 0; i--)
   {
      snakeBody[i + 1] = { ...snakeBody[i] }
   }

   // snakeBody[0].x += 0
   // snakeBody[0].y += 1
}

export function draw(gameBoard)
{
   snakeBody.forEach((snakeBodyPart) =>
   {
      // Creating a div to represent each part of the body
      const bodyPart = document.createElement('div')

      // Separating each body part with 3 pixels
      bodyPart.style.margin = '3px'

      // Setting the body to start from the positions given in the snakeBody array
      bodyPart.style.gridRowStart = snakeBodyPart.y
      bodyPart.style.gridColumnStart = snakeBodyPart.x

      // Adding the snake class to the body part
      bodyPart.classList.add('snake')

      // Appending the snake to the game board
      gameBoard.appendChild(bodyPart)
   })
}