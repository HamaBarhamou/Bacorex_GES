#!/usr/bin/python3
""" holds class User"""
from email.policy import default
from xmlrpc.client import Boolean
import models
from models.base_model import BaseModel, Base
from os import getenv
import sqlalchemy
from sqlalchemy import Column, String
from sqlalchemy.orm import relationship


class User(BaseModel, Base):
    """Representation of a user """
    __tablename__ = 'users'
    email = Column(String(128), nullable=False)
    password = Column(String(128), nullable=False)
    first_name = Column(String(128), nullable=True)
    last_name = Column(String(128), nullable=True)
    fonction = Column(String(128), nullable=True)
    token = Column(String(300), nullable=True)
    approval_service_head = Column(Boolean, default=False)
    department_head_approval = Column(Boolean, default=False)
    ceo_approval = Column(Boolean, default=False)
    """places = relationship("Place", backref="user")
    reviews = relationship("Review", backref="user")"""


    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)
