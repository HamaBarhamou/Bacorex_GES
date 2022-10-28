#!/usr/bin/python3
""" holds class User"""
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String, DATE
from sqlalchemy.orm import relationship

class Dao(BaseModel, Base):
    """Representation of a user """
    __tablename__ = 'dao'
    name = Column(String(128), nullable=True)
    fonction = Column(String(128), nullable=True)
    date_submited = Column(String(128), nullable=True)
    """places = relationship("Place", backref="user")
    reviews = relationship("Review", backref="user")"""


    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)