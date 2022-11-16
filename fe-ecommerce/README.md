# Documentation
service api to get logging by day and monthly from elasticsearch central-logging

Prequirement:
- NodeJS version 18.11.0
- Docker version 20.10.7
- antd version 4.24.1

Running project via bash script:

* Install packages:

    ```bash
    npm install
    ```

* Running project:

    ```bash
    npm start
    ```
* Open http://127.0.0.1:3000 to check it.

* Running via Docker:
    - Create docker image:
        ```bash
            docker build --tag fe-commerce .
        ```

    - Create docker container:
        ```bash
            docker run -d -p 3005:3000 --name fe-commerce-app fe-commerce
        ```
    - Open http://127.0.0.1:3005 to check it.