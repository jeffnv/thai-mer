ThaiMer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(){
    new ThaiMer.Routers.Router();
    Backbone.history.start();
  }
}
$(function(){ ThaiMer.initialize() });




