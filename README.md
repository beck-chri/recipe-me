This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Node Version

`nvm install v18.16.1`

## Getting Started

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Nextjs Project structure:

```
[public]    (Static assets to be served)
[src]       (Application source folder)
 |-[app]        (Router directory)
   |- [components]
      |- ...  (components)
   |- layout.tsx  (top-most layout, UI that is shared between routes. Contains <html> and <body> Tags)
   |- page.tsx    (home page)
   |- [page name]    (route to other page)
      |- thepage.tsx  (other page component/container)
```
