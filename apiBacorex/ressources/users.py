from flask_restful import Resource

class Users(Resource):
    def get(self):
        return {'users': 'Say "Hello, World! users"'}
    def post(self):
        pass