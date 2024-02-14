# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-page-LROP0H715O
- Live Site URL: https://interactive-card-details-for.frontend-mentor-2dx.pages.dev

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

- script type="module" 일때 file CORS 에러 뜸.
- input element has min-width size="20" default https://stackoverflow.com/a/29990524
- grid 1fr은 flex-grow라서 flex-basis로 줄려면 minmax(0, 1fr)
- flex min-height problem https://stackoverflow.com/a/63131269 flex 아이템들은 min-width, height가 기본 0이 아닌 min-content이다.
- min-height일시 자녀 height percentage 적용안됨
