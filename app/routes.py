from flask import render_template

from app import app
from app.forms import LoginForm

@app.route('/', methods=['GET'])
def index():
	return render_template('public_landing.html')
