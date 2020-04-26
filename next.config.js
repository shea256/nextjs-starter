require('dotenv').config()

module.exports = {
  env: {
    ANALYTICS_WRITE_KEY: '',
    SITE_METADATA: {
      name: "NextJS",
      origin: "http://localhost:3000",
      description: "Description",
      image: { name: "/images/curved-mesh.jpg", width: 4032, height: 3024 }
    },
  }
}