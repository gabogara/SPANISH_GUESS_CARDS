# Web Development Project 3 - _SPANISH_GUESS_CARDS_

Submitted by: **Gabriel Restrepo**

This web app: **This web app is a flashcard-based vocabulary practice tool designed to help users learn Spanish words through an interactive guessing game. Each card displays an English word or phrase along with an image, and users can type their guess in Spanish before revealing the answer on the back of the card. The app provides immediate feedback indicating whether the guess is correct or incorrect. Users can navigate through the cards using Previous and Next buttons, shuffle the deck to randomize the order, and track their performance with a current streak and longest streak counter. Cards are visually styled based on their category and difficulty level, making the learning experience more engaging and organized.**

Time spent: **16** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:


- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 

The following **additional** features are implemented:

- [x] Implemented a shuffle feature using the Fisher–Yates algorithm.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/rSEktOV.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/)

## Notes

The most challenging part at the beginning was figuring out how to structure the components and what state was needed to manage the app’s behavior. This project helped me better understand how components communicate with each other and how to handle events when users click buttons. I also learned how to flip the cards by conditionally applying CSS classes using a ternary operator.

## License

    Copyright [2026] [Gabriel Restrepo]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
