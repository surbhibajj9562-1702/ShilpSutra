# 🎨 ShilpSutra Frontend

The frontend module of **ShilpSutra** — a beautiful, responsive web interface for authenticating Indian handicrafts.

## 📁 Structure

```
ShilpSutra_Frontend/
├── index.html          # Landing page
├── authenticate.html   # Image upload & verification page
├── heritage.html       # Heritage map explorer
├── result.html         # Authentication result display
├── about.html          # Team & vision page
├── css/
│   └── style.css       # Global stylesheet
├── js/
│   └── script.js       # Application logic
└── images/
    └── hero_bg.png     # Hero section background
```

## ⚙️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, responsive design
- **Vanilla JavaScript** — DOM manipulation, File API, LocalStorage
- **Font Awesome 6** — Icon library

## 🚀 Running Locally

Simply open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 5500

# Using VS Code
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```

## 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Hero landing page with navigation to all features |
| `authenticate.html` | Drag-and-drop image upload for craft verification |
| `heritage.html` | Searchable database of Indian state handicraft heritage |
| `result.html` | Displays AI authentication results with confidence score |
| `about.html` | Team information and project vision |
