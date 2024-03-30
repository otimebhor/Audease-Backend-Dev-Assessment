# Audease-Backend-Dev-Assessment

A RESTful API for a simple blogging platform 

## Features 
* Uses TypeScript
* Basic postgres/sequelize model setup

## Quick Start
### Install Dependencies
* Install all package dependencies (one time operation)

```
npm install
```

* Set environment variables in a .env file

### Run it
```
npm run start
```
 or 
 ```
 npm start dev
 ```

### To start docker
```
docker-compose up --build
```

## Try it
* Set up your database connection

* Test endpoints with Postman

* To create a new user (POST request)

```
http://localhost:3000/api/auth/register
```

[CREATE User Endpoint](http://localhost:3000/api/auth/register)

Create new User (User Signup)
Request:  
HTTP Method: POST

``` 
 Endpoint: /api/auth/register  
 
  Request Body:  

        {
            "username" : "janey",
            "email": "janedoe@gmail.com",
            "password": "123456",
        }  
Response: HTTP Status Code: 201 Created  

    Response Body:  

         { 
        "id": 1,
        "username" : "janey",
        "email": "janedoe@gmail.com",
        "password": "123456"
     }
```
* To login a user (POST request)

```
http://localhost:3000/api/auth/login
```
[User Login Endpoint](http://localhost:3000/api/auth/login)

User Login
```
Request:   

    HTTP Method: POST    

    Endpoint: /api/auth/login  

    Request Body:  

        { 
            "username": "janey",
            "password": "123456",
        }  

    Response: HTTP Status Code: 200 OK  

    Response Body:  

         { 
        "id": 1,
        "username" : "janey",
        "password": Hashed Password
     }
```

* To create a new post (POST request)

```
http://localhost:3000/api/posts/create-post
```
[Post Creation Endpoint](http://localhost:3000/api/posts/create-post)

Create Post

```
Request:    

    HTTP Method: POST    

    Endpoint: /api/posts/create-post  

    Request Body:  

        { 
            "title": "Post Title",
            "content": "Post Content"
        }  

    Response: HTTP Status Code: 201 Created  

    Response Body:  

        { 
            "title": "Post Title",
            "content": "Post Content"
        }
```
* To read all posts (GET request)

```
http://localhost:3000/api/posts/
```

[Read all Posts Endpoint](http://localhost:3000/api/posts/)

Read all Posts

```
Request:   

    HTTP Method: GET  

    Endpoint: /api/posts/  

    Request Body:  

        { }  

    Response: HTTP Status Code: 200 OK  

    Response Body:  

        {
            {
            "id": 1
            "title": "Post Title",
            "content": "Post Content",
            "user_id": 2
            }, 
            {
            "id": 2
            "title": "Post Title",
            "content": "Post Content",
            "user_id": 1
            }
        }
```

* To read a single post (GET request)

```
http://localhost:3000/api/posts/{post_id}
```
[Read single Post Endpoint](http://localhost:3000/api/posts/{post_id})

Read Single Post

```
Request:  

    HTTP Method: GET  

    Endpoint: /api/posts/1  

    Request Body:  

        { }  

    Response: HTTP Status Code: 200 OK  

    Response Body:  

        {
           "id": 1
            "title": "Post Title",
            "content": "Post Content",
            "user_id": 2
        }
```

* To edit a single post (PATCH request)

```
http://localhost:3000/api/posts/edit-post/{post_id}
```

[Edit Post Endpoint](http://localhost:3000/api/posts/edit-post/{post_id})

Edit Single Post

```
Request:   

    HTTP Method: PATCH  

    Endpoint: /api/posts/edit-post/1  

    Request Body:  

        {
            "title": "Updated title",
            "content": "Updated content!"
        }   

    Response: HTTP Status Code: 200 OK  

    Response Body:  

        {
           "id": 1
            "title": "Updated title",
            "content": "Updated title",
            "user_id": 2
            }
```

* To delete a single post (DELETE request)

```
http://localhost:3000/api/posts/{post_id}
```

[Delete Post Endpoint](http://localhost:3000/api/posts/{post_id})

Delete Single Post

```
Request:    

    HTTP Method: DELETE  

    Endpoint: /api/posts/1  

    Request Body:  

        { }  

    Response: HTTP Status Code: 200 OK  

    Response Body:  

        {
            "message" : "Post deleted successfully."
        }
```








