#!/bin/bash

# Set the URL and JSON data
URL="http://localhost:3000/todos/2"
JSON_DATA='{"done": false, "title": "pie", "description": "buy apple pie"}'

# Send the POST request using curl
curl -X PATCH "$URL" \
-H "Content-Type: application/json" \
-d "$JSON_DATA"
