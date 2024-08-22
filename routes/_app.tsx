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
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE2IDE2Ij4KCTxwYXRoIGZpbGw9IiNlZTFiOTYiIGQ9Ik01LjM5OCAxMC44MDdhMS4wNCAxLjA0IDAgMCAwIDEuMjA0LS4wMDNjLjE3OC0uMTMuMzEzLS4zMS4zODctLjUxOGwuNDQ3LTEuMzczYy4xMTUtLjM0NC4zMDgtLjY1Ny41NjQtLjkxNGEyLjM1IDIuMzUgMCAwIDEgLjkxMy0uNTY1bDEuMzkxLS40NTFhMS4wNSAxLjA1IDAgMCAwIC42NDUtLjY3YTEuMDQgMS4wNCAwIDAgMC0uNjg5LTEuMzFsLTEuMzc1LS40NDdhMi4zNCAyLjM0IDAgMCAxLTEuNDgtMS40NzdsLS40NTItMS4zODhhMS4wNDMgMS4wNDMgMCAwIDAtMS43MTctLjM5YTEuMDUgMS4wNSAwIDAgMC0uMjU2LjQwN2wtLjQ1NyAxLjRhMi4zMiAyLjMyIDAgMCAxLTEuNDQgMS40NDlsLTEuMzkxLjQ0OGExLjA2IDEuMDYgMCAwIDAtLjY0NC42N2ExLjA1IDEuMDUgMCAwIDAgLjE0NC45MThjLjEyOC4xOC4zMDkuMzE1LjUxNy4zODZsMS4zNzQuNDQ1YTIuMzMgMi4zMyAwIDAgMSAxLjQ4MSAxLjQ4OGwuNDUyIDEuMzkxYy4wNzIuMjA0LjIwNi4zOC4zODIuNTA0bTYuMTM3IDQuMDQyYS44LjggMCAwIDAgLjkyNi4wMDJhLjguOCAwIDAgMCAuMy0uNGwuMjQ4LS43NjJhMS4wNyAxLjA3IDAgMCAxIC42OC0uNjhsLjc3Mi0uMjUyYS43OS43OSAwIDAgMCAuNTMxLS42NGEuNzk2Ljc5NiAwIDAgMC0uNTU0LS44ODFsLS43NjQtLjI0OWExLjA4IDEuMDggMCAwIDEtLjY4LS42NzhsLS4yNTItLjc3M2EuOC44IDAgMCAwLS4yOTMtLjM5YS43OTYuNzk2IDAgMCAwLTEuMDMuMDg1YS44LjggMCAwIDAtLjE5NS4zMTVsLS4yNDcuNzYyYTEuMDcgMS4wNyAwIDAgMS0uNjY1LjY3OWwtLjc3My4yNTJhLjguOCAwIDAgMC0uNTQzLjc2MmEuOC44IDAgMCAwIC41NTEuNzU2bC43NjMuMjQ3Yy4xNTkuMDU0LjMwNC4xNDMuNDIyLjI2MWMuMTE5LjExOS4yMDcuMjYzLjI1OC40MjJsLjI1My43NzRhLjguOCAwIDAgMCAuMjkyLjM4OCIgLz4KPC9zdmc+" />
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
