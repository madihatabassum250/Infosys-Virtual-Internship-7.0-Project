from sqlalchemy import create_engine 
from sqlalchemy.orm import sessionmaker,declarative_base
from dotenv import load_dotenv
load_dotenv()
DATABASE_URL = "postgresql://postgres:madiha123@localhost:5432/solar_wind_db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
Base = declarative_base()