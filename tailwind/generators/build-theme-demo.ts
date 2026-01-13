/**
 * buildThemePage() generates a page that tests the app theme
 * 
 *  Colors - all colors (neutral, primary, secondary, and error) are shown on various backgrounds (e.g. default and the surfaces)
 *  Fonts - all of the fonts are shown in various configurations
 *  UI Elements - the standard UI elements (heading, links)
 */



function buildThemeComponent(name: string, filename: string) {
  const DEFAULT = 'Default';
  const SURFACE = 'surface';
  const colors = ['neutral', 'primary', 'secondary', 'error'];
  const variants = ['light', DEFAULT, 'dark'];
  const textSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
  const fontWeights = ['font-thin', 'font-light', 'font-normal', 'font-semibold', 'font-bold', 'font-black'];
  const feedbacks = ['success', 'warning', 'invalid'];
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
  output.push(details.open("Colors", { container: true }));  
  for (const color of colors) {
    output.push(details.open(capitalize(color), { titleCss: `text-hallpass-${color}`, secondary: true, margin: 'minimum', border: 'box'}));

    // Color Text
    for (const variant of variants) {
      const variantColor = color + (variant === DEFAULT ? '' : `-${variant}`);

      if (variant !== variants[0]) {
        output.push(`<div className="my-2 w-full h-1 bg-slate-300"></div>`);
      }
      for (const size of textSizes) {
        output.push(`<div className="mb-4 flex flex-wrap items-center gap-x-4 ${size} text-hallpass-${variantColor}">`);      
        for (const weight of fontWeights) {
          output.push(`<span className="${weight}">${size.replace('text-', '').toUpperCase()}${weight.replace('font-', '')}${capitalize(variant)}</span>`);
        }
        output.push(`</div>`);
      }      
    }

    //Color on Surfaces
    output.push(`<div className="grid grid-cols-3 gap-x-4">`);
    for (const variant of variants) {
      const variantCss = (variant === DEFAULT ? '' : `-${variant}`);

      output.push(`<div className="p-4 bg-hallpass-surface${variantCss}">`);      
      output.push(`<div className="text-lg font-bold text-black">${capitalize(variant)} Surface</div>`);            
      output.push(`<div className="flex flex-wrap items-center gap-x-4">`);      
      for (const alt of variants) {
        const altColor = color + (alt === DEFAULT ? '' : `-${alt}`);
        for (const size of textSizes) {
          output.push(`<span className="${size} text-hallpass-${altColor}">${size.replace('text-','')}${capitalize(altColor)}</span>`)
        }
      }
      output.push(`</div>`);
      output.push(`</div>`);
    }
    output.push(`</div>`);

    //Color as Background
    output.push(`<div className="grid grid-cols-3 gap-x-4">`);
    for (const variant of variants) {
      const variantColor = color + (variant === DEFAULT ? '' : `-${variant}`);
      output.push(`<div className="p-4 bg-hallpass-${variantColor}">`);      
      output.push(`<div className="text-lg font-bold text-white">${capitalize(variant)} ${capitalize(color)}</div>`);            
      output.push(`<div className="flex flex-wrap items-center gap-x-4">`);      
      for (const size of textSizes) {
        output.push(`<span className="${size} text-hallpass-on-${variantColor}">${size.replace('text-','')}${capitalize(color)}</span>`)
      }
      output.push(`</div>`);
      output.push(`</div>`);
    }
    output.push(`</div>`);

    //Color as Opaque Background (10%)
    output.push(`<div className="grid grid-cols-3 gap-x-4">`);
    for (const variant of variants) {
      const variantColor = color + (variant === DEFAULT ? '' : `-${variant}`) + '/10';
      output.push(`<div className="p-4 bg-hallpass-${variantColor}">`);      
      output.push(`<div className="text-lg font-bold text-black">${capitalize(variant)} ${capitalize(color)} (opaque)</div>`);            
      output.push(`<div className="flex flex-wrap items-center gap-x-4">`);      
      for (const size of textSizes) {
        output.push(`<span className="${size}">${size.replace('text-','')}RandomText</span>`)
      }
      output.push(`</div>`);
      output.push(`</div>`);
    }
    output.push(`</div>`);

    output.push(details.close()); // end of the specific color
  }

  // FEEDBACK
  output.push(details.open('Feedback', { secondary: true, margin: 'minimum', border: 'box' }));

    //feedback colors    
    output.push(`<div className="grid grid-cols-3 gap-x-4">`);    
    for (const feedback of feedbacks) {
      output.push(`<div>`);

      output.push(`<div className="text-lg font-bold text-hallpass-feedback-${feedback}">${feedback}</div>`);      
      output.push(`<div className="my-2 flex items-center gap-4">`);            
      for(let i=1; i<=6; i++) {
        output.push(`<span className="w-${i} h-${i} bg-hallpass-feedback-${feedback}"></span>`);      
      }
      output.push('</div>'); //end boxes

      output.push(`<div className="my-2 flex items-center gap-4">`);            
      for (const badge of ['text-xs', 'text-sm', 'text-base']) {
        output.push(`<span className="${badge} px-2 py-1 bg-hallpass-feedback-${feedback} text-white">${badge}</span>`);      
      }
      output.push('</div>'); //end badges


      output.push(`</div>`);   //end specific feedback
    }
    output.push(`</div>`); //end feedback grid


  output.push(details.close()); //end of feedback

  output.push(details.close()); //end of Colors

  //#endregion 

  //#region FONT
  output.push(details.open("Fonts", { container: true }));  


  // Typography 
  output.push(details.open('Typography (prose)', { secondary: true, margin: 'minimum', border: 'box' }));

      for (const size of textSizes) {
        const prose = 'prose' + size.replace('text', '').replace('-base', ''); 
        output.push(`<p className="mb-4 ${prose}"><strong>${prose}</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>`);
      }

  output.push(details.close()) //end typography
  

  // Typefaces
  for (const font of typefaces) {
    output.push(details.open(font.replace('font-',''), { secondary: true, margin: 'minimum', border: 'box' }));
    
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

    output.push(details.close()); //individual typeface
  }
  

  output.push(details.close()); //fonts
  //#endregion 

  //#region UI Elements
  output.push(details.open("UI Elements", { container: true }));  

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

  
  output.push(details.close()); //ui elements

  //#endregion 

  //#region --- SECTIONS - outside of the regular UI Element details
// --- SECTIONS ---
  output.push(details.open("Sections", { container: false, border: 'none' }));  

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

  output.push(details.close()); //sections
  //#endregion


  output.push('</div>');
  output.push(');');
  output.push('}');
  
  
  save (filename, output.join('\n'));
}


//#region >>> HELPERS <<<

const details = {
  open: _buildDetailsStart,
  close: _buildDetailsEnd
};

function _buildSummary(
  title: string,
  size?: 'smaller' | 'standard' | 'bigger',
  className?: string,
) {
  let css = 'cursor-pointer font-bold '
    + (size === 'smaller'
      ? 'text-lg'
      : (size === 'bigger'
        ? 'text-2xl'
        : 'text-xl'
      )
    );
  if (className) { css += (' ' + className); }
  return `<summary className="${css}">${title}</summary>`
}

function _buildDetailsStart(
  title: string,
  options?: {
    titleCss?: string,
    secondary?: boolean,
    container?: boolean,
    margin?: 'standard' | 'minimum' | 'none',
    border?: 'standard' | 'thin' | 'box' | 'none',
    className?: string,
  }
) {
  options ??= {};
  options.border ??= 'standard';
  const css = [
    options.margin === 'standard'
      ? 'my-12'
      : (options.margin === 'minimum'
        ? 'my-6'
        : ''
      ),
    options.container ? 'view-area' : '',
    options.className ?? '',
  ].filter(Boolean).join(' ');
  const divCss = [
    'my-4',
    options.border === 'thin'
      ? 'pl-4 border-l-6 border-slate-200'
      : (options.border === 'standard'
        ? 'pl-4 border-l-8 border-slate-300'
        : (options.border === 'box'
          ? 'px-4 border border-slate-200'
          : ''
        )
      )
  ].filter(Boolean).join(' ');

  return `<details className="${css}">
${_buildSummary(title, options?.secondary ? 'smaller' : 'standard', options.titleCss)}
<div className="${divCss}">
`;  
}

function _buildDetailsEnd() {
  return `</div>
</details>`;
}

function capitalize(word: string) {
  return (word.charAt(0).toUpperCase() + word.substring(1));
}

function save(path: string, content: string) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs');
  fs.writeFileSync(path, content);
}

//#endregion



// COMMAND LINE 
try {
  
  let filename = process.argv.length > 2 
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

