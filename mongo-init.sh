#!/bin/bash

echo "Creating users..."

mongo admin --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db = db.getSiblingDB('mydatabase'); db.createUser({ user: '$MONGO_USER', pwd: '$MONGO_PASSWORD', roles: [{ role: 'readWrite', db: 'mydatabase' }] });"

echo "Users created."
