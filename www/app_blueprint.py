from flask import Blueprint , render_template

app_blueprint = Blueprint('app_blueprint', __name__)

@app_blueprint.route('/')
def sign_up():
    return render_template('sign_up.html')

@app_blueprint.route('/log_in')
def Log_In():
    return render_template('Log_In.html')

@app_blueprint.route('/homepage')
def homepage():
    return render_template('homepage.html')

@app_blueprint.route('/homepage/about')
def about():
    return render_template('about.html')

@app_blueprint.route('/homepage/prvt_msr')
def prvt_msr():
    return render_template('prvt_msr.html')

@app_blueprint.route('/homepage/prvt_msr/crop_cultivation')
def Crop_Cultivation():
    return render_template('Crop_Cultivation.html')



