ThaiMer.Views.Timer = Backbone.View.extend({
    initialize: function() {
        this._timeLeft = 0;
    },
    template: JST['timer/timer'],
    events: {
        "click button": "startTimer"
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    startTimer: function(event) {
        this._timeLeft = parseInt(this.$('input').val());
        this._interval = setInterval(this.tick.bind(this), 1000);
    },
    tick: function() {
        this._timeLeft -= 1;
        if (this._timeLeft == 0) {
            clearInterval(this._interval);
            alert('donesky');
   } else {
            this.updateDisplay();
        }
    },

    updateDisplay: function() {
        this.$('#time-spot').html(this._timeLeft);
        document.title = this._timeLeft;
    }
});
