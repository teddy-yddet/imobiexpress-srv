const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qdif83e.mongodb.net/projeto_ifsp?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }

      return console.log("Conexão ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
