import sqlite3
from flask import Flask, request, g

# Run flask run to start the server
app = Flask(__name__)


DATABASE = 'database.db'


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/')
def index():
    return 'Hello World!'


@app.route('/users', methods=['POST'])
def create_user():
    db = get_db()
    cursor = db.cursor()

    # Get user data from request
    username = request.form['username']
    password = request.form['password']

    # Insert user into database
    cursor.execute(
        'INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
    db.commit()

    return 'User created successfully!'


@app.route('/login', methods=['POST'])
def login():
    db = get_db()
    cursor = db.cursor()

    # Get user data from request
    username = request.form['username']
    password = request.form['password']

    # Check if username and password are correct
    cursor.execute(
        'SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    user = cursor.fetchone()

    if user is not None:
        return 'Login successful!'
    else:
        return 'Invalid username or password'
