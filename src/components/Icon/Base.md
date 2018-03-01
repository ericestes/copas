The `Base` sub-component is utilized by all other UI SVG components. It provides the `SVG` container and basic styling.

The color of the SVG will be inherited from the container's `color` property.

If `width` or `height` props are omitted, the width will be set too `100%`.

If you need to define a size, it's recommened to set either `width` or `height`, but not both. The omitted value will automatically be set according to the viewbox ratio.

```js
<div style={{display: 'flex'}}>
  <div style={{width: '30px'}}>
    <Base viewBox="0 0 32 32" width="30px">
      <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
    </Base>
  </div>
  <div style={{color: 'red', width: '30px'}}>
    <Base viewBox="0 0 32 32">
      <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
    </Base>
  </div>
  <div style={{color: 'blue', width: '30px'}}>
    <Base viewBox="0 0 32 32">
      <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
    </Base>
  </div>
</div>
```
