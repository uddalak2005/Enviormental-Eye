from flask import Blueprint , render_template
from datetime import date, datetime
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import warnings
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler


app_blueprint = Blueprint('app_blueprint', __name__)

@app_blueprint.route('/')
def sign_up():
    return render_template('sign_up.html')

@app_blueprint.route('/log_in')
def Log_In():
    return render_template('Log_In.html')

@app_blueprint.route('/homepage')
def homepage():
    
    def flood():
        df = pd.read_csv('kerala.csv')


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
            # jan = float(input("January: "))
            # feb = float(input("February: "))
            # mar = float(input("March: "))
            # apr = float(input("April: "))
            # may = float(input("May: "))
            # jun = float(input("June: "))
            # jul = float(input("July: "))
            # aug = float(input("August: "))
            # sep = float(input("September: "))
            # octo = float(input("October: "))
            # nov = float(input("November: "))
            # dec = float(input("December: "))
            
            # cumulative_rainfall = jan + feb + mar + apr + may + jun + jul + aug + sep + octo + nov + dec

            # Create a DataFrame for the input data
            input_data = pd.DataFrame([[100,23,4352,23,121,3,23,2,3,123,23,238,23423]],
                                    columns=['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'cumulative_rainfall'])
            
            input_scaled = scaler.transform(input_data)
            
            prediction = model.predict(input_scaled)
            
            if prediction[0] == 1:
                return 1
            else:
                return 0

        a=predict_flood()
        return a 
    b = flood()
    print(b)

        




    def lst():
        warnings.filterwarnings("ignore", category=FutureWarning, module='sklearn.metrics')


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

        # Uncomment to inspect the data
        # print(data.head())

        if data.apply(lambda x: x.map(lambda y: isinstance(y, (int, float))).all()).all():
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
            return predicted_lst[0]
        else:
            print("Non-numeric data found in the CSV file. Please clean the data and try again.")
        # print(get_season(date.today()))
    Y = 2000 # dummy leap year to allow input X-02-29 (leap day)
    seasons = [('winter', (date(Y,  1,  1),  date(Y,  3, 20))),
           ('spring', (date(Y,  3, 21),  date(Y,  6, 20))),
           ('summer', (date(Y,  6, 21),  date(Y,  9, 22))),
           ('autumn', (date(Y,  9, 23),  date(Y, 12, 20))),
           ('winter', (date(Y, 12, 21),  date(Y, 12, 31)))]

    def get_season(now):
        if isinstance(now, datetime):
            now = now.date()
        now = now.replace(year=Y)
        return next(season for season, (start, end) in seasons
                    if start <= now <= end)
    if b == 1:
        return render_template('homepage.html', current_season = get_season(date.today()),lst=lst(), flood = "THERE ARE HEAVY CHANCES OF FLOOD")
    else:
        return render_template('homepage.html', current_season = get_season(date.today()),lst=lst(), flood = "THERE ARE NO CHANCES OF FLOOD")

@app_blueprint.route('/homepage/about')
def about():
    return render_template('about.html')

@app_blueprint.route('/homepage/prvt_msr')
def prvt_msr():
    return render_template('prvt_msr.html')

@app_blueprint.route('/homepage/prvt_msr/crop_cultivation')
def Crop_Cultivation():
    return render_template('Crop_Cultivation.html')



