
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
      'index', 
  { 
      title: 'hello world'
      }
      );
};

exports.demo = function(req, res){
  res.render(
      'demo', 
  { 
      title: 'this is demo page',
      header:'demo demo ...'
      }
      );
};

exports.app = function(req, res){
  res.render(
      'bootstrap', 
  { 
      title: 'this is bootstrap page',
      content:'many many connect ...'
      }
      );
};