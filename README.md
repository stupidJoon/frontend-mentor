# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/product-preview-card-component-with-css-grid-m9rKuS7nR1
- Live Site URL: https://2dd341f5.frontend-mentor-2dx.pages.dev

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

* 구글 폰트 사용법
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Montserrat:wght@500;700&display=swap" rel="stylesheet">
```

* div를 중앙에 정렬하면서 푸터가 맨밑에 고정되게 하는 법(css grid)
> grid가 세로방향이면 `grid-auto-flow: column` 을 설정해줘야 함
```html
<div class="parent">
  <div class="center-child"></div>
  <div class="footer-child"></div>
</div>
```
```css
.parent {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-auto-flow: column;
  place-items: center;
}
.center-child {
  grid-row-start: 2;
}
.footer-child {
  align-self: end;
}
```

* flex-grow가 있으면 flex item padding을 넣으면 flex item width가 늘어남
> flex-grow가 아닌 flex-basis로 설정해야 padding을 넣어도 안늘어남
