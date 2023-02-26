import typescript from 'typescript';

export async function xeitoPlugin() {

  return {
    name: 'xeito-plugin',
    enforce: 'pre', // We must run this plugin before esbuild
    transform(code: any, id: any) {
      // Check if the file is a typescript file
      if (id.endsWith('.ts')) {
        // Check if the file contains a decorator of any kind @Componen, @Injectable, etc.
        const decoratorRegex = /@[\w]+/g;
        if (decoratorRegex.test(code)) {
          // If it does, we compile it with the typescript compiler
          // This is done because esbuild generates incompatible code (unclear why)
          const compiled = typescript.transpileModule(code, {
            compilerOptions: {
              target: typescript.ScriptTarget.ES2020,
              module: typescript.ModuleKind.ES2020,
              isolatedModules: true,
            }
          });
          
          // Return the compiled code and the source map
          return {
            code: compiled.outputText,
            map: compiled.sourceMapText
          }
        }
      }
    }
  }

}
