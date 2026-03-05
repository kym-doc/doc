# 这是一个测试界面

## pdf 内嵌测试

您可以参考本页面的源代码来了解如何在 Mkdocs 中内嵌 pdf 文件。请注意，内嵌 pdf 文件可能会受到浏览器的安全策略限制，因此在某些情况下可能无法正常显示。如果您遇到问题，请确保您的浏览器允许内嵌内容，并且 pdf 文件的路径正确。

此外，pdf 文件应尽可能该存储在外部网盘中，并通过外链的方式进行引用，以避免仓库过大导致的问题。

<div style="width: 100%; height: calc(100vh - 120px); border: none;">
  <iframe 
    src="../test.pdf#toolbar=1&navpanes=0&scrollbar=1"
    width="100%" 
    height="100%" 
    frameborder="0"
    allowfullscreen="true"
  >
    您的浏览器不支持内嵌 PDF，请<a href="../test.pdf" target="_blank">点击下载</a>
  </iframe>
</div>

## 代码块测试

```c title="hello.c"
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```
