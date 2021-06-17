# Read Graphql with apollo server node

The application is a simple example of users and roles

### Installation

Application requires [Node.js](https://nodejs.org/) v8+ to run and [json-server](https://www.npmjs.com/package/json-server)

Install the dependencies and devDependencies and start the server.

```sh
$ git clone --recursive git@github.com:brunoflegler/graphql-pt01.git
$ cd graphql-pt01
```

Installation is done using the npm install command:

```sh
$ npm install
```

Or run Yarn install command:

```sh
$ yarn install
```

First step:

```sh
$ json-server --watch ./data/storage.json
```

Second step:

```sh
$ yarn dev or npm dev

//Server ready at http://localhost:4000/
```

[Open the playground graphql](http://localhost:4000/)

First query using graphql

```
query {
  users {
    name
  }
}

```
Response:
```
{
  "data": {
    "users": [
      {
        "name": "Ana Torre"
      },
      {
        "name": "Gabriel Costa"
      },
      {
        "name": "Flavia Lins"
      },
      {
        "name": "Carlos Marques"
      },
      {
        "name": "Silvia Souza"
      },
      {
        "name": "Marcia Silva"
      }
    ]
  }
}
```


