from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('index.html')


@app.route('/ninjas')
def allninjas():
    return render_template('ninjas.html')

@app.route('/ninjas/<color>')
def ninjaorange(color):
    if color == 'orange':
        return render_template('orange.html')
    if color == 'blue':
        return render_template('blue.html')
    if color == 'red':
        return render_template('red.html')
    if color == 'purple':
        return render_template('purple.html')
    else:
        return render_template('april.html')

app.run(debug=True)  