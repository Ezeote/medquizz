// Configurar PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// Event listeners para los thumbnails
document.querySelectorAll('.pdf-thumbnail').forEach(item => {
item.addEventListener('click', event => {
    const pdfPath = event.currentTarget.getAttribute('data-pdf');
    openPDF(pdfPath);
});
});

// Función para abrir el PDF
function openPDF(pdfUrl) {
const modal = document.getElementById('pdfModal');
const canvas = document.getElementById('pdf-canvas');

modal.classList.add('active');

// Cargar y renderizar PDF
pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
    pdf.getPage(1).then(page => {
        const viewport = page.getViewport({ scale: 1.5 });
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: canvas.getContext('2d'),
            viewport: viewport
        };
        
        page.render(renderContext);
    });
});
}

// Función para cerrar el modal
function closeModal() {
document.getElementById('pdfModal').classList.remove('active');
}

// Cerrar al hacer click fuera del modal
window.onclick = function(event) {
const modal = document.getElementById('pdfModal');
if (event.target === modal) {
    closeModal();
}
}