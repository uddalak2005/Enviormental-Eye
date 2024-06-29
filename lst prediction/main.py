import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

try:
    data = pd.read_csv("data.csv")
except pd.errors.ParserError:
    data = pd.read_csv("data.csv", header=None)

column_names = [
    "LST_2024Ex",
    "LST_2014Ex",
    "LST_2005Ex",
    "NDVI_2024Ex",
    "NDVI_2014Ex",
    "NDVI_2004Ex",
    "UI_2024Ex",
    "UI_2014Ex",
    "UI_2004Ex",
    "Normalised_PD_2024",
    "Normalised_PD_2014",
    "Normalised_PD_2004",
    "Normalised_Nonbuiltup_road_2024",
    "Distance_to_Nonbuiltup_CBD",
]

if data.shape[1] == len(column_names):
    data.columns = column_names
else:
    print("The CSV file does not match the expected format.")
    print("Data columns:", data.columns)


# print(data.head())


if data.applymap(lambda x: isinstance(x, (int, float))).all().all():
    
    X = data.drop("LST_2024Ex", axis=1)
    y = data["LST_2024Ex"]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LinearRegression()

    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)

    rmse = mean_squared_error(y_test, y_pred, squared=False)
    print(f"Error or loss func: {rmse}")

   
    new_data = pd.DataFrame(
        [[
            42.371, 46.153, 0.286, 0.251, 0.304, -0.032, 0.068, 0.045, 0.695, 0.601, 0.608, 0.567, 0.570
        ]],
        columns=column_names[1:],
    )

    predicted_lst = model.predict(new_data)
    print(f"Predicted LST: {predicted_lst[0]}")
else:
    print("Non-numeric data found in the CSV file. Please clean the data and try again.")
