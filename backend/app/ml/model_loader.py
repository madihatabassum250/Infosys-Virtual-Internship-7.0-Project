import os
import joblib
MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "../../models/random_forest_model.pkl"
)

model = joblib.load(MODEL_PATH)
def get_model():
    return model