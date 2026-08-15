const API_BASE_URL = "http://127.0.0.1:8000";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;

    try {
      const error = await response.json();

      if (error.detail) {
        message =
          typeof error.detail === "string"
            ? error.detail
            : JSON.stringify(error.detail);
      }
    } catch {
      // Keep default error message
    }

    throw new Error(message);
  }

  return response.json();
}


/*
 * MAIN SITE ANALYSIS
 *
 * Sends:
 * village
 * district
 * state
 * country
 * date
 *
 * to FastAPI /analysis.
 */
export async function analyzeLocation({
  village,
  district,
  state,
  country,
  date,
}) {
  const params = new URLSearchParams({
    village: village.trim(),
    district: district.trim(),
    state: state.trim(),
    country: country.trim(),
    date,
  });

  return request(`/analysis?${params.toString()}`, {
    method: "POST",
  });
}


/*
 * SOLAR FEATURES
 */
export async function getSolarFeatures(latitude, longitude) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
  });

  return request(`/solar/features?${params.toString()}`);
}


/*
 * FEATURE RECORDS
 */
export async function getFeatures() {
  return request("/features/");
}


/*
 * PROJECTS
 */
export async function getProjects() {
  return request("/projects/");
}


/*
 * SITES
 */
export async function getSites() {
  return request("/sites/");
}


/*
 * PREDICTIONS
 */
export async function getPredictions() {
  return request("/predictions/");
}


/*
 * ML PREDICTION
 *
 * This is kept separate from /analysis because
 * your backend already has a separate /predict endpoint.
 */
export async function predict({
  wind_speed,
  temperature,
  humidity,
  date,
}) {
  const params = new URLSearchParams({
    wind_speed: String(wind_speed),
    temperature: String(temperature),
    humidity: String(humidity),
    date,
  });

  return request(`/predict?${params.toString()}`, {
    method: "POST",
  });
}