<h1 align="center">
    eldicons
</h1>

<p align="center">
    SVG Icons made on a 24x24 grid with a 2px stroke.
<p>

<p align="center">
    <a href="https://eldicons.com/"><strong>eldicons.com &rarr;</strong></a>
</p>

## Usage

All icons are built using SVG, meaning you can use the all the same ways as SVGs (`img`, `background-image`, `inline`, `embed`, `iframe`).

### Inline HTML

Copy the source for the icon you need from [eldicons.com](https://eldicons.com) and inline it directly into your HTML.

```html
<svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    stroke-width="2" 
    stroke="currentColor" 
    fill="none" 
    stroke-linecap="round" 
    stroke-linejoin="round"
>
    <path fill="none" stroke="none" d="M0 0h24v24H0z" />
    ...
</svg>
```

### React

Installl `eldicons` from npm:

```sh
npm install eldicons
```

Each icon can be individually imported as a React component.

```js
import { Pizza } from 'eldicons'

const myComponent = () => {
    return (
        <Pizza
            size={24} // set width and height
            color="blue" // set stroke color
            stroke={2} // set stroke width
        />
    )
}
```

## License

This library is [MIT licensed](https://github.com/lukeaelder/eldicons/blob/main/LICENSE).