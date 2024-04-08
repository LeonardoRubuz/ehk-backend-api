# API de EHK Mobile

Ceci est la documentation minimale pour l'utilisation de l'API REST de .



## Installation

    npm install

## Lancement de l'application

    npm run dev



# Ressources 

- Utilisateurs : 
- Propriétés
- Adresses

## Utilisateurs
## Récupérer la liste de tous les utilisateurs

### Requête

`GET /users/`

    URL :  http://localhost:3001/users/
    Body :  None

### Réponse

    Status : 200 OK
    Body : 
    [
      {
        "id": 1,
        "firstname": "Leonardo",
        "middlename": null,
        "lastname": "Rubuz",
        "email": "rubuzleonardo@gmail.com",
        "password": "$2b$15$GJJ.pGR09a0E00ZVuh6/HObf3cFwF012gGTv6lc5B7zefs0YpbOia",
        "phone": null,
        "gender": "Masculine",
        "role": "Admin"
      },
      {
        "id": 2,
        "firstname": "Maria",
        "middlename": null,
        "lastname": "Nshid",
        "email": "nikki-chan@gmail.com",
        "password": "$2b$15$yGJaW5nZV7ZR/6kBN3o4cuPXu/wHCBBBMgfVZ0QJXR2uWH7gsFWd2",
        "phone": null,
        "gender": "Feminine",
        "role": "Public"
      }
    ]

## Créer un nouvel utilisateur

### Requête

`POST /users/`

    URL :  http://localhost:3001/users
    Body : {
              "firstname" : "John",
              "lastname" : "Doe",
              "email" : "johndoe@example.com",
              "password" : "12345678",
              "gender" : "Masculine"
            }
    

### Réponse

    Status : 201 OK
    Body : "User created successfully"

## Récupérer un utilisateur

### Requête

`GET /users/id`

    URL : http://localhost:3001/users/1

### Réponse

    Status : 200 OK
    Body : {
              "id": 1,
              "firstname": "John",
              "middlename": null,
              "lastname": "Doe",
              "email": "johndoe@example.com",
              "password": "$2b$15$GJJ.pGR09a0E00ZVuh6/HObf3cFwF012gGTv6lc5B7zefs0YpbOia",
              "phone": null,
              "gender": "Masculine",
              "role": "Public"
            }

## Récupérer un utilisateur inexistant

### Requête

`GET /users/id`

    URL : http://localhost:3001/users/9999

### Réponse

    Status : 404 Not Found
    Body : "No user found"

## Modifier un utilisateur

### Requête

`PUT /users/id`

    URL : http://localhost:3001/users/1
    Body : {
            "email" : "changedmail@email.com"
        }
### Réponse

    Status : 200 OK
    Body : "Updated successfully"

## Supprimer un utilisateur

### Requête

`DELETE /users/id`

    URL : http://localhost:3001/users/1

### Réponse

    Status : 200 OK
    Body : "Deleted successfully"

## Get list of Things again

### Requête

`GET /thing/`

    URL : http://localhost:3001/thing/

### Réponse

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 74

    [{"id":1,"name":"Foo","status":"new"},{"id":2,"name":"Bar","status":null}]

## Change a Thing's state

### Requête

`PUT /thing/:id/status/changed`

    URL : -X PUT http://localhost:3001/thing/1/status/changed

### Réponse

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"name":"Foo","status":"changed"}

## Get changed Thing

### Requête

`GET /thing/id`

    URL : http://localhost:3001/thing/1

### Réponse

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"name":"Foo","status":"changed"}

## Change a Thing

### Requête

`PUT /thing/:id`

    URL : -X PUT -d 'name=Foo&status=changed2' http://localhost:3001/thing/1

### Réponse

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed2"}

## Attempt to change a Thing using partial params

### Requête

`PUT /thing/:id`

    URL : -X PUT -d 'status=changed3' http://localhost:3001/thing/1

### Réponse

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed3"}

## Attempt to change a Thing using invalid params

### Requête

`PUT /thing/:id`

    URL : -X PUT -d 'id=99&status=changed4' http://localhost:3001/thing/1

### Réponse

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed4"}

## Change a Thing using the _method hack

### Requête

`POST /thing/:id?_method=POST`

    URL : -X POST -d 'name=Baz&_method=PUT' http://localhost:3001/thing/1

### Réponse

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Baz","status":"changed4"}

## Change a Thing using the _method hack in the url

### Requête

`POST /thing/:id?_method=POST`

    URL : -X POST -d 'name=Qux' http://localhost:3001/thing/1?_method=PUT

### Réponse

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: text/html;charset=utf-8
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing

### Requête

`DELETE /thing/id`

    URL : -X DELETE http://localhost:3001/thing/1/

### Réponse

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close


## Try to delete same Thing again

### Requête

`DELETE /thing/id`

    URL : -X DELETE http://localhost:3001/thing/1/

### Réponse

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Get deleted Thing

### Requête

`GET /thing/1`

    URL : http://localhost:3001/thing/1

### Réponse

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing using the _method hack

### Requête

`DELETE /thing/id`

    URL : -X POST -d'_method=DELETE' http://localhost:3001/thing/2/

### Réponse

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 204 No Content
    Connection: close