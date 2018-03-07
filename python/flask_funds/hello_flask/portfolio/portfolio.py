from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')

def welcome():
  return render_template('portfolio.html')

@app.route('/projects')
def projects():
  return render_template('port_projects.html')

@app.route('/about')
def about():
  return render_template('port_about.html')

app.run(debug=True)    