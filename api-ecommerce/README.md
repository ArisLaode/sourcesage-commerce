# Documentation
* Create environment
    ```bash
    pip install virtualenv
    ```
    ```bash
    virtualenv -p python3 env
    ```
* Active environment:
    ```bash
        source env/bin/activate
    ```

* Install all package needed
    ```bash
        pip install -r requirements.txt
    ```
* Setup environment flask
    ```bash
        DB_HOST=localhost
        DB_USERNAME=your-db-username
        DB_PASSWORD=your-db-password
        DB_NAME=your-db-name
    ```

* Setup & Migrate Database 
  - create your database. In this project my database name : ecommerce 
  - export environment flaskk app 
    ```bash
        export FLASK_APP=main.py
    ```
  - create a migration repository
    ```bash
        flask db init
    ```
  - generate migration
    ```bash
        flask db migrate
    ```
  - Migrate script to your database
      ```bash
        flask db upgrade
    ```
* Running API
    -   Running app :
        ```bash
            bash boot.sh
        ```
    - Check your api at url http://127.0.0.1:8082

* Running via Docker
    - create docker image:
        ```bash
            docker build --tag api-commerce .
        ```

    - create docker container:
        ```bash
            docker run -d -p 8083:8080 --name api-commerce-app api-commerce
        ```

    - Check your api at url http://127.0.0.1:8083