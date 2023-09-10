# Etch-a-Sketch Project

## Overview

This Etch-a-Sketch project was created as a part of The Odin Project course to enhance knowledge about the Document Object Model (DOM) and JavaScript. It allows users to draw on a grid, enable a rainbow mode, erase and clear the entire grid.

## Features

- **Drawing**: Users can draw by holding down the left button hovering their mouse over the grid squares.

- **Color Selection**: There is a "Rainbow" mode that allows the colors to change randomly as you draw.

- **Grid Size**: The project allows you to customize the grid size with a maximum limit of 100 squares per side.

- **Erasing**: The "Erase All" button clears the entire grid, resetting it to its initial state.

## How It Works

The core of the project relies on JavaScript and the DOM. Here's a brief overview of the key functions:

- `changeColor(event)`: It can use the default color (black) or switch to a random rainbow color if the "Rainbow" mode is active.

- `rainbow()`: Generates a random RGB color for the rainbow mode.

- `generateGrid()`: Dynamically generates the grid based on user input for the grid size. It ensures that the grid size is within the specified limits.

- `startDrawing(event)`, `stopDrawing()`, `drawWhileMouseMoving(event)`, "mouseleave": These functions handle the drawing functionality. They track mouse events to draw on the grid while the mouse button is held down.

- `eraseAll()`: Clears the entire grid and resets the project to its initial state.

- Event listeners are used to trigger actions when buttons are clicked or when the mouse interacts with the grid.

## Usage

1. Open the project in your web browser.

2. Click the "Choose A Side Value" button to set the grid size.

3. Select a drawing color by clicking on the color palette buttons.

4. You can enable the "Rainbow" mode to have colors change randomly as you draw.

5. Hover over the grid squares to draw.

6. Click the "Erase All" button to clear the grid.

## Acknowledgments

- The Odin Project: [Link to the course](https://www.theodinproject.com/)