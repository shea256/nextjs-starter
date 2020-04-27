# NextJS Starter

## Features

- Next.js (framework)
- Passport.js (for authentication)
- next-connect (middleware for Next.js)
- Reactstrap + Bootstrap (for styles)
- Segment (for analytics)
- Argon2 (for password hashing)

## Overview

This example creates a basic Next.js [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) app using [next-connect](https://github.com/hoangvvo/next-connect) and cookie-based authentication with [Passport.js](http://www.passportjs.org/).

The cookie is securely encrypted using [@hapi/iron](https://github.com/hapijs/iron) and [argon2](https://github.com/ranisalt/node-argon2) is used for password hashing.

[Reactstrap](https://reactstrap.github.io/) + [Bootstrap](https://getbootstrap.com/) are used for styles

[Segment.com](https://segment.com) is used for analytics includes.

The example shows how to do a sign up, login, logout, and account deactivation. It utilizes [SWR](https://swr.now.sh/) to fetch the API.

For demo purpose, the users database is stored in the cookie session. You need to replace it with an actual database to store users in [db.js](lib/db.js).

## Deploy

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/shea256/nextjs-starter)
