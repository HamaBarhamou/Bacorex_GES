from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from ressources.users import Users

app = Flask(__name__)
app.config['SECRET_KEY']='Th1s1ss3cr3t'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite://///home/michael/geekdemos/geekapp/library.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)
api = Api(app)

api.add_resource(Users, '/users', '/users/<string:user_id>')
if __name__ == '__main__':
    app.run(debug=True)