// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_pack_icon_ from "./routes/[pack]/[icon].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $Neon from "./islands/Neon.tsx";
import * as $Typing from "./islands/Typing.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[pack]/[icon].tsx": $_pack_icon_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Neon.tsx": $Neon,
    "./islands/Typing.tsx": $Typing,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
