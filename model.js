var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReportSchema = new Schema(
  {
    title: {type: String, required: true, max: 100},
    desc: {type: String, required: true, max: 100},
  }
);

// Virtual for author's URL
ReportSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Report', ReportSchema);