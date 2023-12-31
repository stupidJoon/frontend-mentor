# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://results-summary-component.frontend-mentor-2dx.pages.dev

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

* flex로 padding 포함해서 1:1비율 하려면 `box-sizing: border-box`, flex item마다 `flex: 0 0 50%` 설정하기
* `linear-gradient` 사용법
* `aspect-ratio` 사용시 width 비율 안맞는 경우 `width: min-content` 설정하기
* `hsl` 변수 lightness(밝기) 변겅하고 싶을때 `hsl(from var(--variable) h s l / 0.1);`(밝기 0.1로 어둡게 만들기)

### Useful resources

- https://www.joshwcomeau.com/css/custom-css-reset - Custom CSS Reset and explained
