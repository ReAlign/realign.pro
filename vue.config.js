module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://public-bucket-electron.nos-eastchina1.126.net/web_cdn/realign-homepage/'
    : '/'
}