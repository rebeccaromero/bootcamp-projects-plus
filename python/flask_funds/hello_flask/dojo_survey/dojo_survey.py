from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('index.html')


@app.route('/result', methods=['POST'])
def get_name():
    print 'ACCEPTED'

    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']

    return render_template('result.html', name=request.form['name'], location=request.form['location'], language=request.form['language'], comment=request.form['comment'])

app.run(debug=True)  