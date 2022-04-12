module.exports = {
  reactStrictMode: true,
  env:{
    API_ROOT: process.env.API_ROOT,
    STRIPE_PK: process.env.STRIPE_PK,
    STRIPE_SK: process.env.STRIPE_SK
  },
  images:{
    domains:["images.pexels.com"]
  }
}
