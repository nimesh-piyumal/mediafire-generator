# 📥 MediaFire Direct Link Generator API - Express & Vercel

A lightweight API to instantly generate direct download links from MediaFire URLs. Built with Node.js and Express, ready to be deployed on **Vercel** or any **VPS**.

> Built by [Nimesh Piyumal](https://ceylonnet.com)

---

## 🚀 One-Click Deploy (Vercel)
 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
 
> Push this repository to GitHub and import it into Vercel for instant serverless deployment!

---

## ✨ Features

- ⚡ **Serverless Ready** — Pre-configured with `vercel.json` for instant deployment on Vercel.
- 💻 **VPS Compatible** — Runs perfectly on any VPS using Node.js (PM2 recommended).
- 🎯 **Accurate Scraping** — Uses Cheerio and Axios to parse MediaFire pages and extract direct links securely.
- 🌍 **CORS enabled** — Ready to be integrated into any web browser frontend application.
- 📦 **Lightweight** — Minimal code footprint using Express.js.

---

## 🚀 Quick Start

### Deploy Locally or on a VPS

1. **Clone this repo**
   ```bash
   git clone https://github.com/nimesh-piyumal/mediafire-generator.git
   cd mediafire-generator/mediafire-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the API Server**
   ```bash
   node index.js
   ```
   *The server will start on port 3000.*

### Deploy to Vercel (CLI)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

---

## 📡 API Endpoints

### `GET /`
Returns API health status.

**Response**
```json
{
  "status": true,
  "creator": "Nimesh Piyumal",
  "response": "Mediafire Link Generator API (Express)"
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
const url = "https://your-vercel-app.vercel.app/api/generate?url=https://www.mediafire.com/file/fqnx7ieaq8nc65a/Shoncine+Reels+Studio+Setup+3.0.0.exe/file";

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

api_url = "https://your-vercel-app.vercel.app/api/generate"
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
