module.exports.save = function(instance, callback){
    instance.save(callback);
}
module.exports.find = function(instance, query, exclude , callback){
    instance.find(query, exclude).then(callback);
}
module.exports.findOne = function(instance,query, exclude, callback){
    instance.findOne(query,exclude).then(callback)
}

//  module.exports = 