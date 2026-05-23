# 📥 MediaFire Direct Link Generator API — Cloudflare Worker

A free, lightweight API to instantly generate direct download links from MediaFire URLs. Built to run perfectly on **Cloudflare Workers** at the edge.

> Built by [Nimesh Piyumal](https://ceylonnet.com)

---

## 🚀 One-Click Deploy
 
[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nimesh-piyumal/mediafire-generator)
 
> Click the button above to instantly deploy your own instance to Cloudflare Workers — no local setup needed!

---

## ✨ Features

- 🆓 **Free to run** — Deployable on Cloudflare Workers free tier (100,000 requests/day).
- ⚡ **Edge execution** — Runs on Cloudflare's global network for ultra-low latency.
- 🎯 **Accurate Scraping** — Uses Cheerio to parse MediaFire pages and extract direct links securely.
- 🌍 **CORS enabled** — Ready to be integrated into any web browser frontend application.
- 📦 **Lightweight** — Minimal code footprint with pure ES modules.

---

## 🚀 Quick Start

### Deploy Your Own

1. **Clone this repo**
   ```bash
   git clone https://github.com/nimesh-piyumal/mediafire-generator.git
   cd mediafire-generator
   ```

2. **Install Dependencies & Wrangler CLI**
   ```bash
   npm install
   npm install -g wrangler
   wrangler login
   ```

3. **Test Locally**
   ```bash
   npm run dev
   ```

4. **Deploy to Cloudflare Workers**
   ```bash
   npm run deploy
   ```

5. **Done!** Your API is live at `https://mediafire-generator.<your-subdomain>.workers.dev`

---

## 📡 API Endpoints

### `GET /`
Returns API health status.

**Response**
```json
{
  "status": true,
  "creator": "Nimesh Piyumal",
  "response": "Mediafire Link Generator API"
}
```

---

### `GET /api/generate`
Generates a direct download link from a provided MediaFire URL.

**Request Parameters**
- `url` (required): The original MediaFire file URL.

**Request Example**
```text
GET /api/generate?url=https://www.mediafire.com/file/fqnx7ieaq8nc65a/Shoncine+Reels+Studio+Setup+3.0.0.exe/file
```

**Response**
```json
{
  "success": true,
  "creator": "Nimesh Piyumal",
  "response": "https://download946.mediafire.com/nzlk5zym1wcgwmRZlmNsqalW9PV9M-hsj_iWxVB8FqRWPU6qR71qWmIu-baqgQqwUOLgvonjq4TqzEm7zuzO6uBOLPsdz38xUHshqkU13zaOlbrV9RvU6ShmuPS8fg2boYqKQgIfFZShszFydfEaLmDHPPtfChvflLFCbojGc4Z-F4U/fqnx7ieaq8nc65a/Shoncine+Reels+Studio+Setup+3.0.0.exe"
}
```

---

## 🔌 Usage Examples

### Fetch API (JavaScript / Node.js)
```javascript
const url = "https://mediafire-generator.nimeshveo.workers.dev/api/generate?url=https://www.mediafire.com/file/fqnx7ieaq8nc65a/Shoncine+Reels+Studio+Setup+3.0.0.exe/file";

const response = await fetch(url);
const data = await response.json();

if (data.success) {
  console.log("Direct Link:", data.response);
} else {
  console.error("Error:", data.error);
}
```

### Python
```python
import requests

api_url = "https://mediafire-generator.nimeshveo.workers.dev/api/generate"
mediafire_url = "https://www.mediafire.com/file/fqnx7ieaq8nc65a/Shoncine+Reels+Studio+Setup+3.0.0.exe/file"

response = requests.get(api_url, params={"url": mediafire_url})
data = response.json()

if data.get("success"):
    print("Direct Link:", data["response"])
else:
    print("Error:", data.get("error"))
```

---

## 📄 License

MIT — free to use, modify, and deploy.

---

<p align="center">Made with ❤️ by <a href="https://ceylonnet.com">Nimesh Piyumal</a></p>
