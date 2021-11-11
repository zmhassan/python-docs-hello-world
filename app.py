"""Main method"""
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    """
    Hello function
    """
    return "Hello, World!"
