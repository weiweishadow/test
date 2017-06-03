var fs = require('fs');
var list = [];

moudle.exports={
  add:function(article){
    list.push(article);
  },
  del:function(index){
    list.splice(index,1);
  },
  update:function(index,newArticle){
    list.splice(index,1,newArticle);
  },
  find:function(){
    return list;
  },
  store:function(){
  }
}
