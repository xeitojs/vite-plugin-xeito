import template from "rollup-plugin-html-literals";

export function minifyHtml() {

  // We wrap the html minifier to enforce it to run before esbuild
  return {
    enforce: 'pre', // We must run this plugin before esbuild
    ...template()
  }
  
}
