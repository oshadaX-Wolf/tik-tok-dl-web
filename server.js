const express = require('express');
const { ttdl } = require('btch-downloader'); // Assumed package for TikTok downloading
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/download', async (req, res) => {
    const { url } = req.body;
    
    try {
        const data = await ttdl(url);  // Assuming this function returns video and audio URLs
        res.json({ video: data.video[0], audio: data.audio[0] });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process the TikTok URL.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
