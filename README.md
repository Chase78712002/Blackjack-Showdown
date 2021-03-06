# Blackjack-Showdown

_Mintbean Hackathon Project | July 2021_

A pixel-themed head to head blackjack game.

## Deployed site link

<https://blackjack-showdown.herokuapp.com/>

## Setup

Blackjack-Showdown uses **React** version `17.0.2`, **Express** version `4.17.1`. Please ensure you have a compatible version of ruby before continuing.
////config:set $(cat ./server/.env)
set .env REACT_APP_API_BASE_URL to connect to frontend

1. CD into 'client' and run `npm install` to install react and its dependencies.
2. CD into 'server' and run `npm install` to install backend dependencies.

## Running Backend Server

```sh
npm start
```

## Running Webpack Development Server

```sh
npm start
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Tech stack

- **Front-end:** ReactJS v17.0.2
- **Back-end:** Node, Express v4.17.1
- **Database:** PostgreSQL

## Other Dependencies

- axios
- react-router-dom
- socket.io
- bcrypt
- jsonwebtoken
- knex
- morgan
- pg
- nodemon
- storybook

---

## Developers

- **Evelyn Yoa**
  - GitHub: <https://github.com/eyoa>
  - LinkedIn: <https://www.linkedin.com/in/evelyn-yoa/>
- **Audrey Margolis**
  - GitHub: <https://github.com/AudreyMargolis>
  - LinkedIn: <>
- **Alvin Lin**
  - GitHub: <https://github.com/Chase78712002>
  - LinkedIn: <https://www.linkedin.com/in/alvin-lin-6933b39a/>

# Screenshots

!["Log in page"](https://github.com/Chase78712002/Blackjack-Showdown/blob/frontend-landing/client/public/img/screenshots/loginPage.png?raw=true)
!["Landing page"](https://github.com/Chase78712002/Blackjack-Showdown/blob/frontend-landing/client/public/img/screenshots/aboutpage.png?raw=true)
!["Game start page"](https://github.com/Chase78712002/Blackjack-Showdown/blob/frontend-landing/client/public/img/screenshots/startpage.png?raw=true)
!["Game 1"](https://github.com/Chase78712002/Blackjack-Showdown/blob/frontend-landing/client/public/img/screenshots/game1.png?raw=true)
!["Game 2"](https://github.com/Chase78712002/Blackjack-Showdown/blob/frontend-landing/client/public/img/screenshots/game2.png?raw=true)
!["Dealer won"](https://github.com/Chase78712002/Blackjack-Showdown/blob/frontend-landing/client/public/img/screenshots/dealerwin.png?raw=true)
!["Player won"](https://github.com/Chase78712002/Blackjack-Showdown/blob/frontend-landing/client/public/img/screenshots/playerwin.png?raw=true)

## Backend Documentation

#### Users

Authenticate User login

- PUT https://blackjack-showdown.herokuapp.com/users/login

```js
  body: {"data": {
    "email": "spidey@neighbourhood.com",
    "password": "password"
  }}
```

Successful Response:

```js
{
"user": {
"email": "spidey@neighbourhood.com",
"username": "Spiderman",
"profile_img_url": null,
"coins": 110
},
"accessToken": "encoded token"
}
```

Invald credentials response:

```js
{
    "message": "invalid"
}
```

Error Response:

```js
{
    "error": "error message"
}
```

- POST https://blackjack-showdown.herokuapp.com/users/register

```js
body: {
  "data": {
    "username": "test7",
    "email": "test7@testing.com",
    "password": "password",
    "coins": 100
  }}
```

Success response:

```js

```

Error response

```js
{
    "error": "Username already exists!"
}
```

#### Game

socket based connection
