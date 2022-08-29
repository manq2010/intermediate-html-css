# Creating Grid

# Grid Container

property `display: grid` or `display: inline-grid`

* **grid** – generates a block-level grid
* **inline-grid** – generates an inline-level grid

## Colums and Rows

The properties `grid-template-columns` and `grid-template-rows` make defining column and row tracks easy, defing them in pixels

Shorthand `grid-template` property. Here we can define our rows and columns all at once. For this property, rows are defined before the slash and columns are defined after the slash.

Values:

* **<track-size>** – can be a length, a percentage, or a fraction of the free space in the grid (using the `fr`unit)
* **<line-name>** – an arbitrary name of your choosing

## Justify Items

Aligns grid items along the *inline (row)* axis (as opposed to `align-items` which aligns along the *block (column) axis)*. This value applies to all grid items inside the container.

* **start** – aligns items to be flush with the start edge of their cell
* **end** – aligns items to be flush with the end edge of their cell
* **center** – aligns items in the center of their cell
* **stretch** – fills the whole width of the cell (this is the default

## Align Items

Aligns grid items along the *block (column)* axis (as opposed to `justify-items` which aligns along the *inline (row)* axis). This value applies to all grid items inside the container.

Values:

* **stretch** – fills the whole height of the cell (this is the default)
* **start** – aligns items to be flush with the start edge of their cell
* **end** – aligns items to be flush with the end edge of their cell
* **center** – aligns items in the center of their cell
* **baseline** – align items `along text baseline`. There are modifiers to baseline — first baseline and last baseline which will use the baseline from the first or last line in the case of multi-line text.

## Place - items

`place-items` sets both the `align-items` and `justify-items` properties in a single declaration.

## Justify-content

```css  
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}

```

## Align-content

```css
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}

```

## Place-content

place-content sets both the align-content and justify-content properties in a single declaration.

Values:

* **<align-content>** / **<justify-content>**

## Explicit vs Implicit Grid

You’ll notice our fifth item was placed on the grid and it’s been slotted into a third row we did not define. This is because of the implicit grid concept and it’s how CSS Grid is able to automatically place grid items when we haven’t explicitly defined the layout for them.

When we use the `grid-template-columns` and `grid-template-rows` properties, we are explicitly defining grid tracks to lay out our grid items. But when the grid needs more tracks for extra content, it will implicitly define new grid tracks. Additionally, the size values established from our `grid-template-columns` or `grid-template-rows` properties are not carried over into these implicit grid tracks. But we can define values for the implicit grid tracks.

We can set the implicit grid track sizes using the `grid-auto-rows` and `grid-auto-columns` properties. In this way we can ensure any new tracks the implicit grid makes for extra content are set at values that we defined.

By default, CSS Grid will add additional content with implicit rows. This means the extra elements would keep being added further down the grid in a vertical fashion. It would be much less common to want extra content added horizontally along the grid, but that can be set using the `grid-auto-flow: column`property and those implicit track sizes can be defined with the `grid-auto-columns property`.

## Gap

shorthand `gap` to set both the `row-gap` and `column-gap`

# A Complete Guide to Grid

The  comprehensive guide to CSS grid, focusing on all the settings both for the grid parent container and the grid child elements

[Link-to-guide]

[Link-to-guide]: https://css-tricks.com/snippets/css/complete-guide-grid/
