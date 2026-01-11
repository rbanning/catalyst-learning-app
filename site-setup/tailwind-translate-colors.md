In Tailwind v3.x, we used .js files to extend Tailwind.  We created a set of .js files to configure 
custom colors, extends, and plugins in v3. 

In Tailwind v4.x, extending Tailwind has moved to .css files using the `@theme { }` directive.

We have developed an elaborate system of colors and in the 3.x system, these colors were defined 
as .js objects. To utilize our legacy colors, we have developed a *[translator](../tailwind/translate-colors.js)* to take a color object and parse it into a valid v4.x .css file called [customize-colors.css](../tailwind/customize-colors.css) which we then import into our [global.css](../src/app/globals.css).