from flask import Flask

# Run flask run to start the server
app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello World!'
