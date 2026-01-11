# Catalyst Learning: Part 1 - Site Setup

## Next.js

We are using **Next.js** as the web framework for this app.  We use it for many of our websites where SSR is needed, but dynamic features (client rendering) are also required.

```
(base) PS C:\code> npx create-next-app@latest catalyst-learning

Need to install the following packages:
create-next-app@16.1.1
Ok to proceed? **(y)**

√ Would you like to use the recommended Next.js defaults? » **Yes, use recommended defaults**

Creating a new Next.js app in C:\code\catalyst-learning.

Using npm.

Initializing project with template: app-tw

Installing dependencies:
- next
- react
- react-dom

Installing devDependencies:
- @tailwindcss/postcss
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
- tailwindcss
- typescript
```

## Customizations

We (almost always) automatically do the following customization before even running the app.  Have a look at the `./site-setup/` folder for more details.

- Install Tailwind Plugins
- Install Font Awesome
- Update scripts to use **turbopack** and https in dev
- Add our own branding (logo and favicon)
- Clean `layout` (and include the Font Awesome hack)
- Strip `global.css` (we'll add more later)
- Strip home `page` to bare minimum to test Tailwind, Font Awesome and our branding.