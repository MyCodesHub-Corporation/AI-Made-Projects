document.getElementById('html-code').addEventListener('input', updateOutput);
document.getElementById('css-code').addEventListener('input', updateOutput);
document.getElementById('js-code').addEventListener('input', updateOutput);

function updateOutput() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const output = document.getElementById('output').contentWindow.document;

    output.open();
    output.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `);
    output.close();
}
