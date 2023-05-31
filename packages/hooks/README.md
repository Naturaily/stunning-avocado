# @natu/hooks

The package contains reusable hooks

## 🎯 Getting Started

1. Import the hook you want to use in the component

```tsx
'use client';

import { useToggle } from '@natu/hooks';

export const MyComponent = () => {
  const [isOpen, toggle] = useToggle();

  return <div>MyComponent</div>;
};
```
