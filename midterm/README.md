# CSC336 Web Technologies - Lab Midterm (Section A)

## Student & Personal Numbers
- **Name:** Sarfraz Hameed
- **Registration Number:** FA24-BCS-139
- **N (last two digits of roll number):** 39
- **Breakpoint (BP = 600 + N):** 639px
- **Accent Hue (H = (N * 7) mod 360):** 273 (`hsl(273, 70%, 45%)`)
- **Categories (K = (N mod 3) + 3):** 3 (`Quick Prep`, `Veggie`, `Family` + `All` = 4 radio buttons)
- **Sticky Offset ((N mod 40) + 70):** 109px
- **Premium Threshold (N * 100):** 3900

## Files Changed / Added
- `midterm/index.html`
- `midterm/product.html`
- `midterm/script.js`
- `midterm/README.md`
- `midterm/FA24-BCS-139-midterm.pdf`

## Summary of Changes per Task
- **Task 1 (CSS-only category filter):** Added 3 category classes (`.cat-quick`, `.cat-veggie`, `.cat-family`) to the product cards on `index.html` and placed 4 radio buttons (`#cat-all`, `#cat-quick`, `#cat-veggie`, `#cat-family`) above `.product-grid`. Used the `:checked` pseudo-class with the `~` general sibling combinator (`#cat-quick:checked ~ .product-grid .product-card:not(.cat-quick) { display: none; }`) so non-matching cards hide without leaving gaps, and styled the active filter label with `hsl(273, 70%, 45%)`.
- **Task 2 (Product page layout with sticky details box):** Created `midterm/product.html` using CSS Grid with `grid-template-areas`. Below `639px`, `"image"`, `"details"`, and `"description"` stack in one column; from `639px` and wider (`@media (min-width: 639px)`), `"image details"` sit side-by-side above full-width `"description description"`, and `.product-details-box` uses `position: sticky; top: 109px; align-self: start;`.
- **Task 3 (JavaScript live search, price sort & Premium badge):** Added `midterm/script.js` to filter existing cards on the `input` event in combination with the active radio filter and toggle `#no-products-msg` ("No products found") when zero cards match. Implemented price sorting by reading each card's price from `.product-price`, sorting the array of DOM elements, and reordering them via `productGrid.appendChild(card)`, plus adding a `.premium-badge` ("Premium") on page load to cards with price > `3900`.

## AI Tools Used
- Google Gemini