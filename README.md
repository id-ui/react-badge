# Badge React Component

[![NPM](https://img.shields.io/npm/v/@idui/react-badge.svg)](https://www.npmjs.com/package/@idui/react-badge/)
[![Size](https://img.shields.io/bundlephobia/min/@idui/react-badge)](https://www.npmjs.com/package/@idui/react-badge)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![LICENSE](https://img.shields.io/github/license/id-ui/react-badge)](https://github.com/id-ui/react-badge/blob/main/LICENSE)

- [Docs](https://id-ui.github.io/react-badge/?path=/docs/badge--playground)
- [Playground](https://id-ui.github.io/react-badge/?path=/story/badge--playground)

## Install

```bash
npm install --save @idui/react-badge
```

```bash
yarn add @idui/react-badge
```


### See props in [Docs](https://id-ui.github.io/react-badge/?path=/docs/badge--playground)


### Basic Example

```jsx
import React from 'react'
import Badge from '@idui/react-badge'

function Example() {
  return <BadgeWrapper>
      <Badge 
          color="orangered" 
          size="1.5rem"
      />
  </BadgeWrapper>
}

const BadgeWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: skyblue;
`;
```

### See more details in [storybook](https://id-ui.github.io/react-badge/?path=/docs/badge--playground)

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)