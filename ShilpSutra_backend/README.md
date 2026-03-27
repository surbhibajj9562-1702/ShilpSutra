# ⚙️ ShilpSutra Backend

The AI-powered backend module of **ShilpSutra** — a FastAPI service that uses a trained ResNet18 model to classify handicrafts as authentic or machine-made.

## 📁 Structure

```
ShilpSutra_backend/
├── app.py                  # FastAPI application with /predict endpoint
├── requirements.txt        # Python dependencies
├── shilpsutra_model.pth    # Pre-trained PyTorch model (~43MB)
└── .env.example            # Environment variable template
```

## ⚙️ Tech Stack

- **Python 3.8+**
- **FastAPI** — Modern async web framework
- **Uvicorn** — ASGI server
- **PyTorch** — Deep learning framework
- **TorchVision** — Pre-trained ResNet18 architecture
- **Pillow** — Image processing

## 🚀 Setup & Run

```bash
# 1. Create virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

# 2. Install dependencies
pip install -r requirements.txt

# 3. Copy environment variables
cp .env.example .env

# 4. Run the server
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check — returns server status |
| `POST` | `/predict` | Upload an image → returns prediction & confidence |

### Example Request

```bash
curl -X POST "http://localhost:8000/predict" \
  -F "file=@craft_image.jpg"
```

### Example Response

```json
{
  "prediction": "real_handicrafts",
  "confidence": 0.947
}
```

## 🧠 Model Details

- **Architecture**: ResNet18 (modified final FC layer)
- **Classes**: `real_handicrafts`, `fake_handicrafts`
- **Input**: 224×224 RGB images
- **Output**: Class prediction with softmax confidence score
