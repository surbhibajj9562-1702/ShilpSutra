<p align="center">
  <img src="https://img.shields.io/badge/ShilpSutra-Parampara%20se%20Pramaan%20Tak-D4AF37?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTEyIDJMMyA3djEwbDkgNSA5LTVWN2wtOS01eiIvPjwvc3ZnPg==&logoColor=white" alt="ShilpSutra Banner" />
</p>

<h1 align="center">🪔 ShilpSutra: Parampara se Pramaan Tak</h1>

<p align="center">
  <strong>✨ Authenticating Handicrafts through Technology ✨</strong>
</p>

<p align="center">
  <a href="https://github.com/surbhibajj9562-1702/ShilpSutra">
    <img src="https://img.shields.io/badge/GitHub-ShilpSutra-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

---

## 📌 About the Project

**ShilpSutra** (शिल्पसूत्र) is an AI-powered platform that authenticates Indian handicrafts, bridging the gap between **tradition (Parampara)** and **proof (Pramaan)**. Using deep learning, the system distinguishes genuine handmade crafts from machine-made imitations — empowering artisans, buyers, and cultural preservationists.

> *"Art is not what you see, but what you make others see."* — Edgar Degas

---

## 🧠 Problem Statement

India's handicraft industry faces a critical challenge:

- 🏭 **Counterfeit products** flood the market, undercutting authentic artisans
- 🔍 **No reliable verification** system exists for buyers to validate authenticity
- 📉 **Artisan livelihoods** are threatened by mass-produced imitations
- 🏛️ **Heritage erosion** — traditional craft techniques are being lost

**ShilpSutra** addresses these challenges head-on with an AI-first approach.

---

## 💡 Our Solution

An intelligent, multi-layered authentication system that combines:

| Technology | Purpose |
|-----------|---------|
| 🤖 **AI / Deep Learning** | ResNet18-based image classification to detect real vs. fake crafts |
| 🏷️ **QR Code Tracking** | Unique QR codes linked to artisan profiles for product traceability |
| 🗺️ **Heritage Mapping** | Interactive explorer showcasing state-wise Indian craft heritage |
| ✅ **Instant Verification** | Upload a craft image → get real-time authenticity results |

---

## ⚙️ Tech Stack

### Frontend
| Technology | Usage |
|-----------|-------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic page structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Responsive styling with CSS custom properties |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Interactive UI, File API, drag-and-drop |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=white) | Icon library |

### Backend
| Technology | Usage |
|-----------|-------|
| ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) | Core backend language |
| ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) | Async REST API framework |
| ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white) | Deep learning model inference |
| ![TorchVision](https://img.shields.io/badge/TorchVision-EE4C2C?style=flat-square&logo=pytorch&logoColor=white) | ResNet18 pre-trained architecture |

---

## 🧩 Features

### 🔐 Craft Authenticity Verification
Upload a handicraft image and receive an instant AI-powered verdict — **Authentic** or **Likely Machine-Made** — with a confidence score.

### 🏷️ QR Code Product Tracking
Each verified product gets a unique QR code linking to its artisan profile, materials, and origin — creating an unbreakable chain of trust.

### 🗺️ Heritage Map Explorer
Search and explore Indian handicraft heritage state-by-state — discover famous crafts, traditional materials, and cultural significance.

### 👨‍🎨 Artisan Verification
A digital identity system for artisans, ensuring their craftsmanship is recognized and protected.

### 📊 Confidence Scoring
Every authentication returns a percentage-based confidence score, providing transparent and measurable results.

---

## 🗺️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     USER / BROWSER                       │
│                                                         │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐│
│   │  index   │  │  auth    │  │ heritage │  │ result ││
│   │  .html   │  │  .html   │  │  .html   │  │  .html ││
│   └────┬─────┘  └────┬─────┘  └────┬─────┘  └───┬────┘│
│        │              │              │             │     │
│        └──────────────┴──────┬───────┴─────────────┘     │
│                              │                           │
│                    ┌─────────▼─────────┐                │
│                    │   script.js       │                │
│                    │   + style.css     │                │
│                    └─────────┬─────────┘                │
└──────────────────────────────┼───────────────────────────┘
                               │ HTTP (REST API)
                               ▼
┌──────────────────────────────────────────────────────────┐
│                   FASTAPI BACKEND                        │
│                                                         │
│   ┌──────────────┐    ┌───────────────────────┐         │
│   │  /predict    │───▶│  ResNet18 Model       │         │
│   │  (POST)      │    │  shilpsutra_model.pth │         │
│   └──────────────┘    └───────────────────────┘         │
│                              │                           │
│                    ┌─────────▼─────────┐                │
│                    │  Classification:  │                │
│                    │  • real_handicraft│                │
│                    │  • fake_handicraft│                │
│                    └──────────────────┘                 │
└──────────────────────────────────────────────────────────┘
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Python 3.8+**
- **pip** (Python package manager)
- **Git**
- A modern web browser

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/surbhibajj9562-1702/ShilpSutra.git
cd ShilpSutra
```

### 2️⃣ Setup Backend

```bash
# Navigate to backend directory
cd ShilpSutra_backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Copy environment variables
cp .env.example .env

# Start the backend server
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

### 3️⃣ Setup Frontend

```bash
# Navigate to frontend directory
cd ShilpSutra_Frontend

# Option 1: Open directly in browser
# Simply open index.html in your browser

# Option 2: Use a local server
python -m http.server 5500

# Option 3: Use VS Code Live Server
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```

The frontend will be available at `http://localhost:5500`

### 4️⃣ Test the API

```bash
# Health check
curl http://localhost:8000/

# Authenticate a craft image
curl -X POST "http://localhost:8000/predict" -F "file=@your_craft_image.jpg"
```

---

## 📷 Screenshots

> 📸 *Screenshots coming soon — the UI features a beautiful golden-themed design with hero sections, authentication cards, and heritage explorers.*

| Page | Description |
|------|-------------|
| 🏠 **Home** | Hero landing page with call-to-action buttons |
| 🔍 **Authenticate** | Drag-and-drop image upload interface |
| 🗺️ **Heritage Map** | Searchable state-wise craft database |
| 📊 **Results** | Authentication verdict with confidence score |
| 👥 **About** | Team profiles and project vision |

---

## 📁 Project Structure

```
ShilpSutra/
│
├── 📄 README.md                    # This file
├── 📄 LICENSE                      # MIT License
├── 📄 CONTRIBUTING.md              # Contribution guidelines
├── 📄 .gitignore                   # Git ignore rules
│
├── 🎨 ShilpSutra_Frontend/        # Frontend Module
│   ├── index.html                  # Landing page
│   ├── authenticate.html           # Image upload page
│   ├── heritage.html               # Heritage explorer
│   ├── result.html                 # Result display
│   ├── about.html                  # About / Team page
│   ├── README.md                   # Frontend documentation
│   ├── css/
│   │   └── style.css               # Global stylesheet
│   ├── js/
│   │   └── script.js               # Application logic
│   └── images/
│       └── hero_bg.png             # Hero background
│
└── ⚙️ ShilpSutra_backend/          # Backend Module
    ├── app.py                      # FastAPI application
    ├── requirements.txt            # Python dependencies
    ├── shilpsutra_model.pth        # Trained PyTorch model
    ├── .env.example                # Environment template
    └── README.md                   # Backend documentation
```

---

## 📈 Future Scope

| Feature | Description |
|---------|-------------|
| 🔗 **Blockchain Integration** | Immutable ledger for craft certification records |
| 📱 **Mobile App** | React Native / Flutter app for on-the-go authentication |
| 🌍 **Multi-language Support** | Hindi, Tamil, Bengali, and more regional languages |
| 🤝 **Artisan Marketplace** | Direct artisan-to-buyer platform integrated with authentication |
| 📊 **Analytics Dashboard** | Insights on authentication trends, regional craft data |
| 🏛️ **Government API Integration** | Connect with GI (Geographical Indication) registry |
| 🧪 **Advanced ML Models** | Ensemble models, texture analysis, and material composition detection |
| 🔔 **Real-time Alerts** | Notify artisans when their craft style is being counterfeited |

---

## 👩‍💻 Team

<table align="center">
  <tr>
    <td align="center"><strong>Janvi Kalra</strong><br/>24BCE11171<br/><em>Project Lead</em></td>
    <td align="center"><strong>Surbhi Bajj</strong><br/>24BAI10327<br/><em>Software Developer</em></td>
    <td align="center"><strong>Mahi Pandey</strong><br/>24BCE10321<br/><em>ML Model Trainer</em></td>
    <td align="center"><strong>Ayushi Singh</strong><br/>24BCE10721<br/><em>UI/UX Designer</em></td>
  </tr>
</table>

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🌐 Links

<p align="center">
  <a href="https://github.com/surbhibajj9562-1702/ShilpSutra">
    <img src="https://img.shields.io/badge/🔗_GitHub_Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repo" />
  </a>
</p>

---

<p align="center">
  <strong>🇮🇳 Made with ❤️ for India's Artisans</strong><br/>
  <em>Protecting tradition, one craft at a time.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/PRs-Welcome-blue?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/github/stars/surbhibajj9562-1702/ShilpSutra?style=flat-square" alt="Stars" />
</p>
