Swagger UI in a TypeScript service
==================================

Install
-------

```
npm install
```

Run
---

Use **ts-node** or **Visual Studio Code** > **Debug** > **Start Debugging** (F5). Cross your fingers.

Build
-----

Use **npm run build** command to build your app.

```
npm run build
```

That will use **webpack** to compile and bundle project.

```
npm start
```

This will run service.

```
> @ start C:\PROJECT\HUB\example-ts-swagger
> node dist/server.js

Server is listening on: http://localhost:3000
Swagger definition: http://localhost:3000/swagger/v1/swagger.json
Swagger UI: http://localhost:3000/swagger
```

Browse this address http://localhost:3000/swagger/ to see service description. Pure JSON may be taken from http://localhost:3000/swagger/v1/swagger.json then. 

Have fun with some other links like:

 * http://localhost:3000/information
 * http://localhost:3000/information/1

Have a nice day...

Zoltraks (ZoltarX) out...
