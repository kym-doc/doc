# 这是一个测试界面

## pdf 内嵌测试

您可以参考本页面的源代码来了解如何在 Mkdocs 中内嵌 pdf 文件。请注意，内嵌 pdf 文件可能会受到浏览器的安全策略限制，因此在某些情况下可能无法正常显示。如果您遇到问题，请确保您的浏览器允许内嵌内容，并且 pdf 文件的路径正确。

此外，pdf 文件应尽可能该存储在外部网盘中，并通过外链的方式进行引用，以避免仓库过大导致的问题。我们通过 `pdf.js` 将文件转化成了图片进行展示

??? note "点我查看显示效果"
    <div class="pdf-horizontal-container" data-pdf="../test.pdf"></div>

## 代码块测试

```c title="hello.c"
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```
