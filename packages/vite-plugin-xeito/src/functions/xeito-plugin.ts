import typescript from 'typescript';

export async function xeitoPlugin() {

  // Load the tsconfig.json file
  const tsConfig = await typescript.readConfigFile('tsconfig.json', typescript.sys.readFile);

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

          const compiled = typescript.transpileModule(code, tsConfig.config);
          
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
