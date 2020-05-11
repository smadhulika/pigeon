 # Explanation

This sample project illustrates the use of Upload Api (accepts all types of file) as well as delete and retrieve files.

Use prod env when deploying the app and ensure the application is running as intended after deployed. Please provide dockerfile/docker-compose file.

## Upload file

Method: POST

http://localhost:8080/api/v1/upload

## Delete file

Method: DELETE

http://localhost:8080/api/v1/upload/filename

## Retrieve file

Method: GET

http://localhost:8080/api/v1/retrieve/filename
