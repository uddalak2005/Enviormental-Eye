# Enviornmental-Eye🌍 


The Environmental Eye is a comprehensive flood detection system that also simultaneously forecasts floods, cyclones, and droughts, all in one platform of early warning. The aim is to give authorities and communities the ability to react quickly and effectively to these environmental disasters by saving lives and securing livelihoods. This particularly affects the agricultural sector whereby farmers face enormous economic losses, food insecurity, and psychological stress.

## Key Features

- **🚨 Early Warning System**: Provides real-time alerts for floods, cyclones, and droughts.
- **🌤️ Climate Modeling and Weather Forecasting**: Utilizes advanced climate modeling to enable farmers to make well-informed decisions.
- **🤖 Machine Learning Models**: Predicts environmental disasters and recommends viable crop types based on specific conditions.
- **🌱 Sustainable Farming Practices**: Promotes methods that reduce environmental impact.

## Critical Issues Addressed

1. **🌦️ Unpredictable Climate Patterns**
2. **🌾 Crop Damage/Failure**
3. **📚 Inaccessibility to Knowledge**
4. **🏞️ Environmental Degradation**
5. **📊 Real-Time Warnings with Data Support**

## System Architechture 

We experimented with several regression models to determine the best fit for our predictions:

Linear Regression: Useful for understanding the relationship between independent variables (e.g., rainfall, temperature) and dependent variables (e.g., flood levels, drought severity).
Polynomial Regression: Applied to capture non-linear relationships within the data, which are common in environmental studies.
Multiple Regression: Utilized to account for the impact of multiple variables simultaneously.
Model Training and Validation
The historical data was split into training and validation sets to ensure the robustness of our models. We trained the models on the training dataset and validated them using the validation set. Key metrics such as Mean Squared Error (MSE), R-squared (R²), and Root Mean Squared Error (RMSE) were used to evaluate model performance.

Prediction and Analysis
Once validated, the models were used to make predictions about future environmental conditions. For instance:

Flood Prediction: The model predicts the likelihood and potential severity of floods based on current and forecasted precipitation and river flow data.
Drought Prediction: The model estimates drought conditions by analyzing temperature trends, precipitation deficits, and soil moisture content.
Land Surface Temperature Prediction: The model forecasts temperature changes over time, helping to identify potential heatwaves or cooler periods.
Results and Applications
The predictions from these regression models provide valuable insights for policymakers, disaster management authorities, and agricultural planners. By anticipating floods and droughts, preventive measures can be implemented to mitigate their impacts. Additionally, understanding land surface temperature trends aids in climate change studies and urban planning.
## Data Source 
We gathered historical data from various sources, including meteorological records, hydrological data, and satellite imagery. This data includes variables such as:

- Precipitation levels
- Temperature records
- Soil moisture content
- River flow rates
- Land surface temperature
The data was preprocessed to handle missing values, normalize ranges, and ensure consistency across different datasets.

## Benefits

- **⚡ Quick Reaction and Effective Response**: Enables authorities and communities to act swiftly in the face of environmental disasters.
- **🍽️ Increased Food Security**: Reduces crop failures through informed decision-making.
- **💰 Economic Savings**: Minimizes economic losses in the agricultural sector.
- **🧘 Psychological Relief**: Reduces stress for farmers by providing reliable forecasts and warnings.
- **⏱️ Real-Time Detection**: Provides instant warnings for floods, cyclones, and droughts.
- **🔔 Customized Alerts**: Tailored recommendations and alerts based on individual farmer's conditions.

## Usage

1. **📝 Sign Up**: Create an account on the platform.
2. **⚙️ Set Preferences**: Customize alert preferences based on your location and farming conditions.
3. **📩 Receive Alerts**: Get real-time notifications for floods, cyclones, and droughts.
4. **📈 Access Data**: Utilize climate models and weather forecasts for informed decision-making.

