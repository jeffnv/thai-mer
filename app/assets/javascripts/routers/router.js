ThaiMer.Routers.Router = Backbone.Router.extend({
  routes: {
            "": "root"
          },
  root: function(){
          var timerView = new ThaiMer.Views.Timer();
          $('#content').html(timerView.render().$el);
        },

});
