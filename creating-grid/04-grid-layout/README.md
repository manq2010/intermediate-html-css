# Advanced Grid Properties

### `resize: both`

This is a property that allows the user to resize the container by clicking and dragging from the bottom right corner. This will be beneficial to us when we start using properties that resize our grid tracks based on the size of the grid.

### `overflow: auto`

to enable scrolling if we resize the container to be smaller than our grid can accommodate.

### `gap` and `padding`

We use the properties `gap` and `padding` to establish a “gutter” area to be able to visualize the grid items better.

### `border` and `background-color`

The `border` and `background-color` are included to make the container look nicer.

## Repeat

`repeat()` is a CSS function available to the CSS Grid template properties that allows us to define a number of rows or columns and the size we want them to be without having to manually type out each individual track’s size. For example, in our setup above:

```css
.grid-container {
  grid-template-rows: 150px 150px;
  grid-template-columns: 150px 150px 150px 150px 150px;
}
```

can be rewritten as:

```css
.grid-container {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
}
```

## Fractional units

The most basic way to make our grid items dynamic is by using **fractional units**, also known as `fr`.

The `fr` unit is a way of distributing whatever remaining space is left in the grid. For example, if we have a four-column grid with a total width of `400px` and four grid items each on a column track assigned `1fr` as their size, all of the grid items should be given one fraction of that `400px` of space, which is 100 pixels.

## Minimum and Maximum Track Sizes: min() and max()

`min()` will return the smallest of all the values passed in, and `max()` will return the largest. For example, `min(100px, 200px)` will return a value of `100px` every time, while `max(100px, 200px)` will return a value of 200px every time.

```css
.grid-container {
  grid-template-rows: repeat(2, min(100px, 200px, 300px, 400px, 500px));
  grid-template-columns: repeat(5, max(100px, 200px, 300px, 400px, 500px));
}
```

In this case, the grid row size will be calculated from the values `200px` and `50%` grid container’s height. In realtime, the browser will compare both of these values and apply whichever is smallest to the size of our grid row. Essentially, what this tells this grid is that the track size should be `50%` of the grid’s total vertical space (because we are defining a row size), unless that number would exceed `200px`. Essentially, you’re setting a max-height for the track.

Conversely, the grid column size will be calculated based on the larger of the two values `120px` and `15%`of the grid container’s width. In doing so, we are essentially setting a minimum width of our grid column size at `120px`. Check out the example here, and try clicking and dragging to change the grid’s dimensions to see how the grid items respond:

```css
.grid-container {
  grid-template-rows: repeat(2, min(200px, 50%));
  grid-template-columns: repeat(5, max(120px, 15%));
}
```

## Dynamic minimum and maximum sizes

`minmax()`
`minmax()` is a CSS function that is specifically used with Grid. It can only be used with the following CSS properties:

- `grid-template-columns`
- `grid-template-rows`
- `grid-auto-columns`
- `grid-auto-rows`

It is a relatively straightforward function that only takes in two arguments:

1. The minimum size the grid track can be
2. The maximum size the grid track can be

```css
.grid-container {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, minmax(150px, 200px));
}
```

## auto-fit and auto-fill

These two values are actually a part of the `repeat()`function specification, but they were saved for the end of the lesson because their usefulness is not apparent until after you understand the `minmax()` function. Here’s the use case: You want to give your grid a number of columns that are flexible based on the size of the grid. For example, if our grid is only `200px` wide, we may only want one column. If it’s `400px` wide, we may want two, and so on. Solving this problem with media queries would be a lot of typing. Thankfully, `auto-fit` and `auto-fill` are here to save the day!

```css
.simple-example {
  display: grid;
  width: 1000px;
  grid-template-columns: repeat(auto-fit, 200px);

grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```
