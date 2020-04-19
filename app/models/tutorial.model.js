
  const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Tutorial', NoteSchema);