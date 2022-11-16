# Project Background
This Project about show list all products, create a product, create a variant under a product and view a product and its variants..


# Prequirement:
    - Python version 3.8.10
    - node version 18.11.0
    - Flask version 2.0.1
    - antd version 4.24.1
    - Docker version 20.10.12
    - MySQL version 8.0.31

# How to use
* Update environtment api-ecommerce. Change ```api-ecommerce/.env-example``` to ```api-ecommerce/.env```

* deactive baseUrl for local environtment in ```../src/utils/Config.js``` :
    ```bash
    // const baseUrl = "http://127.0.0.1:8082"
    ```

* Running project:
    ```bash
        docker-compose up
    ```
* Check API app at url http://127.0.0.1:5000

* Check frontend app at url http://127.0.0.1:1112

* Note : 
    - Check your API app:
        - import collection api at your Postman. Add ../collection-api/Commerce.postman_collection.json.
        - if you change your code and you must remove all container deploy: 
            ```bash
                docker-compose down --volumes --rmi all
            ```