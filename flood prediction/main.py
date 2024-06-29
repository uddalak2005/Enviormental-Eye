import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

# Load your data
df = pd.read_csv('kerala.csv')

# Print the column names to check for the correct name
print(df.columns)

# Feature engineering (example: cumulative rainfall)
df['cumulative_rainfall'] = df.rolling(window=3, min_periods=1)[' ANNUAL RAINFALL'].sum()

# Prepare data
X = df[['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'cumulative_rainfall']]
y = df['FLOODS']  # Convert to numerical (1 for YES, 0 for NO)

# Scale the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Train a logistic regression model with increased max_iter
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Make predictions on the test set100000
y_pred = model.predict(X_test)

# Evaluate model accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f'Model accuracy: {accuracy:.2f}')
def predict_flood():
    
    print("Please enter the monthly rainfall data:")
    jan = float(input("January: "))
    feb = float(input("February: "))
    mar = float(input("March: "))
    apr = float(input("April: "))
    may = float(input("May: "))
    jun = float(input("June: "))
    jul = float(input("July: "))
    aug = float(input("August: "))
    sep = float(input("September: "))
    octo = float(input("October: "))
    nov = float(input("November: "))
    dec = float(input("December: "))
    
    # Calculate cumulative rainfall
    cumulative_rainfall = jan + feb + mar + apr + may + jun + jul + aug + sep + octo + nov + dec

    # Create a DataFrame for the input data
    input_data = pd.DataFrame([[19.8,7,25.3,205.9,134.8,619.2,832.7,291,414.7,240.1,184.3,56.4,3031.1]],
                              columns=['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'cumulative_rainfall'])
    
    # Scale the input data
    input_scaled = scaler.transform(input_data)
    
    # Make prediction
    prediction = model.predict(input_scaled)
    
    # Output the prediction
    if prediction[0] == 1:
        print("There will be a flood.")
    else:
        print("There will not be a flood.")

# Run the function to take user input and predict flood
predict_flood()


