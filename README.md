# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-faqs-7NLIwPbwBu
- Live Site URL: https://faq-accordion.frontend-mentor-2dx.pages.dev

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

* ::before background-image svg크기를 조절할려면 width/height와 background-size 둘다 조절해야 한다
* details 세모 없앨라면 display를 바꾸면 된다
* element 사이에 ::before 넣으려면 `parent .elem + .elem::before` 으로 ::before를 추가하면 된다

### Useful resources

- https://getcssscan.com/css-box-shadow-examples - `box-shadow` 템플릿 리스트

### Questions

- 왜 details에는 flexbox가 적용이 안될까? gap을 넣고 싶었는데 적용이 안돼서 p태그에 margin-top을 줬다.
