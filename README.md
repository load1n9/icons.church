# Icons.church

[![License](https://img.shields.io/github/license/load1n9/icons.church)](https://github.com/deno-windowing/gluten/blob/master/LICENSE)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/load1n9)

Use over 200k icons from [Iconify](https://icon-sets.iconify.design/) in your
Deno projects.

## Usage

### Check Icon

```tsx
import CheckIcon from "https://icons.church/lucide/badge-check";

export default function MyComponent() {
  return <CheckIcon width={24} height={24} />;
}
```

### Animated loading spinner

```tsx
import SpinnerIcon from "https://icons.church/svg-spinners/3-dots-rotate";

export default function LoadingPage() {
  return (
    <div className="loading">
      <SpinnerIcon width={24} height={24} />
    </div>
  );
}
```

Find more icons at [Iconify](https://icon-sets.iconify.design/).

[![Made with Fresh](https://fresh.deno.dev/fresh-badge-dark.svg)](https://fresh.deno.dev)
