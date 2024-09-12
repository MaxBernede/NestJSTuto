#!/bin/bash

# Set the URL and JSON data
URL="http://localhost:3000/todos"
JSON_DATA='{"id":4, "title": "Test", "description": "nimp", "done": false}'

# Send the POST request using curl
curl -X POST "$URL" \
-H "Content-Type: application/json" \
-d "$JSON_DATA"
