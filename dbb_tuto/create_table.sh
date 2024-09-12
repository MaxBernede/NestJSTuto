#!/bin/bash

# Charger les variables depuis le fichier .env
export $(grep -v '^#' .env | xargs)

# Se connecter à PostgreSQL et créer la table
psql -U $DB_USER -d $DB_NAME -h $DB_HOST -p $DB_PORT -c "
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);"
