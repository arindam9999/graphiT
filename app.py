from flask import Flask,render_template,request, session, redirect, jsonify
app = Flask(__name__)
app.secret_key = "HI"





@app.route('/')
def login():
    return render_template('index.html')


app.run(debug=True,host='localhost', port=8000)