# URL SHORTENER BACKEND

A simple url shortner API

## Technologies

- Express
- Mongodb
- Mongoose
- ShortId
- valid-url
- mocha
- supertest
- chai

## endpoints

- Base Url - https://myownurl.herokuapp.com/
- url-shorten endpoint https://myownurl.herokuapp.com/api/shorten
  - body parameter - {longUrl:"url to shorten"}
  - response example - {
    "id": "60377fc040d5300015bc57dc",
    "longUrl": "https://github.com/Emmanuel0705/url-shortner",
    "shortUrl": "https://myownurl.herokuapp.com/_NgUrwyq7",
    "urlCode": "\_NgUrwyq7",
    "createdAt": "2021-02-25T10:44:49.938Z",

}

## TEST

### command

```bash
npm run test
```

run above command to check if test are passing
