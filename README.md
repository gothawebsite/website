# GOTHA launch page

A responsive, static coming-soon page for GOTHA. The countdown targets **14 November 2026, 3:00 PM IST** (`2026-11-14T15:00:00+05:30`). The “Save the date” button downloads a calendar event; it does not collect visitor data.

## Preview locally

Serve the folder with any static server, such as `python -m http.server 8000`, then open `http://localhost:8000`. Opening `index.html` directly can block the JavaScript module in some browsers.

## Run tests

```sh
node --test tests/*.test.mjs
```

The site has no build step or package dependencies. Host the repository root on any static web host.
