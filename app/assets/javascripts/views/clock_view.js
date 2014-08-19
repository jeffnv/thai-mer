ThaiMer.Views.ClockView = Backbone.View.extend({
    template: JST['timer/clock_view'],
    render: function() {
        this.$el.html(this.template());
        //this.initClock();
        return this;
    },
    initClock: function() {
        this.$("#second-hand").velocity({
            rotateZ: 360
        }, {
            loop: 5,
            easing: [480],
            duration: 10000
        });
    },
});
