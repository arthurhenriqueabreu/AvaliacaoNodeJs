const ServicePessoa = require('../services/pessoa')

// Criando a classe controller da pessoa
class ControllerPessoa {
  ///TODAS as funções do controller, recebem req,
  async GetPessoas(req, res) {
    // TODAS as funções do controller tem TRY CATCH
    try {
      const pessoas = await ServicePessoa.GetPessoas()
      res.send({ msg: pessoas })
    } catch (error) {
      //TODO CATCH VAI SER ASSIM
      res.status(500).send({ msg: error.message })
    }
  }
  CreatePessoa(req,res){
    try {
      const name = req.body.name
      const pessoa = ServicePessoa.CreatePessoa(name)
      res.send({ pessoa })
    } catch (error) {
      //TODO CATCH VAI SER ASSIM
      res.status(500).send({ msg: error.message })
    }
  }
  UpdatePessoa(req,res){
    try {
      const id = req.params.id
      const name = req.body.name
      const pessoa = ServicePessoa.UpdatePessoa(id, name)
      res.send({ pessoa })
    } catch (error) {
      //TODO CATCH VAI SER ASSIM
      res.status(500).send({ msg: error.message })
    }
  }
  DeletePessoa(req,res){
    try {
      const id = req.params.id
      const pessoa = ServicePessoa.DeletePessoa(id)
      res.send({ msg: pessoa })
    } catch (error) {
      //TODO CATCH VAI SER ASSIM
      res.status(500).send({ msg: error.message })
    }
  }
}

module.exports = new ControllerPessoa()