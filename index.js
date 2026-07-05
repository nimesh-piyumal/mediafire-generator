const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({
    status: true,
    creator: "Nimesh Piyumal",
    response: "Mediafire Link Generator API (Express)"
  });
});

// API route
app.get('/api/generate', async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl || !targetUrl.includes('mediafire.com')) {
    return res.status(400).json({ 
      error: 'Please provide a valid Mediafire URL as the "url" query parameter.' 
    });
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    
    const html = response.data;
    const $ = cheerio.load(html);

    const downloadLink = $('#downloadButton').attr('href');
    
    if (!downloadLink) {
      return res.status(404).json({ 
        error: 'Could not find the direct download link on the provided page.' 
      });
    }

    return res.json({ 
      success: true, 
      creator: "Nimesh Piyumal",
      response: downloadLink
    });

  } catch (error) {
    return res.status(500).json({ 
      error: 'Failed to fetch the Mediafire page.',
      details: error.message
    });
  }
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
