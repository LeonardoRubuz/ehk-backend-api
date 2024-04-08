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

    Status : 201 Created
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


## Propriétés
## Récupérer la liste de toutes  les propriétés

### Requête

`GET /properties/`

    URL : http://localhost:3001/properties/

### Réponse

    Status : 200 OK
    Body: [
          {
            "id": "e20a4c13-3694-4f5c-91a1-2e7389541bc4",
            "size": 90,
            "salePrice": 400,
            "rentPrice": 100,
            "userEmail": "rubuzleonardo@gmail.com",
            "addressId": 1,
            "type": "Apartment",
            "tag": "onSale"
          },
          {
            "id": "6d726d4a-57dc-44fc-96ba-b4c9710a2a31",
            "size": 70,
            "salePrice": 90,
            "rentPrice": null,
            "userEmail": "rubuzleonardo@gmail.com",
            "addressId": 3,
            "type": "Apartment",
            "tag": "onSale"
          },
          {
            "id": "58b94b51-d4ad-44d4-9895-5797f05fb615",
            "size": 700,
            "salePrice": 90,
            "rentPrice": null,
            "userEmail": "nikki-chan@gmail.com",
            "addressId": 4,
            "type": "Apartment",
            "tag": "onSale"
          }
        ]


## Récupérer la liste de propriétés selon un utilisateur

### Requête

`GET /properties/filter/email`

    URL : http://localhost:3001/properties/rubuzleonardo@gmail.com

### Réponse

    Status : 200 OK
    Body: [
              {
                "id": "e20a4c13-3694-4f5c-91a1-2e7389541bc4",
                "size": 90,
                "salePrice": 400,
                "rentPrice": 100,
                "userEmail": "rubuzleonardo@gmail.com",
                "addressId": 1,
                "type": "Apartment",
                "tag": "onSale"
              },
              {
                "id": "6d726d4a-57dc-44fc-96ba-b4c9710a2a31",
                "size": 70,
                "salePrice": 90,
                "rentPrice": null,
                "userEmail": "rubuzleonardo@gmail.com",
                "addressId": 3,
                "type": "Apartment",
                "tag": "onSale"
              }
            ]

## Créer une propriété

### Requête

`POST /properties`

    URL : http://localhost:3001/properties
    Body : {
              "size" : 700,
              "salePrice" : 90,
              "owner" : "nikki-chan@gmail.com",
              "type" : "Apartment",
              "tag" : "onSale",
              "address" : {
                "street" : "Poudlard",
                "number" : 1,
                "neighborhood" : "Quartier 1",
                "commune" : "N'djili",
                "city" : "Kinshasa"
              }
        }

### Réponse

    Status : 201 Created
    Body : "Property successfully created"

## Récupérer une propriété par son identifiant

### Requête

`GET /properties/id`

    URL : http://localhost:3001/properties/e20a4c13-3694-4f5c-91a1-2e7389541bc4

### Réponse

    Status : 200 OK
    Body : {
          "id": "e20a4c13-3694-4f5c-91a1-2e7389541bc4",
          "size": 90,
          "salePrice": 400,
          "rentPrice": 100,
          "userEmail": "rubuzleonardo@gmail.com",
          "addressId": 1,
          "type": "Apartment",
          "tag": "onSale"
        }

## Récupérer une propriété inexistante

### Requête

`GET /properties/id`

    URL : http://localhost:3001/properties/e20a4c13-3694

### Réponse

    Status : 404 Not Found
    Body : "No property found"

## Modifier une propriété

### Requête

`PUT /properties/id`

    URL : http://localhost:3001/properties/e20a4c13-3694-4f5c-91a1-2e7389541bc4
    Body : {
              "salePrice" : 400,
              "tag" : "onSale"
            }

### Réponse

    Status : 200 OK
    Body : "The property has been updated"

## Supprimer une propriété

### Requête

`DELETE /properties/id`

    URL : http://localhost:3001/properties/4c154aff-8e89-4130-be92-e497d4571c64

### Réponse

    Status: 200 OK
    Body : "The property has been deleted"



## Adresses
## Récupérer la liste de toutes  les adresses

### Requête

`GET /addresses/`

    URL : http://localhost:3001/addresses/

### Réponse

    Status : 200 OK
    Body: [
              {
                "id": 1,
                "street": "Colonel Mpia",
                "number": 9,
                "neighborhood": "Joli Parc",
                "commune": "Ngaliema",
                "city": "Kinshasa"
              },
              {
                "id": 2,
                "street": "Nzilo",
                "number": 26,
                "neighborhood": "CPA",
                "commune": "Mont-Ngafula",
                "city": "Kinshasa"
              }
        ]


## Récupérer la liste d'adresses selon un utilisateur

### Requête

`GET /addresses/filter/email`

    URL : http://localhost:3001/addresses/rubuzleonardo@gmail.com

### Réponse

    Status : 200 OK
    Body: [
              {
                "id": 1,
                "street": "Colonel Mpia",
                "number": 9,
                "neighborhood": "Joli Parc",
                "commune": "Ngaliema",
                "city": "Kinshasa"
              },
              {
                "id": 3,
                "street": "Bosango",
                "number": 10,
                "neighborhood": "Kingabwa",
                "commune": "Limete",
                "city": "Kinshasa"
              }
            ]

## Modifier une adresses

### Requête

`PUT /addresses/id`

    URL : http://localhost:3001/addresses/3
    Body : {
              "street" : "King's way",
              "number" : 9
            }

### Réponse

    Status : 200 OK
    Body : "Address updated"