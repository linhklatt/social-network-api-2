const { Schema, model } = require("mongoose");

const Reaction = require("./Reaction");
const formatDate = require("../utils/formatDate.js");

// Thought model Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create virtual property " reactionCount"
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const thought = model("thought", thoughtSchema);

model.exports = thought;
