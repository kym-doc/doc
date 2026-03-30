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
    notice.innerHTML =
        `此页面采用内嵌 PDF，你可以通过 <a href="${pdfSrc}" target="_blank">此链接</a> 下载 PDF，如果无法观看可能是因为网络问题，请尝试等待/刷新/更换设备/下载查看`;
    container.appendChild(notice);

    // 创建 PDF 容器
    const viewerDiv = document.createElement("div");
    viewerDiv.className = "pdf-viewer";
    container.appendChild(viewerDiv);

    // 使用 embedpdf.js 初始化 PDF
    import("https://unpkg.com/@embedpdf/snippet@2.9.0/dist/embedpdf.js")
        .then((module) => {
            const EmbedPDF = module.default;
            EmbedPDF.init({
                type: "container",
                target: viewerDiv,
                src: pdfSrc,
                theme: { preference: "system" },
                i18n: { defaultLocale: "zh-CN" },
            });
        })
        .catch((err) => {
            console.error("PDF 加载失败:", err);
        });
});