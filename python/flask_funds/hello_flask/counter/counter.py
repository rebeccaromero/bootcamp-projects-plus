from flask import Flask, render_template, request, redirect,session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')

def index():
    session['count'] += 1
    return render_template("index.html")

@app.route('/addTwo', methods=['post'])
def doubleAdd():
    session['count'] += 1
    return redirect('/')

@app.route('/reset', methods=['post'])
def reset():
    session['count'] = 0
    return redirect ('/')
    


app.run(debug=True)