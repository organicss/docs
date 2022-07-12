![OrganiCSS - Logical CSS. Naturally.](./src/assets/organicss-repo-opengraph-tagline.jpg)

-   [What is Logical CSS](#what-is-logical-css)
-   [Why OrganiCSS is Logical CSS](#why-organicss)
-   [Getting Started](#getting-started)
-   [Mixins](#mixins)
-   [Border](#border)
-   [Border Radius](#border-radius)
-   [Layout](#layout)
-   [Margin](#margin)
-   [Padding](#padding)
-   [Position](#position)

# OrganiCSS

-   [What is Logical CSS](#what-is-logical-css)

OrganiCSS is a collection of mixins for writing logical CSS in different pre-processors and
libraries.

## What is Logical CSS?

"The web has firmly shifted into an expectation of responsive, user-friendly sites and products.
That fluidity has allowed the platform to scale at tremendous rates, and has fully altered entire
markets and industries. But in the pursuit of supporting more and more devices, what happens if one
of those devices isn't in English? Or French? Or any other language that flows from top to bottom,
left to right?

> Building inclusive products doesn't mean supporting devices, but supporting the people using them.

Looking at Hebrew specifically, a language written and read from right to left, there're plenty of
styling challenges in handling this minor variation. Instances of `text-align: left` would need to
be conditionally updated to `text-align: right` or an entirely separate set of styles is loaded,
essentially creating a second unique version of the site or product.

What happens then with Japanese, where text flows from top to bottom, and content from right to
left? Or Mongolian where the text flows the same, but the content is flipped to flow left to right?

This is where CSS Logical Properties shine. When writing `text-align: left`, it's likely because the
text should be positioned where the content is expected to _start_. Only, as mentioned, content
doesn't always start at the left. So what would be ideal is something like `text-align: start` to
ensure our content is aligned with its expected starting point.

And that's exactly what CSS Logical Properties do."

[Read more about Logical CSS](https://www.danyuschick.com/articles/css-logical-properties-are-the-future-of-the-web-and-i18n/)

## Why OrganiCSS?

OrganiCSS doesn't try to re-write CSS, but to encapsulate its modern features with direct fallbacks.
The aim is to provide support for every logical property and value described at
[MDN: CSS Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).
Each property is grouped into a category, and that category becomes an OrganiCSS mixin.

Let's look at an example in SCSS.

```scss
.container {
    @include margin($blockEnd: 1rem, $inline: auto);
}
```

This will return the resulting CSS.

```css
.container {
    margin-block-end: 1rem;
    margin-inline-start: auto;
    margin-inline-end: auto;

    @supports not (margin-block-end: 1rem) {
        margin-bottom: 1rem;
        margin-left: auto;
        margin-right: auto;
    }
}
```

As browser support for logical CSS increases, the `@supports` query will be less and less necessary.
Eventually, leaving only the modern CSS required to create the most flexible and inclusive UIs.

## Getting Started

To begin using OrganiCSS, first select the flavor of choice: LESS, SCSS; Styled Components or
Stylus, and install the package into your project.

```bash
npm i @organicss/less
npm i @organicss/scss
npm i @organicss/styled-components
npm i @organicss/stylus
```

Once the package is installed, import the mixins and include them in the styles.

```scss
@import '../node_modules/@organicss/scss';

.container {
    @include padding($block: 1rem 2rem, $inline: var(--space-2));
}
```

```jsx
import { Padding } from '@organics/styled-components";

const Container = styled.section`
    ${Padding({ block: "1rem 2rem", inline: "var(--space-2)" })};
`;
```

## Mixins

Each mixin can be imported individually, or the whole set can be imported at once.

```scss
// import every mixin
@import '/node_modules/@organicss/scsss';

// import only a specific mixin
@import '/node_modules/@organicss/scss/margin';
```

```jsx
// import every mixin
import OrganiCSS from '@organicss/styled-components';

// import only a specific mixin
import { Margin } from '@organicss/styled-components';
```

> The documentation of props strips any platform-specific syntax. Note, each props would be prefaced
> by `$` or `@` in SCSS or LESS environments.

### Border

```scss
@import '/node_modules/@organicss/scss/border';

.container {
    @include border(...);
}
```

| Prop             | CSS Property (_Fallback_)                                 | Example                                                             |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| border           | border                                                    | `border: 1px solid red`                                             |
| borderColor      | border-color                                              | `borderColor: red` <br/> `borderColor: red blue green orange`       |
| borderStyle      | border-style                                              | `borderStyle: solid` <br/> `borderStyle: solid dashed inset dotted` |
| borderWidth      | border-width                                              | `borderWidth: 3px` <br/> `borderWidth: 3px 1px 5px 10px`            |
| block            | border-block-start/end (_border-top/bottom_)              | `block: 1px solid orange`                                           |
| blockColor       | border-block-start/end-color (_border-top/bottom-color_)  | `blockColor: red`<br/>`blockColor: red green`                       |
| blockStyle       | border-block-start/end-style (_border-top/bottom-style_)  | `blockStyle: solid`<br/>`blockStyle: solid dashed`                  |
| blockWidth       | border-block-start/end-width (_border-top/bottom-width_)  | `blockWidth: 3px`<br/>`blockWidth: 3px 1px`                         |
| blockEnd         | border-block-end (_border-bottom_)                        | `blockEnd: 1px solid red`                                           |
| blockEndColor    | border-block-end-color (_border-bottom-color_)            | `blockEndColor: red`                                                |
| blockEndStyle    | border-block-end-style (_border-bottom-style_)            | `blockEndStyle: dashed`                                             |
| blockEndWidth    | border-block-end-width (_border-bottom-width_)            | `blockEndWidth: 1px`                                                |
| blockStart       | border-block-start (_border-top_)                         | `blockStart: 1px solid red`                                         |
| blockStartColor  | border-block-start-color (_border-top-color_)             | `blockStartColor: red`                                              |
| blockStartStyle  | border-block-start-style (_border-top-style_)             | `blockStartStyle: dashed`                                           |
| blockStartWidth  | border-block-start-width (_border-top-width_)             | `blockStartWidth: 1px`                                              |
| inline           | border-inline-start/end (_border-left/right_)             | `inline: 1px solid orange`                                          |
| inlineColor      | border-inline-start/end-color (_border-left/right-color_) | `inlineColor: red`<br/>`inlineColor: red green`                     |
| inlineStyle      | border-inline-start/end-style (_border-left/right-style_) | `inlineStyle: solid`<br/>`inlineStyle: solid dashed`                |
| inlineWidth      | border-inline-start/end-width (_border-left/right-width_) | `inlineWidth: 3px`<br/>`inlineWidth: 3px 1px`                       |
| inlineEnd        | border-inline-end (_border-right_)                        | `inlineEnd: 1px solid red`                                          |
| inlineEndColor   | border-inline-end-color (_border-right-color_)            | `inlineEndColor: red`                                               |
| inlineEndStyle   | border-inline-end-style (_border-right-style_)            | `inlineEndStyle: dashed`                                            |
| inlineEndWidth   | border-inline-end-width (_border-right-width_)            | `inlineEndWidth: 1px`                                               |
| inlineStart      | border-inline-start (_border-left_)                       | `inlineStart: 1px solid red`                                        |
| inlineStartColor | border-inline-start-color (_border-left-color_)           | `inlineStartColor: red`                                             |
| inlineStartStyle | border-inline-start-style (_border-left-style_)           | `inlineStartStyle: dashed`                                          |
| inlineStartWidth | border-inline-start-width (_border-left-width_)           | `inlineStartWidth: 1px`                                             |

### Border Radius

```scss
@import '/node_modules/@organicss/scss/borderRadius';

.container {
    @include border-radius(...);
}
```

| Prop        | CSS Property (_Fallback_)                             | Example                                                             |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------------------- |
| bottomLeft  | border-end-start-radius (_border-bottom-left-radius_) | `bottomLeft: 8px`                                                   |
| bottomRight | border-end-end-radius (_border-bottom-right-radius_)  | `bottomRight: 8px`                                                  |
| radius      | border-radius                                         | `radius: 8px`<br/>`radius: 8px 4px`<br/>`radius: 8px 4px / 1em 10%` |
| topLeft     | border-start-start-radius (_border-top-left-radius_)  | `topLeft: 8px`                                                      |
| topRight    | border-start-end-radius (_border-top-right-radius_)   | `topRight: 8px`                                                     |

### Layout

```scss
@import '/node_modules/@organicss/scss/layout';

.container {
    @include layout(...);
}
```

| Prop                     | CSS Property (_Fallback_)                            | Example                                                              |
| ------------------------ | ---------------------------------------------------- | -------------------------------------------------------------------- |
| blockSize                | block-size (_height_)                                | `blockSize: 100%`                                                    |
| captionSide              | caption-side                                         | `captionSide: block-start`                                           |
| clear                    | clear                                                | `clear: inline-start`                                                |
| maxBlockSize             | max-block-size (_max-height_)                        | `maxBlockSize: 100%`                                                 |
| minBlockSize             | min-block-size (_min-height_)                        | `minBlockSize: 50%`                                                  |
| inlineSize               | inline-size (_width_)                                | `inlineSize: 100%`                                                   |
| maxInlineSize            | max-inline-size (_max-width_)                        | `maxInlineSize: 100%`                                                |
| minInlineSize            | min-inline-size (_min-width_)                        | `minInlineSize: 50%`                                                 |
| overflow                 | overflow                                             | `overflow: scroll`<br/>`overflow: scroll hidden`                     |
| overflowBlock            | overflow-block (_overflow-x_)                        | `overflowBlock: auto`                                                |
| overflowInline           | overflow-inline (_overflow-y_)                       | `overflowInline: auto`                                               |
| overscrollBehavior       | overscroll-behavior                                  | `overscrollBehavior: contain`<br/>`overscrollBehavior: contain auto` |
| overscrollBehaviorBlock  | overscroll-behavior-block (_overscroll-behavior-x_)  | `overscrollBehaviorBlock: contain`                                   |
| overscrollBehaviorInline | overscroll-behavior-inline (_overscroll-behavior-y_) | `overscrollBehaviorInline: auto`                                     |
| resize                   | resize                                               | `resize: block`                                                      |
| textAlign                | text-align                                           | `textAlign: start`                                                   |

### Margin

```scss
@import '/node_modules/@organicss/scss/margin';

.container {
    @include margin(...);
}
```

| Prop              | CSS Property (_Fallback_)                                   | Example                                            |
| ----------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| block             | margin-block-start/end (_margin-bottom/top_)                | `block: 8px`<br/>`block: 8px 16px`                 |
| blockEnd          | margin-block-end (_margin-bottom_)                          | `blockEnd: 8px`                                    |
| blockStart        | margin-block-start (_margin-top_)                           | `blockStart: 8px`                                  |
| inline            | margin-inline-start/end (_margin-left/right_)               | `inline: 8px`<br/>`inline: 8px 16px`               |
| inlineEnd         | margin-inline-end (_margin-right_)                          | `inlineEnd: 8px`                                   |
| inlineStart       | margin-inline-start (_margin-left_)                         | `inlineStart: 8px`                                 |
| margin            | margin                                                      | `margin: 8px`<br/>`margin: 8px 0 4px 16px`         |
| scroll            | scroll-margin                                               | `scroll: 16px`<br/>`scroll: unset 8px revert 16px` |
| scrollBlock       | scroll-margin-block-start/end (_scroll-margin-top/bottom_)  | `scrollBlock: 8px`<br/>`scrollBlock: 8px 16px`     |
| scrollBlockEnd    | scroll-margin-block-end (_scroll-margin-bottom_)            | `scrollBlockEnd: 8px`                              |
| scrollBlockStart  | scroll-margin-block-start (_scroll-margin-top_)             | `scrollBlockStart: 8px`                            |
| scrollInline      | scroll-margin-inline-start/end (_scroll-margin-left/right_) | `scrollInline: 8px`<br/>`scrollInline: 8px 16px`   |
| scrollInlineEnd   | scroll-margin-inline-end (_scroll-margin-right_)            | `scrollInlineEnd: 8px`                             |
| scrollInlineStart | scroll-margin-inline-start (_scroll-margin-left_)           | `scrollInlineStart: 8px`                           |

### Padding

```scss
@import '/node_modules/@organicss/scss/padding';

.container {
    @include padding(...);
}
```

| Prop              | CSS Property (_Fallback_)                                     | Example                                            |
| ----------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| block             | padding-block-start/end (_padding-bottom/top_)                | `block: 8px`<br/>`block: 8px 16px`                 |
| blockEnd          | padding-block-end (_padding-bottom_)                          | `blockEnd: 8px`                                    |
| blockStart        | padding-block-start (_padding-top_)                           | `blockStart: 8px`                                  |
| inline            | padding-inline-start/end (_padding-left/right_)               | `inline: 8px`<br/>`inline: 8px 16px`               |
| inlineEnd         | padding-inline-end (_padding-right_)                          | `inlineEnd: 8px`                                   |
| inlineStart       | padding-inline-start (_padding-left_)                         | `inlineStart: 8px`                                 |
| padding           | padding                                                       | `padding: 8px`<br/>`padding: 8px 0 4px 16px`       |
| scroll            | scroll-padding                                                | `scroll: 16px`<br/>`scroll: unset 8px revert 16px` |
| scrollBlock       | scroll-padding-block-start/end (_scroll-padding-top/bottom_)  | `scrollBlock: 8px`<br/>`scrollBlock: 8px 16px`     |
| scrollBlockEnd    | scroll-padding-block-end (_scroll-padding-bottom_)            | `scrollBlockEnd: 8px`                              |
| scrollBlockStart  | scroll-padding-block-start (_scroll-padding-top_)             | `scrollBlockStart: 8px`                            |
| scrollInline      | scroll-padding-inline-start/end (_scroll-padding-left/right_) | `scrollInline: 8px`<br/>`scrollInline: 8px 16px`   |
| scrollInlineEnd   | scroll-padding-inline-end (_scroll-padding-right_)            | `scrollInlineEnd: 8px`                             |
| scrollInlineStart | scroll-padding-inline-start (_scroll-padding-left_)           | `scrollInlineStart: 8px`                           |

### Position

```scss
@import '/node_modules/@organicss/scss/position';

.container {
    @include position(...);
}
```

| Prop        | CSS Property (_Fallback_)       | Example                               |
| ----------- | ------------------------------- | ------------------------------------- |
| block       | inset-block (_top/bottom_)      | `block: 10%`<br/>`block: 10% 0`       |
| blockEnd    | inset-block-end (_bottom_)      | `blockEnd: 0`                         |
| blockStart  | inset-block-start (_top_)       | `blockStart: 10%`                     |
| float       | float                           | `float: inline-start`                 |
| inline      | inset-inline (_left/right_)     | `inline: 10%`<br/>`inline: 10% 0`     |
| inlineEnd   | inset-inline-end (_right_)      | `inlineEnd: 0`                        |
| inlineStart | inset-inline-start (_left_)     | `inlineStart: 10%`                    |
| inset       | inset (_top/right/bottom/left_) | `inset: 0`<br/>`inset: 0 50% 10% 10%` |
