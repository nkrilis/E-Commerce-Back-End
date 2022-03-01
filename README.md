
  # E-Commerce-Back-End

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  
  This is an application that uses `sequilize`, `express`, and `mysql` in order to create and manage products for an E-Commerce web application. Through the use of these dependencies I have created four tables to organize the data (Category, Product, ProductTag, and Tag). I then seeded the tables with some data to show the functionallity of the application. This application does not generate a website to view the products, it is solely the back end for data management. The user has the ability to add new rows, update an existing row, and delete an exiting row from each table independtly. The realtionships between each table have been defined so that when a user creates a new row it will link correctly through `foreign key` properties. Below you can find a video walk through of the application.
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#how-to-contribute)
  - [Tests](#tests)
  - [Qyestions](#questions)
  - [License](#license)
  
  ## Installation
  In order to install the project you must first clone this repo to your local machine. Once cloned you can run `npm install` to install all the necessary dependencies to run the application. You must also initialize the database through the database `schema.sql` file. To do this run `mysql -u root -p` and enter your password when prompted. From the main directory of the application, in the `mysql` enviornment run `source ./db/schema.sql` this will create the database for the application. 
  ## Usage
  Once the installation process is complete you should now create a `.env` file in the main directory of the application and include three variables: `DB_USER= your mysql user name`, `DB_PW= your mysql password`, and `DB_NAME=ecommerce_db` these are the rquired variables that allows the application to connect to the `mysql` database. After this is completed you can run `npm start` to initialize the database with the tables defined by the `sequilize` model classes. Quit the instance of the application run and run `node ./seeds/index.js` from the main directory in order to seed the database with sample data. You can now run the application again through `npm start` and test the get, post, put, and delete routes through insomnia or any other route testing application. You can view the available urls below.

1. Tag Routes
    - `GET: http://localhost:3001/api/tags`
        - Returns json objects of all tags
    - `GET: http://localhost:3001/api/tags/9`
        - Returns a specific tag by its id
    - `POST: http://localhost:3001/api/tags`
        - Creates a new tag. Expects a json object like...
        ```json
        {
	        "tag_name": "anything"
        }
        ```
    - `PUT: http://localhost:3001/api/tags/21`
        - Updates an existing tag by id. Expects a json object like...
        ```json
        {
	        "tag_name": "anything"
        }
        ```
    - `DELETE: http://localhost:3001/api/tags/21`
        - Deletes a specific tag by id

2. Product Routes
    - `GET: http://localhost:3001/api/products`
        - Returns json objects of all products
    - `GET: http://localhost:3001/api/products/9`
        - Returns a specific product by its id
    - `POST: http://localhost:3001/api/products`
        - Creates a new product. Expects a json object like...
        ```json
        {
	        "tag_name": "anything"
        }
        ```
    - `PUT: http://localhost:3001/api/products/21`
        - Updates an existing product by id. Expects a json object like...
        ```json
        {
	        "product_name": "anything",
            "price": 200.00,
            "stock": 3,
            "tagIds": [1, 2, 3, 9]
        }
        ```
    - `DELETE: http://localhost:3001/api/products/21`
        - Deletes a specific product by id

3. Category Routes
    - `GET: http://localhost:3001/api/categories`
        - Returns json objects of all categories
    - `GET: http://localhost:3001/api/categories/9`
        - Returns a specific category by its id
    - `POST: http://localhost:3001/api/categories`
        - Creates a new category. Expects a json object like...
        ```json
        {
	        "tag_name": "anything"
        }
        ```
    - `PUT: http://localhost:3001/api/categories/21`
        - Updates an existing category by id. Expects a json object like...
        ```json
        {
	        "category_name": "anything"
        }
        ```
    - `DELETE: http://localhost:3001/api/categories/21`
        - Deletes a specific category by id

  ## How to Contribute
  This application is solely created by Nicholas Krilis. If you would like to make changes to this project please fork the repo and submit your changes via a pull request. I will take a look and if all looks good I will merge, Thank you!
  ## Tests
  There are no testing suites associated with this project.
  ## Questions
  [Here you can view my Github Account](https://github.com/nkrilis)

  If you have any questions or would like to reach me you can contact me at [n.krilis@gmail.com](mailto:n.krilis@gmail.com?subject=[GitHub]%20Source%20Han%20Sans)

  ## License

    Copyright 2022 Nicholas Krilis

    Permission is hereby granted, free of charge, to any person obtaining a copy of 
    this software and associated documentation files (the "Software"), to deal in the 
    Software without restriction, including without limitation the rights to use, 
    copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
    and to permit persons to whom the Software is furnished to do so, subject 
    to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies 
    or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
    FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
  