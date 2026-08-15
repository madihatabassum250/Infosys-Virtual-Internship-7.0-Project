def recommend_deployment(solar_class,wind_class):
    if solar_class == "Excellent" and wind_class == "Excellent":
        return "Hybrid"
    elif solar_class == "Excellent":
        return "Solar"
    elif wind_class == "Excellent":
        return "Wind"
    else:
        return "Further Assessment Required"
def generate_reason(solar_class,wind_class):
    if solar_class == "Excellent" and wind_class == "Excellent":
        return "high solar irradiance and consistently strong wind resources."
    elif solar_class == "Excellent":
        return "Excellent solar resouces makes solar deployment ideal."
    elif wind_class == "Excellent":
        return "Strong winf resource supports efficint wind deployment."
    else:
        return "Both resources need further evaluation."
def confidence_score(solar_class,wind_class):
    if solar_class == "Excellent" and wind_class == "Excellent":
        return 91
    elif solar_class == "Excellent":
        return 85
    elif wind_class == "Excellent":
        return 84
    else:
        return 60
def deployment_result(solar_class,wind_class):
    return {
        "deployment": recommend_deployment(solar_class,wind_class),
        "confidence": confidence_score(solar_class,wind_class),
        "reason": generate_reason(solar_class,wind_class)
    }