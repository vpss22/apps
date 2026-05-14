from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scraper import scan_leads
from ai import score_lead

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "running"}

@app.get("/scan")
def scan():
    leads = scan_leads()

    results = []

    for lead in leads:
        lead["score"] = score_lead(lead)
        results.append(lead)

    return results
