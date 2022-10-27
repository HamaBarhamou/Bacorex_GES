#!/usr/bin/python3
"""
Contains the class DBStorage
"""

import models
from models.base_model import BaseModel, Base
from models.Dao import Dao
from os import getenv
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

classes = {"Dao": Dao}


class DBStorage:
    """interaacts with the MySQL database"""
    __engine = None
    __session = None

    def __init__(self):
        """Instantiate a DBStorage object"""
        BACOREX_MYSQL_USER = getenv('BACOREX_MYSQL_USER')
        BACOREX_MYSQL_PWD = getenv('BACOREX_MYSQL_PWD')
        BACOREX_MYSQL_HOST = getenv('BACOREX_MYSQL_HOST')
        BACOREX_MYSQL_DB = getenv('BACOREX_MYSQL_DB')
        BACOREX_ENV = getenv('BACOREX_ENV')
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.
                                      format(BACOREX_MYSQL_USER,
                                             BACOREX_MYSQL_PWD,
                                             BACOREX_MYSQL_DB,
                                             BACOREX_ENV))
        if BACOREX_ENV == "test":
            Base.metadata.drop_all(self.__engine)

    def all(self, cls=None):
        """query on the current database session"""
        new_dict = {}
        for clss in classes:
            if cls is None or cls is classes[clss] or cls is clss:
                objs = self.__session.query(classes[clss]).all()
                for obj in objs:
                    key = obj.__class__.__name__ + '.' + obj.id
                    new_dict[key] = obj
        return (new_dict)

    def new(self, obj):
        """add the object to the current database session"""
        self.__session.add(obj)

    def save(self):
        """commit all changes of the current database session"""
        self.__session.commit()

    def delete(self, obj=None):
        """delete from the current database session obj if not None"""
        if obj is not None:
            self.__session.delete(obj)

    def reload(self):
        """reloads data from the database"""
        Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.__session = Session

    def close(self):
        """call remove() method on the private session attribute"""
        self.__session.remove()

    def get(self, cls, id):
        """ Returns the object based on the class and its ID,
            or None if not found
        """
        object_all = self.all()
        classe = str(cls).split('.')[2]
        classe = classe[0:len(classe) - 2]
        ob_id = classe + '.' + id
        if ob_id in object_all:
            return (object_all[ob_id])
        else:
            return None

    def count(self, cls=None):
        """
            Returns the number of objects in storage matching the given class.
            If no class is passed, returns the count of all objects in storage
        """
        object_all = self.all()
        if cls is None:
            return (len(object_all))

        classe = str(cls).split('.')[2]
        classe = classe[0:len(classe) - 2]
        cpt = 0
        for loop in object_all:
            if classe in loop:
                cpt += 1
        return cpt