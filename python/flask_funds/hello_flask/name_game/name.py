from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def welcome():
  return render_template('index.html')

@app.route('/process', methods=['POST'])
def get_name():
    print "ACCEPTED"

    name = request.form['name']
    return redirect('/')


app.run(debug=True)  