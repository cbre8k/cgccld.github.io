pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.7.570/build/pdf.worker.min.js";

const loadingTask = pdfjsLib.getDocument("resume.pdf");
loadingTask.promise
    .then((pdf) => {
        pdf.getPage(1).then((page) => {
            const scale = 1;
            const resolution = 2;
            const viewport = page.getViewport({ scale: scale });
            const canvas = document.getElementById("the-canvas");
            const context = canvas.getContext("2d");

            canvas.width = resolution * viewport.width;
            canvas.height = resolution * viewport.height;

            canvas.style.height = viewport.height + "px"; //showing size will be smaller size
            canvas.style.width = viewport.width + "px";

            const renderContext = {
                canvasContext: context,
                viewport: viewport,
                transform: [resolution, 0, 0, resolution, 0, 0],
            };
            page.render(renderContext);
        });
    })
    .catch((reason) => {
        console.error(reason);
    });
