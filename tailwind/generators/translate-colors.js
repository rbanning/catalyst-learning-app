function buildColorSet(name, colorDef) {
  const prefix = '--color-hallpass';
  const KEYS = name === 'background'
    ? ['DEFAULT']
    : ['DEFAULT', 'light', 'dark'];

  const output = [];

  try {
    for (const key of KEYS) {
      if (key in colorDef) {
        const term = key === 'DEFAULT'
          ? ''
          : `-${key}`;
        const def = colorDef[key];
        output.push(`\t${prefix}-${name}${term}: ${def.color};`);
        output.push(`\t${prefix}-on-${name}${term}: ${def.on};`);
      }
      else {
        output.push(`/* ERROR - could not locate key (${key}) in the '${name}' color def */`);
      }
    }    
  } catch (error) {
    output.push(`/* ERROR buildColorSet with name = '${name}' - ${error} */`);
  }

  return output;
}

function generateColorTheme(colors) {
  let output = ['@theme {'];
  try {
    for(const name of ['neutral', 'primary', 'secondary', 'error', 'surface', 'background']) {
      if (name in colors) {
        output = [
          ...output,
          ...buildColorSet(name, colors[name])
        ];
      }
      else {
        output.push(`/* ERROR - could not locate '${name}' in the color def */`);
      }
    }    
  } catch (error) {
    output.push(`/* ERROR generateColorTheme - ${error} */`);
  }

  output.push('}');
  return output;
}

const DEFAULT_WHITE = "#FFFFFF";
const DEFAULT_BLACK = "#000000";
const colors = {
    neutral: {
      DEFAULT: { color: "#374151", on: DEFAULT_WHITE },
      light: { color: "#4b5563", on: DEFAULT_WHITE },
      dark: { color: "#1f2937", on: DEFAULT_WHITE }
    },
    primary: {
      DEFAULT: { color: "#1e40af", on: DEFAULT_WHITE },
      light: { color: "#1e4fd8", on: DEFAULT_WHITE },
      dark: { color: "#172554", on: DEFAULT_WHITE },
    },
    secondary: {
      DEFAULT: { color: "#b45309", on: DEFAULT_WHITE },
      light: { color: "#d97706", on: DEFAULT_WHITE },
      dark: { color: "#92400e", on: DEFAULT_WHITE },
    },
    background: {
      DEFAULT: { color: DEFAULT_WHITE, on: DEFAULT_BLACK },
    },
    surface: {
      DEFAULT: { color: "#f1f5f9", on: DEFAULT_BLACK },
      light: { color: "#f8fafc", on: DEFAULT_BLACK },
      dark: { color: "#e2e8f0", on: DEFAULT_BLACK },
    },
    error: {
      DEFAULT: { color: "#b91c1c", on: DEFAULT_WHITE },
      light: { color: "#dc2626", on: DEFAULT_WHITE },
      dark: { color: "#7f1d1d", on: DEFAULT_WHITE },
    },
  }


const output = generateColorTheme(colors);

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
const path = 'customize-colors.css';
try {
  fs.writeFileSync(path, output.join("\n"));
  console.log(`Generated ${path} from color object`, { ok: fs.existsSync(path) });
}
catch (error) {
  console.log(`Error generating .css`, {error});
}
