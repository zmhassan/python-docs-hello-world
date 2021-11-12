"""Main method"""
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
    """
    Hello function
    """
    return render_template("index.html",flask_token="Testing")
    #    return "Testing, 1 2 3 World!"
