from flask import Flask

from flask_restful import Api
from ressources.users import Users
from ressources.users import app

app = Flask(__name__)
api = Api(app)

api.add_resource(Users, '/users', '/users/<string:user_id>')
if __name__ == '__main__':
    app.run(debug=True)