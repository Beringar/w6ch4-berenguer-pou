const { model, Schema } = require("mongoose");

const ThingSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const Thing = model("Thing", ThingSchema, "things");

module.exports = Thing;
