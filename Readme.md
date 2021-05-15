## Typescript CLI

### Installation

```
$ npm install -g typescript
```

### Init tsconfig.json

```
$ tsc --init
```

### Compilation

- Compile single .ts file into .js

```
$ tsc index.ts
```

- Run TypeScript compiler in watch mode

```
$ tsc --watch
$ tsc --w
```

- Compile all .ts file in a folder

```
$ tsc src/*.ts
```

- Specified output directory

```
$ tsc src/*.ts --outDir "./dist"
```

- Specified output file

```
$ tsc --outFile "./dist/bundle.js"
```

- Remove js comment

```
$ tsc --removeComments
```

- produce a .map file (source-map) for every input source file (.ts or .js).

```
$ tsc --sourceMap
```

- Sets the compilation target using which the TypeScript compiler optimizes output JavaScript code and sets the default value for lib compiler-option

```
$ tsc -t "ES5"
$ tsc --target "ES5"
```

### More:

[Source](https://medium.com/jspoint/typescript-compiler-flags-3b1efebedf15)
