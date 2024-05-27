require('dotenv').config();

module.exports = {
    "development": {
      "database": "mood_tracker",
      "username": "mood_trkr",
      "password": "mood_trkr",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "operatorsAliases": 0
    },
    "test": {
      "database": "userapp_test",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "operatorsAliases": 0
    },
    "production": {
      "use_env_variable": process.env.DATABASE_URL,
      "dialect": "postgres",
      "operatorsAliases": 0,
      "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
      }
    }
  }
  ;