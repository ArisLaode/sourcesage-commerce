# Project Background
This Project about show list all products, create a product, create a variant under a product and view a product and its variants..

# How to use
* Update environtment api-ecommerce. Change ```.env-example``` to ```.env```

* Running project:
    ```bash
        docker-compose up
    ```

* Check frontend app at url http://localhost:1112/

* Note : 
    - Check your API app:
        - import collection api at your Postman. Add ../collection-api/Commerce.postman_collection.json.
        - if you change your code and you must remove all container deploy: 
            ```bash
                docker-compose down --volumes --rmi all
            ```

# Contact
For any problem contact the Engineer.