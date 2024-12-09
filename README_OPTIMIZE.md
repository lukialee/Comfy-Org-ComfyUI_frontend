# ComfyUI_frontend Optimize dist files

## Optimization Strategies

- Disable sourcemaps and minify JS and CSS files.
- For commonly used third-party libraries, load them as external library files instead of bundling them into the application. This way, when updating the files, there is no need to repeatedly update the library files.

## Reasons for Optimization

- Most users prefer faster download times when using the application. Since sourcemaps are primarily used for debugging and troubleshooting, they are not necessary for the majority of users. Reducing file sizes facilitates quicker distribution of the program and decreases storage usage.

## Optimization Results

- The total directory size was reduced from `20.7MB` to `6.1MB`.

## Download Advice
- If you just want to use ComfyUI as a tool quickly without considering development, you can obtain the files using a shallow clone and sparse-checkout with git. The following example code performs pull only the `dist` folder.
```
git clone --no-checkout --filter=blob:none --depth=1 https://gitee.com/lukialee/Comfy-Org-ComfyUI_frontend.git
cd Comfy-Org-ComfyUI_frontend
git sparse-checkout init --cone
git sparse-checkout set dist
git checkout main
```
- If you are not concerned about achieving the fastest download and update speeds, it's sufficient to directly download the compressed file of the "release".

# 优化ComfyUI前端打包文件

## 优化策略

- 关掉sourcemap，压缩JS和CSS文件。
- 部分常用第三方库，加载外部库文件，不打包到应用中。这样每次更新文件时，就不必重复更新库文件。

## 优化原因

- 大部分用户使用时，希望更快下载程序，所以大部分人不需要通过sourcemap去Debug或排查问题，缩小文件，会有利于程序的传播，且减少空间占用。

## 优化结果

- 整个目录大小从`20.7MB`减少到`6.1MB`

## 使用建议

- 如果只是想把ComfyUI当成一个工具快速使用，不考虑开发，使用git浅克隆和稀疏克隆的方式获取项目打包后的文件。以下代码指定dist目录，不拉取其他目录。
```
git clone --no-checkout --filter=blob:none --depth=1 https://gitee.com/lukialee/Comfy-Org-ComfyUI_frontend.git
cd Comfy-Org-ComfyUI_frontend
git sparse-checkout init --cone
git sparse-checkout set dist
git checkout main
```
- 如果不考虑极致下载和更新速度，直接下载“发行版”的压缩文件就够了。
