# Game-loved-by-all
A kind of memory game

#### https://pacific-fortress-96034.herokuapp.com/
#### https://github.com/grmrh/Game-loved-by-all

This application is a simple versio of Memory Game which is loved by children and adult alike. 

## Single-page application built with
* react
* bootstrap and its javascript
  

## Design architecture
* three state-less components (MemoryCard, Navbar and Title) and a wrapper
* one stateful App.js in the highest level.

## Usage
* User starts the game clicking on an image, which triggers to shuffle the images and increment the Score by 1. 
* The Score value increments by 1 each time the user click on an image that is not clicked previously.
* The Score value reset to 0 when the user click on the image that was clicked already. The game restarts at reset. Also the application sets the High Score with the current Score value if the current Score value is larger than the High Score value.
* The total number of the cards are 16, which means that one can get the best High Score is 16.
* Displaying 16 images in 4 x 4 grid is the best in terms of remembering the clicked images in a sense of spacial recognition. Thus ajudst the responsive screen to show images in 4 x 4 grid.
  

## Database 
* no database

## Authors
* **Grace Rhee** 

## Questions/suggestions
* Please direct all questions/suggestions to Grace Rhee.



