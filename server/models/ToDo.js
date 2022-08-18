const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const ToDoSchema = new Schema(
  {
    ToDoText: {
      type: String,
      required: "Give us Something to Do!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

ToDoSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const ToDo = model("ToDo", ToDoSchema);

module.exports = ToDo;
