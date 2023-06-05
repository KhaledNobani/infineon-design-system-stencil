# ifx-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                             | Default     |
| ---------- | ---------- | ----------- | ---------------------------------------------------------------- | ----------- |
| `color`    | `color`    |             | `"danger" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `disabled` | `disabled` |             | `boolean`                                                        | `undefined` |
| `href`     | `href`     |             | `string`                                                         | `undefined` |
| `icon`     | `icon`     |             | `string`                                                         | `undefined` |
| `position` | `position` |             | `string`                                                         | `'left'`    |
| `size`     | `size`     |             | `string`                                                         | `'m'`       |
| `target`   | `target`   |             | `string`                                                         | `'_self'`   |
| `variant`  | `variant`  |             | `"outline" \| "outline-text" \| "solid"`                         | `'solid'`   |


## Methods

### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ifx-modal](../modal)

### Depends on

- [ifx-icon](../icon)

### Graph
```mermaid
graph TD;
  ifx-button --> ifx-icon
  ifx-modal --> ifx-button
  style ifx-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*