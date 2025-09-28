# utils/db.py
from motor.motor_asyncio import AsyncIOMotorClient
from constants import MONGODB_URI, DB_NAME

client: AsyncIOMotorClient = None
db = None

def init_db():
    global client, db
    client = AsyncIOMotorClient(MONGODB_URI)
    db = client[DB_NAME]
    return db
