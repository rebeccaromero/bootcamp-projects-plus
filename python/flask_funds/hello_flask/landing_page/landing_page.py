from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def welcome():
  return render_template('index.html')

@app.route('/ninjas')
def projects():
  return render_template('ninjas.html')

@app.route('/dojos')
def about():
  return render_template('dojos.html')

app.run(debug=True)    