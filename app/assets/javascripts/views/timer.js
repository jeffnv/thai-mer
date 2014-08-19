ThaiMer.Views.Timer = Backbone.View.extend({
    initialize: function() {
        this._timeLeft = 0;
    },
    template: JST['timer/timer'],
    events: {
        "click #startButton": "startTimer",
        "click #pauseButton": "pauseTimer",
        "click #resumeButton": "resumeTimer"
    },
    render: function() {
        this.$el.html(this.template());
        var clockView = new ThaiMer.Views.ClockView();
        this.$('#clock').html(clockView.render().$el);
        return this;
    },
    startTimer: function() {
        var timeVal = this.$('input').val();
        this._timeLeft = parseInt(timeVal);
        this.startInterval();
    },
    startInterval: function(event) {
        this._interval = setInterval(this.tick.bind(this), 1000);
    },
    tick: function() {
        this._timeLeft -= 1;
        if (this._timeLeft == 0) {
            clearInterval(this._interval);
            this.updateTitle("COMPLETE!");
            alert('donesky');
        } else {
            this.updateDisplay();
        }
    },
    updateTitle: function(title) {
        document.title = title;
    },
    pauseTimer: function(event) {
        var $button = $(event.target);
        clearInterval(this._interval);
        this.updateTitle("paused");
    },
    resumeTimer: function() {
        this.startInterval();
    },

    updateDisplay: function() {
        this.$('#time-spot').html(this._timeLeft);
        this.updateTitle(this._timeLeft);
    }
});
