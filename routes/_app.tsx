import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Icons.church</title>
        <meta
          name="description"
          content="Iconify icons for Fresh"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="dark:bg-slate-950">
          <div class="flex flex-col min-h-screen mx-auto max-w-7xl w-full dark:text-white">
            <Component />
          </div>
        </div>
      </body>
    </html>
  );
}
