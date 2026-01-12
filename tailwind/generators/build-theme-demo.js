/**
 * buildThemePage() generates a page that tests the app theme
 * 
 *  Colors - all colors (neutral, primary, secondary, and error) are shown on various backgrounds (e.g. default and the surfaces)
 *  Fonts - all of the fonts are shown in various configurations
 *  UI Elements - the standard UI elements (heading, links)
 */

function buildThemeComponent(name, filename) {
  const TAB = '  ';
  const DEFAULT = 'Default';
  const SURFACE = 'surface';
  const colors = ['neutral', 'primary', 'secondary', 'error'];
  const variants = ['light', DEFAULT, 'dark'];
  const textSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
  const fontWeights = ['font-thin', 'font-light', 'font-normal', 'font-semibold', 'font-bold', 'font-black'];
  const typefaces = ['font-sans', 'font-serif', 'font-mono', 'font-brand'];
  const headings = ['h1', 'h2', 'h3', 'h4'];


  const output = [
    `import { AySection } from "@/ui/base-ui/server";`,
    ``,
    `export function ${name}() {`,
    `return (`,
    `<div>`
  ];

  //#region COLOR
  output.push('<details className="my-12 view-area"><summary className="cursor-pointer font-bold text-xl">Colors</summary><div className="my-4 pl-4 border-l-8 border-slate-300">');

  for (const color of colors) {
    output.push(`${TAB}<details className="my-6">
    <summary className="cursor-pointer text-lg font-bold text-hallpass-${color}">${capitalize(color)}</summary>
    <div className="p-8 border">`);
    for (const variant of variants) {
      if (variant !== variants[0]) {
        output.push(`${TAB+TAB}<div className="my-2 w-full h-1 bg-slate-500"></div>`);
      }
      for (const size of textSizes) {
        output.push(`${TAB+TAB+TAB}<div className="mb-4 flex flex-wrap items-center gap-x-4 ${size} text-hallpass-${color}${variant === DEFAULT ? '' : ('-' + variant)}">`);      
        for (const weight of fontWeights) {
          output.push(`${TAB+TAB+TAB+TAB}<span className="${weight}">${variant} ${size.replace('text-', '')} ${weight.replace('font-', '')}</span>`);
        }
        output.push(`${TAB+TAB+TAB}</div>`);
      }      
    }
    //color on surfaces
    output.push(`${TAB+TAB+TAB}<div className="grid grid-cols-3 gap-x-4">`);
    for (const variant of variants) {
      output.push(`${TAB+TAB+TAB+TAB}<div className="p-4 bg-hallpass-surface${variant === DEFAULT ? '' : ('-' + variant)}">`);      
      output.push(`${TAB+TAB+TAB+TAB}<div className="text-lg font-bold text-black">${variant} Surface</div>`);            
      output.push(`${TAB+TAB+TAB+TAB}<div className="flex flex-wrap items-center gap-x-4">`);      
      for (const alt of variants) {
        for (const size of textSizes) {
          output.push(`<span className="${size} text-hallpass-${color}${alt === DEFAULT ? '' : ('-' + alt)}">${color} ${alt} ${size.replace('text-','')}</span>`)
        }
      }
      output.push(`${TAB+TAB+TAB+TAB}</div>`);
      output.push(`${TAB+TAB+TAB+TAB}</div>`);
    }
    output.push(`${TAB+TAB+TAB}</div>`);

    //color as background
    output.push(`${TAB+TAB+TAB}<div className="grid grid-cols-3 gap-x-4">`);
    for (const variant of variants) {
      output.push(`${TAB+TAB+TAB+TAB}<div className="p-4 bg-hallpass-${color}${variant === DEFAULT ? '' : ('-' + variant)}">`);      
      output.push(`${TAB+TAB+TAB+TAB}<div className="text-lg font-bold text-white">${variant} ${color}</div>`);            
      output.push(`${TAB+TAB+TAB+TAB}<div className="flex flex-wrap items-center gap-x-4">`);      
      for (const size of textSizes) {
        output.push(`<span className="${size} text-hallpass-on-${color}${variant === DEFAULT ? '' : ('-' + variant)}">${color} ${variant} ${size.replace('text-','')}</span>`)
      }
      output.push(`${TAB+TAB+TAB+TAB}</div>`);
      output.push(`${TAB+TAB+TAB+TAB}</div>`);
    }
    output.push(`${TAB+TAB+TAB}</div>`);

    //color as opaque background (10%)
    output.push(`${TAB+TAB+TAB}<div className="grid grid-cols-3 gap-x-4">`);
    for (const variant of variants) {
      output.push(`${TAB+TAB+TAB+TAB}<div className="p-4 bg-hallpass-${color}${variant === DEFAULT ? '' : ('-' + variant)}/10">`);      
      output.push(`${TAB+TAB+TAB+TAB}<div className="text-lg font-bold text-black">${variant} ${color}</div>`);            
      output.push(`${TAB+TAB+TAB+TAB}<div className="flex flex-wrap items-center gap-x-4">`);      
      for (const size of textSizes) {
        output.push(`<span className="${size} font-medium text-hallpass-${color}${variant === DEFAULT ? '' : ('-' + variant)}">${color} ${variant} ${size.replace('text-','')}</span>`)
      }
      output.push(`${TAB+TAB+TAB+TAB}</div>`);
      output.push(`${TAB+TAB+TAB+TAB}</div>`);
    }
    output.push(`${TAB+TAB+TAB}</div>`);

    output.push(`${TAB}</div></details>`);
  }

  output.push('</div></details>');
  //#endregion 

  //#region FONT
  output.push('<details className="my-12 view-area"><summary className="cursor-pointer font-bold text-xl">Fonts</summary><div className="my-4 pl-4 border-l-8 border-slate-300">');

    output.push(`${TAB}<details className="my-6">
        <summary className="cursor-pointer text-lg font-bold">Typography Plugin <code>prose</code></summary>
        <div className="p-8 border">`);
      for (const size of textSizes) {
        const prose = 'prose' + size.replace('text', '').replace('-base', ''); 
        output.push(`<p className="mb-4 ${prose}"><strong>${prose}</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>`);
      }
    output.push('</div></details>');  
  
  for (const font of typefaces) {
    output.push(`${TAB}<details className="my-6">
        <summary className="cursor-pointer text-lg font-bold">${capitalize(font.replace('font-',''))}</summary>
        <div className="p-8 border ${font}">`);
    
    for (const color of colors) {
      for (const variant of variants) {
        output.push(`<div className="my-4 text-hallpass-${color}${variant === DEFAULT ? '' : ('-' + variant)}">`);
        output.push(`<div className="font-bold text-2xl">${font.replace('font-', '')} ${color}${variant === DEFAULT ? '' : ('-' + variant)}</div>`);
        for (const size of textSizes) {
          output.push(`<div className="flex flex-wrap items-center gap-x-4 ${size}">`);
          for (const weight of fontWeights) {
            output.push(`<span className="${weight}">${capitalize(font.replace('font-',''))} ${capitalize(size.replace('text-',''))} ${capitalize(weight.replace('font-', ''))}</span>`)
          }
          output.push('</div>');
        }
        output.push('</div>');
      }
    }


    output.push('</div></details>');  
  }
  

  output.push('</div></details>');
  //#endregion 

  //#region UI Elements
  output.push('<details className="my-12 view-area"><summary className="cursor-pointer font-bold text-xl">UI Elements</summary><div className="my-4 pl-4 border-l-8 border-slate-300">');

  // --- HEADINGS --- 
  output.push(`<div className="text-xl font-bold">Headings</div>`);
  
  output.push(`<div className="text-lg font-medium">Without Margins</div>`);
  for (const h of headings) {
    output.push(`<${h} className="no-margin">Heading - ${h.toUpperCase()}</${h}>`);
  }
  output.push(`<div className="text-lg font-medium">Without Margins (SMALL)</div>`);
  for (const h of headings) {
    output.push(`<${h} className="no-margin small">Heading - ${h.toUpperCase()}</${h}>`);
  }
  output.push(`<div className="text-lg font-medium mt-8">With Margins</div>`);
  for (const h of headings) {
    output.push(`<${h}>Heading - ${h.toUpperCase()}</${h}>`);
  }

  // --- LINKS ---
  output.push(`<div className="text-xl font-bold mt-12">Links</div>`);
  
  output.push(`<div className="text-lg font-medium">General</div>`);
  for (const color of colors) {
    output.push(`<div className="my-1"><a href="#" className="${color}">Link ${color.toUpperCase()}</a></div>`);
  }

  
  output.push('</div></details>');

  //#endregion 

  //#region --- SECTIONS - outside of the regular UI Element details
// --- SECTIONS ---

  output.push(`<div className="mt-12 text-4xl font-medium text-center">Sections</div>`);

  for (const color of [SURFACE, ...colors]) {
    for (const variant of variants) {
      const textColor = ''; // all text color will be inherited
      
      output.push(`<AySection color="${color}" ${variant === DEFAULT ? '' : ('intensity="'+variant+'"')} ${color === SURFACE ? '' : ('opacity="minimal"')}>
  <div className="font-bold text-xl">SECTION - ${color} - ${variant} - ${color === SURFACE ? 'full opacity' : 'minimal opacity'}</div>
  <div className="my-4 ${textColor}">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>`);
      if (color !== SURFACE) {
      output.push(`<AySection color="${color}" ${variant === DEFAULT ? '' : ('intensity="'+variant+'"')} ${color === SURFACE ? '' : ('opacity="quarter"')}>
  <div className="font-bold text-xl">SECTION - ${color} - ${variant} - ${color === SURFACE ? 'full opacity' : 'quarter opacity'}</div>
  <div className="my-4 ${textColor}">
  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.
  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.
  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.
  </div>
</AySection>`);
      }
    }
  }
  //#endregion


  output.push('</div>');
  output.push(');');
  output.push('}');
  
  
  save (filename, output.join('\n'));
}

function capitalize(word) {
  return (word.charAt(0).toUpperCase() + word.substring(1));
}

function save(path, content) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs');
  fs.writeFileSync(path, content);
}

// COMMAND LINE 
try {
  
  const filename = process.argv.length > 2 
    ? process.argv[2]
    : 'app-theme.tsx';
  if (!filename.endsWith('.tsx')) { filename += '.tsx'; }
  
  //extract component name
  const name = filename.substring(0, filename.length - '.tsx'.length)  //remove extension
            .replace(/[-._]/g,' ')                                    //replace special chars with space
            .split(' ')                                                 //split on spaces
            .reduce((ret, word) => {
              return ret + capitalize(word)
            }, '');
  console.log(`Creating theme component (${name}), saving in ${filename}`);
  
  buildThemeComponent(name, filename);

  console.log('done');
} catch (error) {
  console.warn('Error creating the theme component', error);
}

