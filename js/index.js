// Function to copy the code to clipboard
function copyCode() {
    const code = document.querySelector('.code-snippet pre code');
    const range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges();  // Clear current selection
    window.getSelection().addRange(range);  // Select the code
    document.execCommand('copy');  // Copy to clipboard
    alert('Code copied to clipboard!');
}

// Function to download the code as a .txt file
function downloadCode() {
    const code = document.querySelector('.code-snippet pre code').textContent;
    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'snippet.txt';
    link.click();
}
