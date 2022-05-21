import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'


const gameBoard = document.getElementById('game-board')
let lastRenderTime = 0

function main(currentTime)
{
   window.requestAnimationFrame(main)

   // Calculating time in seconds since last render
   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

   // Only move snake every half second
   if (secondsSinceLastRender < 1 / SNAKE_SPEED)
   {
      return
   }

   // Set last time the screen was rendered to the current time
   lastRenderTime = currentTime

   // Update the UI states
   update()

   // Draw the UI based on the data in the update function
   draw()
}

window.requestAnimationFrame(main)


// Update
function update()
{
   updateSnake()
}


// Draw
function draw()
{
   // Clearing the screen the game board so only the length given in the update function in input.js is displayed
   gameBoard.innerHTML = ''

   // Draw the snake on the game board
   drawSnake(gameBoard)
}