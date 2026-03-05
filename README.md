# Web Development Project 2 - _VocabFlip_

Submitted by: **Gabriel Restrepo**

This web app: **Is a flashcard-based web application designed to help users practice and learn vocabulary in an interactive way. Each card displays a word or phrase on the front and reveals the translation when flipped. Users can navigate through the flashcards using Previous, Next, or Random buttons, and track their progress with a card counter. The cards include images to provide visual context and are styled differently based on their category and difficulty level, creating a more engaging and visually organized learning experience.**

Time spent: **15** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

- [x] Implemented Previous / Next navigation with wrap-around and a progress counter (current / total)
- [x] Added a Random button to jump to a different card
- [x] Included images on the front side of flashcards
- [x] Standardized category values (CSS-friendly) and applied category-based styling (different colors per category)
- [x] Added difficulty labels and styling based on difficulty level (easy/medium/hard)
- [x] Added a helper to format category/difficulty text for display without changing the stored data
- [x] Added a themed background image and improved overall layout spacing/alignment

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
