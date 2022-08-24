# More Text Styles

https://fonts.google.com/
https://fontlibrary.org/

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap" rel="stylesheet">

<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/jellee-typeface" type="text/css"/>


### CSS

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

font-family: 'Raleway', sans-serif;

p {
   font-family: 'JelleeBold';
   font-weight: normal;
   font-style: normal;
}

# Parent and Sibling Combinators

> - the child combinator
+ - the adjacent sibling combinator
~ - the general sibling combinator

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements

https://flukeout.github.io/

# Position

https://developer.mozilla.org/en-US/docs/Web/CSS/position

# CSS Functions

calc(), min(), max(), and clamp()

## calc()

The most powerful use cases for calc include:

Mixing units
The ability to nest calc( calc () - calc () )

### html

<body>
		<div id="container">
			<header id="header">< header /></header>
			<main id="mainContent">< main content /></main>
			<footer id="footer">< footer /></footer>
		</div>
</body>

### CSS


	--header: 3rem;
	--footer: 40px;
	--main: calc(100vh - calc(var(--header) + var(--footer)));
}

body {
	margin: 0;
	padding: 0;
	border: 0px solid transparent;
	background: #7a7a7a;
}

#container {
	border: 0px solid transparent;
	height: 100vh;
	color: white;
}
#container > * {
	display: flex;
	justify-content: center;
	align-items: center;
}

#header {
	height: var(--header);
	background: #111111;
}
#mainContent {
	height: var(--main);
	background: #343434;
	margin-right: auto;
	margin-left: auto;
}
#footer {
	height: var(--footer);
	background: #232323;
}

## min()

min() does an excellent job of helping us create responsive websites. Take a look at this example:

#iconHolder {
  width: min(150px, 100%);
  height: min(150px, 100%);
  box-sizing: border-box;
  border: 6px solid blue;
}

## max()

Max works the same way as min, only in reverse. It will select the largest possible value from within the parentheses. You can think of max() as ensuring a minimum allowed value for a property.

Consider the following property of a given element:

width: max(100px, 4em, 50%);

## clamp()

clamp() is a great way to make elements fluid and responsive. clamp() takes 3 values:

h1 {
  font-size: clamp(320px, 80vw, 60rem);
}

1. the smallest value (320px)
2. the ideal value (80vw)
3. the largest value (60rem)

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions

# Custom Properties

By declaring our custom property on the :root selector in the example above, we can access it on any other valid selector within our CSS file, since any other selector would be considered a descendant of the :root selector.

## :root selector

:root {
  --main-color: red;
}

.cool-paragraph {
  color: var(--main-color);
}

.exciting-paragraph {
  background-color: var(--main-color);
}

## Media Queries

@media (prefers-color-scheme: dark) {
  :root {
    --border-btn: 1px solid rgb(220, 220, 220);
    --color-base-bg: rgb(18, 18, 18);
    --color-base-text: rgb(240, 240, 240);
    --color-btn-bg: rgb(36, 36, 36);
    --theme-name: "dark";
  }
}

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

# Frameworks Overview

They are designed to abstract away the process of coding intuitive, reusable, and responsive elements. A CSS framework is ultimately just a bundle of CSS that you can use and access, using the classes defined by the framework

# Preprocessors Overview

Preprocessors (aka precompilers) are languages that help you write CSS more easily. They reduce code repetition and provide all sorts of time-saving and code-saving features

## SASS Documentation

https://sass-lang.com/documentation/