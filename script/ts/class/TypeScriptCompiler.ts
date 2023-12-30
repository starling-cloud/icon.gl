// script/class/TypeScriptCompiler.ts

// Copyright 2023 Scape Agency BV

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

// http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// ============================================================================
// Import
// ============================================================================

// import * as ts from 'typescript';
import ts from 'typescript';


// ============================================================================
// Classes
// ============================================================================

/**
 * A class to compile TypeScript files.
 */
 class TypeScriptCompiler {

    /**
     * Compiles TypeScript files to JavaScript.
     * @param {string[]} filePaths - An array of file paths to be compiled.
     * @param {string} outDir - The output directory for compiled JavaScript files.
     */
    compile(filePaths: string[], outDir: string): void {
        // TypeScript compiler options
        const options: ts.CompilerOptions = {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2015,
            outDir,
            // Additional options can be added as needed
        };
    
        // Create a TypeScript compiler host
        const host = ts.createCompilerHost(options);
    
        // Create a program with the specified files and options
        const program = ts.createProgram(filePaths, options, host);
    
        // Emit the compiled JavaScript files
        program.emit();
    }
}


// ============================================================================
// Export
// ============================================================================

export default TypeScriptCompiler;
