document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".pdf-horizontal-container");

    containers.forEach(container => {
        const url = container.dataset.pdf;

        pdfjsLib.getDocument(url).promise.then(pdf => {
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const pageDiv = document.createElement("div");
                pageDiv.className = "pdf-page";
                pageDiv.dataset.page = pageNum;
                container.appendChild(pageDiv);
            }

            // IntersectionObserver 懒加载每页
            const pages = container.querySelectorAll(".pdf-page");
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const pageNum = parseInt(entry.target.dataset.page);
                        pdf.getPage(pageNum).then(page => {
                            const scale = 1.5;
                            const viewport = page.getViewport({ scale });

                            const canvas = document.createElement("canvas");
                            const context = canvas.getContext("2d");
                            canvas.width = viewport.width;
                            canvas.height = viewport.height;

                            page.render({ canvasContext: context, viewport }).promise.then(() => {
                                const img = document.createElement("img");
                                img.src = canvas.toDataURL("image/jpeg", 0.9);
                                img.loading = "lazy";
                                img.style.width = "100%";
                                entry.target.appendChild(img);
                                canvas.remove();
                            });
                        });
                        obs.unobserve(entry.target);
                    }
                });
            }, { root: container, rootMargin: "200px 0px" });

            pages.forEach(page => observer.observe(page));
        });
    });
});