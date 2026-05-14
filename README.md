# Music Funnel AI

A tool to find broken creator funnels automatically.
sdfsdf
## Structure

```
├── backend/          # FastAPI backend
│   ├── main.py       # Main API
│   ├── ai.py         # Lead scoring
│   ├── scraper.py    # Lead scanning
│   └── requirements.txt
├── frontend/         # Next.js frontend
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── dashboard.tsx
│   │   └── api/scan.js
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Running Locally

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Deploying

### Vercel (Frontend)
1. Push to GitHub
2. Import repo at vercel.com
3. Set root directory to `frontend`
4. Add `BACKEND_URL` environment variable

### Render (Backend)
1. Create Web Service at render.com
2. Set root directory to `backend`
3. Build: `pip install -r requirements.txt`
4. Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`