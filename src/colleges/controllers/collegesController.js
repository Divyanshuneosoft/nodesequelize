const { Op } = require("sequelize")
const collegesModel = require("../models/collegesModel")

class Colleges {
  async createData(req) {
    try {
      let data = await new collegesModel().model.create(req.body)
      return {
        statusCode: 200,
        details: {
          message: "Data created successfully",
          data
        }
      }
    } catch (error) {
      throw error
    }
  }
  async findAll(req) {
    try {
      let filter = {}
      if (req.query.text) filter["where"] = { 'name': { [Op.like]: `%${req.query.text}%` } }
      let data = await new collegesModel().model.findAll(filter)
      return {
        statusCode: 200,
        details: {
          message: "Data fetched successfully",
          data
        }
      }
    } catch (error) {
      throw error
    }
  }
  async find(req) {
    try {
      let data = await new collegesModel().model.findByPk(req.query.id)
      return {
        statusCode: 200,
        details: {
          message: "Data fetched successfully",
          data
        }
      }
    } catch (error) {
      throw error
    }
  }
  async update(req) {
    try {
      var colleges = await new collegesModel().model.findOne({ where: { id: req.body.id } })
      for (let key in colleges.dataValues) {
        if (key in req.body) colleges[key] = req.body[key]
      }
      await colleges?.save()
    } catch (error) {
      throw error
    }
    return {
      statusCode: 200,
      details: {
        message: "Data updated successfully",
        data: colleges
      }
    }
  }
  async delete(req) {
    try {
      var colleges = await new collegesModel().model.findOne({ where: { id: req.query.id } })
      colleges && (colleges.destroy())
    } catch (error) {
      throw error
    }
    return {
      statusCode: 200,
      details: {
        message: "data deleted successfully"
      }
    }
  }
}
module.exports = new Colleges()