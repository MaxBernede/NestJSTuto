#!/bin/bash

# Set the URL and JSON data
URL="http://localhost:3000/todos/2"

# Send the POST request using curl
curl -X DELETE "$URL"
