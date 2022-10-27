import resource
from flask_restful import Resource
from flask import Flask, request, jsonify, make_response
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import jwt
import datetime
from functools import wraps
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SECRET_KEY']='Th1s1ss3cr3t'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite://///home/michael/geekdemos/geekapp/library.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)

class Users(Resource):
    def get(self, user_id=None):
        if user_id is None:
            return {'users': 'Say Hello, World! users:'}
        else:
            return {'users': 'Say Hello, World! users: {}'.format(user_id)}
    def post(self):
        pass