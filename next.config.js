require('dotenv').config()

console.log(process.env.TOKEN_SECRET)

module.exports = {
  env: {
    ANALYTICS_WRITE_KEY: '',
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    SITE_METADATA: {
      name: "NextJS",
      origin: "http://localhost:3000",
      description: "Description",
      image: { name: "/images/curved-mesh.jpg", width: 4032, height: 3024 }
    },
  }
}