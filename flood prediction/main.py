import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

df = pd.read_csv('uttrakhand.csv')


print(df.columns)

df['cumulative_rainfall'] = df.rolling(window=3, min_periods=1)[' ANNUAL RAINFALL'].sum()

X = df[['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'cumulative_rainfall']]
y = df['FLOODS']  

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

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
    
    cumulative_rainfall = jan + feb + mar + apr + may + jun + jul + aug + sep + octo + nov + dec

    # Create a DataFrame for the input data
    input_data = pd.DataFrame([[jan,feb,mar,apr,may,jun,jul,aug,sep,octo,nov,dec,cumulative_rainfall]],
                              columns=['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'cumulative_rainfall'])
    
    input_scaled = scaler.transform(input_data)
    
    prediction = model.predict(input_scaled)
    
    if prediction[0] == 1:
        print("There will be a flood.")
    else:
        print("There will not be a flood.")

predict_flood()


