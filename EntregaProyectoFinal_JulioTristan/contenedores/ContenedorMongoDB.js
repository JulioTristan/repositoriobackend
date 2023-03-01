import mongoose from 'mongoose'

mongoose.set('strictQuery', true);
await mongoose.connect(process.env.MONGODB_URI)


class ContenedorMongoDB {
  constructor(modelName, schema) {
      this.collection = mongoose.model(modelName, schema)
  }

  async listar(id) {
    const result= await this.collection.find({_id:id}).lean()
    return result
  }
  

  async listarAll() {
    const result= await this.collection.find({}).lean()
    return result
  }

  async guardar(obj) {
    const result = await this.collection.create(obj)
    return result
  }

  async actualizar(id,data) {
    const result = await this.collection.updateOne({ _id: id }, { $set: data })
    return result

  }

  async borrar(id) {
    const result= await this.collection.deleteOne({_id:id})
    return result
  }
  

  async borrarAll() {
    const result= await this.collection.deleteMany({})
    return result
  }
}

export default ContenedorMongoDB