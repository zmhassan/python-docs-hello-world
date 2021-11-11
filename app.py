"""Main method"""
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    """
    Hello function
    """
    return "Testing, 1 2 3 World!"
