let orm = require("../config/orm.js");

let burger = {
  all: function(cb){
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb){
    orm.create("burgers", cols, vals, function(res){
      cb(res);
    });
  },
  update: function(objColVals, condtition, cb){
    orm.update("burgers", objColVals, condtition, function(res){
      cb(res);
    });
  },
  delete: function(condtition, cb){
    orm.delete("burgers", condition, function(res){
       cb(res);
    });
  }
};

module.exports = burger;
