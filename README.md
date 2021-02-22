
## START

Launch mongo service using
```
docker-compose up
```

In Another terminal
```
npm i
npm start
```

# API REST

### Resources

route /car

#### Car 

model Car
    {
        name: String
        model: String
        year String
    }


available methods
    * post    /
    * get     /
    * put     /:id
    * delete  /:id


# Car Api conectado a MongoDB

## START

Launch mongo service using
```
docker-compose up
```

Start node app using, in another terminal.
```
npm i
npm start
```

# API REST

### resource Car

resource route: 

```
/car
```
resource model:
```
{
    name: String
    model: String
    year: Number
}
```

resource methods: 
*     post    /
*     get     /
*     put     /:id
*     delete  /:id
