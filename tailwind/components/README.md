# CSS Component Styling

In Tailwind version 4.x, we need to include references to all Tailwind classes in our css modules.
To get the base Tailwind classes, include the following at the top of your component css module.

```css
@reference "tailwindcss";
```

However, to access customizations (e.g. our color theme), you need to provide a reference to the customization definition.
And this reference uses a relative path.  For example...

```css
@reference "../../../tailwind/customize-colors.css";
```

For us, the hassle of using a relative address (both in getting it right initially and maintaining it)
is too much.  Thus, we have moved component css into the global stylesheet.  We have defined these
component css here and grouped them into a single file `/tailwind/global-components.css` which 
is then imported into `global.css`.
