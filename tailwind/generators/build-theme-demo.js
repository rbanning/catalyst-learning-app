/**
 * buildThemePage() generates a page that tests the app theme
 *
 *  Colors - all colors (neutral, primary, secondary, and error) are shown on various backgrounds (e.g. default and the surfaces)
 *  Fonts - all of the fonts are shown in various configurations
 *  UI Elements - the standard UI elements (heading, links)
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function buildThemeComponent(name, filename) {
    var DEFAULT = 'Default';
    var SURFACE = 'surface';
    var colors = ['neutral', 'primary', 'secondary', 'error'];
    var variants = ['light', DEFAULT, 'dark'];
    var textSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
    var fontWeights = ['font-thin', 'font-light', 'font-normal', 'font-semibold', 'font-bold', 'font-black'];
    var feedbacks = ['success', 'warning', 'invalid'];
    var typefaces = ['font-sans', 'font-serif', 'font-mono', 'font-brand'];
    var headings = ['h1', 'h2', 'h3', 'h4'];
    var output = [
        "import { AySection } from \"@/ui/base-ui/server\";",
        "",
        "export function ".concat(name, "() {"),
        "return (",
        "<div>"
    ];
    //#region COLOR
    output.push(details.open("Colors", { container: true }));
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        output.push(details.open(capitalize(color), { titleCss: "text-hallpass-".concat(color), secondary: true, margin: 'minimum', border: 'box' }));
        // Color Text
        for (var _a = 0, variants_1 = variants; _a < variants_1.length; _a++) {
            var variant = variants_1[_a];
            var variantColor = color + (variant === DEFAULT ? '' : "-".concat(variant));
            if (variant !== variants[0]) {
                output.push("<div className=\"my-2 w-full h-1 bg-slate-300\"></div>");
            }
            for (var _b = 0, textSizes_1 = textSizes; _b < textSizes_1.length; _b++) {
                var size = textSizes_1[_b];
                output.push("<div className=\"mb-4 flex flex-wrap items-center gap-x-4 ".concat(size, " text-hallpass-").concat(variantColor, "\">"));
                for (var _c = 0, fontWeights_1 = fontWeights; _c < fontWeights_1.length; _c++) {
                    var weight = fontWeights_1[_c];
                    output.push("<span className=\"".concat(weight, "\">").concat(size.replace('text-', '').toUpperCase()).concat(weight.replace('font-', '')).concat(capitalize(variant), "</span>"));
                }
                output.push("</div>");
            }
        }
        //Color on Surfaces
        output.push("<div className=\"grid grid-cols-3 gap-x-4\">");
        for (var _d = 0, variants_2 = variants; _d < variants_2.length; _d++) {
            var variant = variants_2[_d];
            var variantCss = (variant === DEFAULT ? '' : "-".concat(variant));
            output.push("<div className=\"p-4 bg-hallpass-surface".concat(variantCss, "\">"));
            output.push("<div className=\"text-lg font-bold text-black\">".concat(capitalize(variant), " Surface</div>"));
            output.push("<div className=\"flex flex-wrap items-center gap-x-4\">");
            for (var _e = 0, variants_3 = variants; _e < variants_3.length; _e++) {
                var alt = variants_3[_e];
                var altColor = color + (alt === DEFAULT ? '' : "-".concat(alt));
                for (var _f = 0, textSizes_2 = textSizes; _f < textSizes_2.length; _f++) {
                    var size = textSizes_2[_f];
                    output.push("<span className=\"".concat(size, " text-hallpass-").concat(altColor, "\">").concat(size.replace('text-', '')).concat(capitalize(altColor), "</span>"));
                }
            }
            output.push("</div>");
            output.push("</div>");
        }
        output.push("</div>");
        //Color as Background
        output.push("<div className=\"grid grid-cols-3 gap-x-4\">");
        for (var _g = 0, variants_4 = variants; _g < variants_4.length; _g++) {
            var variant = variants_4[_g];
            var variantColor = color + (variant === DEFAULT ? '' : "-".concat(variant));
            output.push("<div className=\"p-4 bg-hallpass-".concat(variantColor, "\">"));
            output.push("<div className=\"text-lg font-bold text-white\">".concat(capitalize(variant), " ").concat(capitalize(color), "</div>"));
            output.push("<div className=\"flex flex-wrap items-center gap-x-4\">");
            for (var _h = 0, textSizes_3 = textSizes; _h < textSizes_3.length; _h++) {
                var size = textSizes_3[_h];
                output.push("<span className=\"".concat(size, " text-hallpass-on-").concat(variantColor, "\">").concat(size.replace('text-', '')).concat(capitalize(color), "</span>"));
            }
            output.push("</div>");
            output.push("</div>");
        }
        output.push("</div>");
        //Color as Opaque Background (10%)
        output.push("<div className=\"grid grid-cols-3 gap-x-4\">");
        for (var _j = 0, variants_5 = variants; _j < variants_5.length; _j++) {
            var variant = variants_5[_j];
            var variantColor = color + (variant === DEFAULT ? '' : "-".concat(variant)) + '/10';
            output.push("<div className=\"p-4 bg-hallpass-".concat(variantColor, "\">"));
            output.push("<div className=\"text-lg font-bold text-black\">".concat(capitalize(variant), " ").concat(capitalize(color), " (opaque)</div>"));
            output.push("<div className=\"flex flex-wrap items-center gap-x-4\">");
            for (var _k = 0, textSizes_4 = textSizes; _k < textSizes_4.length; _k++) {
                var size = textSizes_4[_k];
                output.push("<span className=\"".concat(size, "\">").concat(size.replace('text-', ''), "RandomText</span>"));
            }
            output.push("</div>");
            output.push("</div>");
        }
        output.push("</div>");
        output.push(details.close()); // end of the specific color
    }
    // FEEDBACK
    output.push(details.open('Feedback', { secondary: true, margin: 'minimum', border: 'box' }));
    //feedback colors    
    output.push("<div className=\"grid grid-cols-3 gap-x-4\">");
    for (var _l = 0, feedbacks_1 = feedbacks; _l < feedbacks_1.length; _l++) {
        var feedback = feedbacks_1[_l];
        output.push("<div>");
        output.push("<div className=\"text-lg font-bold text-hallpass-feedback-".concat(feedback, "\">").concat(feedback, "</div>"));
        output.push("<div className=\"my-2 flex items-center gap-4\">");
        for (var i = 1; i <= 6; i++) {
            output.push("<span className=\"w-".concat(i, " h-").concat(i, " bg-hallpass-feedback-").concat(feedback, "\"></span>"));
        }
        output.push('</div>'); //end boxes
        output.push("<div className=\"my-2 flex items-center gap-4\">");
        for (var _m = 0, _o = ['text-xs', 'text-sm', 'text-base']; _m < _o.length; _m++) {
            var badge = _o[_m];
            output.push("<span className=\"".concat(badge, " px-2 py-1 bg-hallpass-feedback-").concat(feedback, " text-white\">").concat(badge, "</span>"));
        }
        output.push('</div>'); //end badges
        output.push("</div>"); //end specific feedback
    }
    output.push("</div>"); //end feedback grid
    output.push(details.close()); //end of feedback
    output.push(details.close()); //end of Colors
    //#endregion 
    //#region FONT
    output.push(details.open("Fonts", { container: true }));
    // Typography 
    output.push(details.open('Typography (prose)', { secondary: true, margin: 'minimum', border: 'box' }));
    for (var _p = 0, textSizes_5 = textSizes; _p < textSizes_5.length; _p++) {
        var size = textSizes_5[_p];
        var prose = 'prose' + size.replace('text', '').replace('-base', '');
        output.push("<p className=\"mb-4 ".concat(prose, "\"><strong>").concat(prose, "</strong> Lorem officia nisi dolore ea est consequat. Ex aute cillum aliqua voluptate Lorem cillum pariatur ullamco labore proident ex magna Lorem. Est nulla incididunt deserunt aute eiusmod id Lorem laboris dolor.</p>"));
    }
    output.push(details.close()); //end typography
    // Typefaces
    for (var _q = 0, typefaces_1 = typefaces; _q < typefaces_1.length; _q++) {
        var font = typefaces_1[_q];
        output.push(details.open(font.replace('font-', ''), { secondary: true, margin: 'minimum', border: 'box' }));
        for (var _r = 0, colors_2 = colors; _r < colors_2.length; _r++) {
            var color = colors_2[_r];
            for (var _s = 0, variants_6 = variants; _s < variants_6.length; _s++) {
                var variant = variants_6[_s];
                output.push("<div className=\"my-4 text-hallpass-".concat(color).concat(variant === DEFAULT ? '' : ('-' + variant), "\">"));
                output.push("<div className=\"font-bold text-2xl\">".concat(font.replace('font-', ''), " ").concat(color).concat(variant === DEFAULT ? '' : ('-' + variant), "</div>"));
                for (var _t = 0, textSizes_6 = textSizes; _t < textSizes_6.length; _t++) {
                    var size = textSizes_6[_t];
                    output.push("<div className=\"flex flex-wrap items-center gap-x-4 ".concat(size, "\">"));
                    for (var _u = 0, fontWeights_2 = fontWeights; _u < fontWeights_2.length; _u++) {
                        var weight = fontWeights_2[_u];
                        output.push("<span className=\"".concat(weight, "\">").concat(capitalize(font.replace('font-', '')), " ").concat(capitalize(size.replace('text-', '')), " ").concat(capitalize(weight.replace('font-', '')), "</span>"));
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
    output.push("<div className=\"text-xl font-bold\">Headings</div>");
    output.push("<div className=\"text-lg font-medium\">Without Margins</div>");
    for (var _v = 0, headings_1 = headings; _v < headings_1.length; _v++) {
        var h = headings_1[_v];
        output.push("<".concat(h, " className=\"no-margin\">Heading - ").concat(h.toUpperCase(), "</").concat(h, ">"));
    }
    output.push("<div className=\"text-lg font-medium\">Without Margins (SMALL)</div>");
    for (var _w = 0, headings_2 = headings; _w < headings_2.length; _w++) {
        var h = headings_2[_w];
        output.push("<".concat(h, " className=\"no-margin small\">Heading - ").concat(h.toUpperCase(), "</").concat(h, ">"));
    }
    output.push("<div className=\"text-lg font-medium mt-8\">With Margins</div>");
    for (var _x = 0, headings_3 = headings; _x < headings_3.length; _x++) {
        var h = headings_3[_x];
        output.push("<".concat(h, ">Heading - ").concat(h.toUpperCase(), "</").concat(h, ">"));
    }
    // --- LINKS ---
    output.push("<div className=\"text-xl font-bold mt-12\">Links</div>");
    output.push("<div className=\"text-lg font-medium\">General</div>");
    for (var _y = 0, colors_3 = colors; _y < colors_3.length; _y++) {
        var color = colors_3[_y];
        output.push("<div className=\"my-1\"><a href=\"#\" className=\"".concat(color, "\">Link ").concat(color.toUpperCase(), "</a></div>"));
    }
    output.push(details.close()); //ui elements
    //#endregion 
    //#region --- SECTIONS - outside of the regular UI Element details
    // --- SECTIONS ---
    output.push(details.open("Sections", { container: false, border: 'none' }));
    output.push("<div className=\"mt-12 text-4xl font-medium text-center\">Sections</div>");
    for (var _z = 0, _0 = __spreadArray([SURFACE], colors, true); _z < _0.length; _z++) {
        var color = _0[_z];
        for (var _1 = 0, variants_7 = variants; _1 < variants_7.length; _1++) {
            var variant = variants_7[_1];
            var textColor = ''; // all text color will be inherited
            output.push("<AySection color=\"".concat(color, "\" ").concat(variant === DEFAULT ? '' : ('intensity="' + variant + '"'), " ").concat(color === SURFACE ? '' : ('opacity="minimal"'), ">\n  <div className=\"font-bold text-xl\">SECTION - ").concat(color, " - ").concat(variant, " - ").concat(color === SURFACE ? 'full opacity' : 'minimal opacity', "</div>\n  <div className=\"my-4 ").concat(textColor, "\">\n  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.\n  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.\n  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.\n  </div>\n</AySection>"));
            if (color !== SURFACE) {
                output.push("<AySection color=\"".concat(color, "\" ").concat(variant === DEFAULT ? '' : ('intensity="' + variant + '"'), " ").concat(color === SURFACE ? '' : ('opacity="quarter"'), ">\n  <div className=\"font-bold text-xl\">SECTION - ").concat(color, " - ").concat(variant, " - ").concat(color === SURFACE ? 'full opacity' : 'quarter opacity', "</div>\n  <div className=\"my-4 ").concat(textColor, "\">\n  Irure officia dolore aliqua cillum dolor sit duis sunt. Ullamco qui cupidatat duis enim. Culpa culpa et consequat eu labore aute. In reprehenderit non velit ex tempor velit.\n  Lorem sint mollit voluptate dolor anim dolor. Ex commodo minim velit minim aliqua sit veniam aute eu esse velit nisi adipisicing. Do aliqua labore adipisicing magna esse do exercitation deserunt et sit sunt esse proident. Veniam sunt amet nostrud consectetur aliqua laborum elit deserunt pariatur consectetur Lorem reprehenderit. Velit deserunt ad Lorem sint cillum excepteur aliqua cupidatat id. Magna quis nulla aliqua aute id tempor velit amet.\n  Velit eiusmod non sit aliquip. Commodo magna id proident ad anim. Mollit exercitation nisi amet anim sint esse consectetur incididunt nisi. Ullamco laboris nisi irure ullamco esse ipsum adipisicing dolor proident aute dolor. Aliquip nisi do ea elit mollit ea amet aliqua ad. Incididunt ullamco exercitation laborum minim voluptate commodo ea laboris amet Lorem do. In mollit nostrud esse anim nulla ut veniam occaecat nisi deserunt sit cillum voluptate tempor.\n  </div>\n</AySection>"));
            }
        }
    }
    output.push(details.close()); //sections
    //#endregion
    output.push('</div>');
    output.push(');');
    output.push('}');
    save(filename, output.join('\n'));
}
//#region >>> HELPERS <<<
var details = {
    open: _buildDetailsStart,
    close: _buildDetailsEnd
};
function _buildSummary(title, size, className) {
    var css = 'cursor-pointer font-bold '
        + (size === 'smaller'
            ? 'text-lg'
            : (size === 'bigger'
                ? 'text-2xl'
                : 'text-xl'));
    if (className) {
        css += (' ' + className);
    }
    return "<summary className=\"".concat(css, "\">").concat(title, "</summary>");
}
function _buildDetailsStart(title, options) {
    var _a, _b;
    options !== null && options !== void 0 ? options : (options = {});
    (_a = options.border) !== null && _a !== void 0 ? _a : (options.border = 'standard');
    var css = [
        options.margin === 'standard'
            ? 'my-12'
            : (options.margin === 'minimum'
                ? 'my-6'
                : ''),
        options.container ? 'view-area' : '',
        (_b = options.className) !== null && _b !== void 0 ? _b : '',
    ].filter(Boolean).join(' ');
    var divCss = [
        'my-4',
        options.border === 'thin'
            ? 'pl-4 border-l-6 border-slate-200'
            : (options.border === 'standard'
                ? 'pl-4 border-l-8 border-slate-300'
                : (options.border === 'box'
                    ? 'px-4 border border-slate-200'
                    : ''))
    ].filter(Boolean).join(' ');
    return "<details className=\"".concat(css, "\">\n").concat(_buildSummary(title, (options === null || options === void 0 ? void 0 : options.secondary) ? 'smaller' : 'standard', options.titleCss), "\n<div className=\"").concat(divCss, "\">\n");
}
function _buildDetailsEnd() {
    return "</div>\n</details>";
}
function capitalize(word) {
    return (word.charAt(0).toUpperCase() + word.substring(1));
}
function save(path, content) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    var fs = require('fs');
    fs.writeFileSync(path, content);
}
//#endregion
// COMMAND LINE 
try {
    var filename = process.argv.length > 2
        ? process.argv[2]
        : 'app-theme.tsx';
    if (!filename.endsWith('.tsx')) {
        filename += '.tsx';
    }
    //extract component name
    var name_1 = filename.substring(0, filename.length - '.tsx'.length) //remove extension
        .replace(/[-._]/g, ' ') //replace special chars with space
        .split(' ') //split on spaces
        .reduce(function (ret, word) {
        return ret + capitalize(word);
    }, '');
    console.log("Creating theme component (".concat(name_1, "), saving in ").concat(filename));
    buildThemeComponent(name_1, filename);
    console.log('done');
}
catch (error) {
    console.warn('Error creating the theme component', error);
}
