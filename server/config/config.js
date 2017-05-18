module.exports = {
  dev: {
    port: process.env.PORT || 5000,
    db  : process.env.DB_LINK || "mongodb://localhost/mapdb"
  },
  prod: {
    //TODO !
  }
};


