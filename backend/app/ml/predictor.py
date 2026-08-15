import pandas as pd
from app.ml.model_loader import get_model
class Predictor:
    def predict(self,
                wind_speed,
                temperature,
                humidity,
                date):
        date = pd.to_datetime(date)
        features = pd.DataFrame([{
            "wind_speed": wind_speed,
            "temperature": temperature,
            "humidity": humidity,
            "year": date.year,
            "month": date.month,
            "day": date.day,
            "day_of_year": date.dayofyear
        }])
        model = get_model()

        prediction = model.predict(features)
        importance = model.feature_importances_
        feature_names = list(features.columns)
        importance_list = sorted(
            zip(feature_names,importance),
            key=lambda x: x[1],
            reverse=True
        )
        top_features =[
            item[0]
            for item in importance_list[:3]
        ]
        return {
            "prediction": float(prediction),
            "explanation": "Prediction mainly influenced by: "+",".join(top_features)
        }