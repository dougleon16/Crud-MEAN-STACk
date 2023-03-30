//modelar la base de datos con mongo

const { Schema, model } = require("mongoose");

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    position: {
      type: String,
      required: true,
    },
    office: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// exportamos el modelo con el nombre y el schame
module.exports = model("Employee", employeeSchema);
