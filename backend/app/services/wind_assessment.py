def calculate_wind_class(wind_speed):
    """
    Classify wind speed into qulity categoeirs.
    """
    if wind_speed < 3:
        return "Poor"
    elif wind_speed < 5:
        return "Moderate"
    elif wind_speed < 7:
        return "Good"
    else:
        return "Excellent"
def calculate_capacity_factor(wind_speed):
    """
    Estimate wind turbine capacity factor.
    Returns Percentage.
    """
    if wind_speed < 3:
        return 5
    elif wind_speed < 5:
        return 20
    elif wind_speed < 7:
        return 35
    else:
        return 50
def classify_wind_site(wind_speed):
    return{
        "wind_speed": wind_speed,
        "classification": calculate_wind_class(wind_speed),
        "capacity_factor": calculate_capacity_factor(wind_speed)
    }