# Solar & Wind Deployment Intelligence Platform

## Project Overview
The Solar & Wind Deployment Intelligence Platform is an AI-based project that helps identify suitable locations for solar and wind energy installations. It uses GIS data, satellite imagery, weather data, and machine learning to support renewable energy planning.

## Project Objectives
- Analyze solar and wind resources.
- Evaluate suitable locations for renewable energy projects.
- Display results using an interactive dashboard.

## Technologies Used
- Python
- FastAPI
- React.js
- PostgreSQL
- Google Earth Engine
- QGIS

## Datasets Used
- NASA POWER
- Global Wind Atlas
- SRTM DEM
- OpenStreetMap (OSM)
- Sentinel-2 Satellite Imagery

## Project Folder Structure
backend/ - Backend application

frontend/ - Frontend application

datasets/ - Renewable energy datasets

docs/ - Project documentation

models/ - AI/ML models

reports/ - Generated reports

## Author
Infosys Virtual Internship Project
# Task 3 - Model Performance Evaluation

## Model Used

Random Forest Regressor

The model was trained using Scikit-learn's RandomForestRegressor to predict solar irradiance based on engineered features.

## Evaluation Results

MAE: 0.168

RMSE: 0.168

R² Score: NaN

## Metric Explanation

### Mean Absolute Error (MAE)

MAE measures the average difference between the predicted values and the actual values.

Result:
0.168

Interpretation:
On average, the model's prediction differs from the actual value by about 0.168 units.

---

### Root Mean Squared Error (RMSE)

RMSE measures the overall prediction error and gives higher importance to larger errors.

Result:
0.168

Interpretation:
A lower RMSE indicates better prediction accuracy. The obtained value shows that the prediction error is small.

---

### R² Score

R² measures how well the model explains the variation in the target variable.

Result:
NaN

Interpretation:
The dataset contains only five records. After the train-test split, there was only one test sample, so R² could not be calculated. With a larger dataset, this value will be generated correctly.

## Metric Explanation

### Mean Absolute Error (MAE)

MAE measures the average difference between the predicted values and the actual values.

Result:
0.168

Interpretation:
On average, the model's prediction differs from the actual value by about 0.168 units.

---

### Root Mean Squared Error (RMSE)

RMSE measures the overall prediction error and gives higher importance to larger errors.

Result:
0.168

Interpretation:
A lower RMSE indicates better prediction accuracy. The obtained value shows that the prediction error is small.

---

### R² Score

R² measures how well the model explains the variation in the target variable.

Result:
NaN

Interpretation:
The dataset contains only five records. After the train-test split, there was only one test sample, so R² could not be calculated. With a larger dataset, this value will be generated correctly.

## Baseline Model Training and Evaluation

### Dataset Split

The dataset was divided into three subsets:

Training Set: 60% (3 samples)

Validation Set: 20% (1 sample)

Testing Set: 20% (1 sample)

Reason:
The training dataset was used to train the machine learning models.
The validation dataset was used to compare the performance of different models.
The testing dataset was used to evaluate the final selected model.

### Models Used

Two regression models were trained:

1. Decision Tree Regressor
2. Random Forest Regressor

Both models were trained using the same training dataset for fair comparison.

# Model Performance Comparison

| Metric | Decision Tree | Random Forest |
|---------|--------------:|--------------:|
| Training MAE | 0.000 | 0.068 |
| Validation MAE | 0.100 | 0.144 |
| Training RMSE | 0.000 | 0.077 |
| Validation RMSE | 0.100 | 0.144 |
| Training R² Score | 1.000 | 0.796 |
| Validation R² Score | Not Available | Not Available |

### Model Comparison

The Decision Tree model achieved lower validation MAE and RMSE than the Random Forest model.
Based on the available validation results, the Decision Tree model performed better on this dataset and was selected as the best baseline model.

### Model Behaviour Analysis

Decision Tree

The Decision Tree model achieved perfect training performance but showed a higher validation error.
This indicates that the model memorized the training data and may be overfitting.

Random Forest

The Random Forest model had slightly higher training and validation errors but generally provides better generalization.
Because the dataset contains only five records, its advantage could not be fully observed.

### Best Model

The Decision Tree Regressor was selected as the best-performing baseline model based on the validation results.

The model was saved using Joblib for deployment in the FastAPI application.

Saved Model Location:
backend/models/random_forest_model.pkl

### Conclusion

Two baseline regression models were trained and evaluated.
The Decision Tree model achieved the best validation performance for the current dataset.
The selected model was serialized using Joblib and is ready to be integrated into the FastAPI backend for prediction.

## End-to-End Testing

The Machine Learning model was successfully integrated into the FastAPI backend.

### Test Input

Latitude: 17.3850

Longitude: 78.4867

Wind Speed: 7.1

Temperature: 28°C

Humidity: 55%

Date: 2025-01-06

### API Result

- Solar features extracted successfully.
- Wind features calculated successfully.
- Site evaluation completed.
- Forecasting module executed successfully.
- Machine Learning prediction returned successfully.

Example prediction:5.1

### Conclusion

The application successfully performs:

- Feature extraction
- Model inference
- Prediction generation
- Integration of prediction into the final API response

The complete end-to-end workflow was verified successfully.

## Model Comparison

| Model | Train MAE | Validation MAE | Train RMSE | Validation RMSE | Train R² | Validation R² |
|-------|-----------|----------------|------------|-----------------|----------|---------------|
| Decision Tree | 0.000 | 0.100 | 0.000 | 0.100 | 1.000 | NaN |
| Random Forest | 0.068 | 0.144 | 0.077 | 0.144 | 0.796 | NaN |

## Best Model Selection

Two machine learning models were trained and compared:

- Decision Tree Regressor
- Random Forest Regressor

Decision Tree was selected because:

- Lowest Validation MAE
- Lowest Validation RMSE
- Faster training
- Simple model architecture
- Easy deployment using Joblib

Therefore, Decision Tree was selected for deployment.

## End-to-End Verification

The saved machine learning model was successfully integrated into the FastAPI backend.

Verification completed:

- Model loaded successfully.
- Prediction pipeline executed successfully.
- API returned predictions.
- Model was loaded from the serialized file.
- Retraining was not required during API execution.

Example Prediction

ml_prediction = 5.1

# Feature Importance Validation

The feature importance generated by the trained Decision Tree model shows the relative contribution of each feature.

## Observations

- Wind Speed is one of the most important features because renewable energy production is strongly influenced by wind conditions.
- Temperature also has a significant impact on weather patterns.
- Humidity contributes moderately to the prediction.
- Date-based features (Year, Month, Day, Day of Year) capture seasonal trends.

## Conclusion

The feature ranking is reasonable and aligns with the expected behaviour of renewable energy forecasting. A larger dataset could further improve the reliability of the feature importance.