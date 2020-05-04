## 创建一个 TS+React+Webpack 的项目

```js
typescript awesome-typescript-loader source-map-loader
这些依赖会让TypeScript和webpack在一起良好地工作。

 awesome-typescript-loader:可以让Webpack使用TypeScript的标准配置文件 tsconfig.json编译TypeScript代码

 source-map-loader:使用TypeScript输出的sourcemap文件来告诉webpack何时生成 自己的sourcemaps。


```

添加 TypeScript 配置文件

```js
tsc --init

{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react"
    },
    "include": [
        "./src/**/*"
    ]
}

 "noImplicitThis": true
 noImplicitAny:不要求必须显示的设置any,正常的话,就算any,也需要手动补上
```
