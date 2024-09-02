document.getElementById('downloadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const videoUrl = document.getElementById('videoUrl').value;
    const resultDiv = document.getElementById('result');
    const videoDownloadLink = document.getElementById('videoDownload');
    const audioDownloadLink = document.getElementById('audioDownload');

    try {
        const response = await fetch('/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: videoUrl })
        });
        
        const data = await response.json();
        videoDownloadLink.href = data.video;
        audioDownloadLink.href = data.audio;
        resultDiv.classList.remove('hidden');
    } catch (error) {
        alert('Failed to download the video. Please try again.');
    }
});
