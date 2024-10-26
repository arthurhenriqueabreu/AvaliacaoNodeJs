const ModelPessoa = require('../models/pessoa')

//  Criando a classe servicePessoa
class ServicePessoa{
  async GetPessoas() {
    return ModelPessoa.findAll()
  }
  CreatePessoa(name) {
    // fazer verificações - se mandou o name
    return ModelPessoa.CreatePessoa(name)
  }
  UpdatePessoa(id, name) {
    return ModelPessoa.UpdatePessoa(id, name)
  }
  DeletePessoa(id) {
    return ModelPessoa.DeletePessoa(id)
  }
}
module.exports = new ServicePessoa()