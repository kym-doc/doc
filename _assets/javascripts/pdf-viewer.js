// pdf-viewer.js
// 单 PDF 封装，自动生成提示文字和 PDF 容器
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".pdf-viewer-container");
    if (!container) return;

    // 防止重复初始化
    if (container.dataset.pdfInitialized) return;
    container.dataset.pdfInitialized = "true";

    // 读取 PDF URL
    const pdfSrc = container.dataset.pdf;
    if (!pdfSrc) {
        console.error("pdf-viewer-container 缺少 data-pdf 属性");
        return;
    }

    // 创建提示文字
    const notice = document.createElement("div");
    notice.className = "pdf-viewer-notice";
    notice.innerText =
        "此页面采用内嵌 PDF，如果手机端无法观看请尝试刷新，多次刷新无效请考虑使用电脑端或者下载查看";
    container.appendChild(notice);

    // 创建 PDF 容器
    const viewerDiv = document.createElement("div");
    viewerDiv.className = "pdf-viewer";
    container.appendChild(viewerDiv);

    // 使用 embedpdf.js 初始化 PDF
    import("https://testingcf.jsdelivr.net/npm/@embedpdf/snippet@2/dist/embedpdf.js")
        .then((module) => {
            const EmbedPDF = module.default;
            EmbedPDF.init({
                type: "container",
                target: viewerDiv,
                src: pdfSrc,
                theme: { preference: "system" },
            });
        })
        .catch((err) => {
            console.error("PDF 加载失败:", err);
        });
});