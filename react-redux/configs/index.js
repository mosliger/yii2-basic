module.exports = {
  development: {
    isProduction: false,
    host: 'http://localhost:1337/localhost/',
    port: 3000
  },
  production: {
    isProduction: true,
    host: 'http://localhost/', // use localhost to test in local machine
    port: 8000
  }
}[process.env.NODE_ENV || 'development']
