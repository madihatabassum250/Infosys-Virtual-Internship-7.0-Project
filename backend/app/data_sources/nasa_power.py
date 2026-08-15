
import requests
class NASAPowerClient:
    BASE_URL = (
        "https://power.larc.nasa.gov/api/temporal/daily/point"
    )
    def get_solar_data(self,latitude:float,longitude:float):
        params = {
            "parameters": "ALLSKY_SFC_SW_DWN,T2M,RH2M",
            "community":"RE",
            "longitude": longitude,
            "latitude" : latitude,
            "start": "20240101",
            "end": "20240131",
            "format": "JSON"
        }
        try:
            response = requests.get( 
                self.BASE_URL,
                params = params,
                timeout=15
            )
            response .raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            raise Exception(f"NASA POWER APT ERROR: {e}")
    def extract_features(self,data):
        parameters = data["properties"]["parameter"]
        return{
            "solar_irradiance": parameters["ALLSKY_SFC_SW_DWN"],
            "temperatue": parameters["T2M"],
            "relative_humidity": parameters["RH2M"]
        }
    