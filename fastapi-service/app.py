from fastapi import FastAPI
from pydantic import BaseModel
import pickle
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

FRONTEND_URL = os.getenv("FRONTEND_URL")
app.add_middleware( 
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],     
    allow_credentials=True,
    allow_methods=["*"],     
    allow_headers=["*"],
)

pickle_in = open("pipe.pkl",'rb')
model = pickle.load(pickle_in)

class BM(BaseModel):
    N:float
    P:float
    K:float
    pH:float
    Rain:float
    Temp:float
    Humid:float
    Crop:str

@app.post("/predict/")
def predict(data:BM):
    data = data.dict()
    N = data['N']
    P = data['P']
    K = data['K']
    pH = data['pH']
    Rain = data['Rain']
    Temp = data['Temp']
    Humid = data['Humid']
    Crop = data['Crop']
    return model.predict_proba([[N,P,K,pH,Rain,Temp,Humid,Crop]]).tolist()

