import Ember from 'ember';

export default Ember.Service.extend({
  currentCount: 0,
  soundBank: [],

  add(sound){
    this.get('soundBank').pushObject(sound);
  },


  startCountUp(){

    var that = this;

    setInterval(function(){
      var count = that.get('currentCount');
      if (count === 8) {
        count = 0;
      }
      that.set('currentCount', count);

      var tempCount = that.get('currentCount') + 1;
      that.set('currentCount', tempCount);
      console.log(that.get('currentCount'));
      var soundBank = that.get('soundBank');

      for(var i=0; i < soundBank.get('length'); i++) {
        //console.log(soundBank.objectAt(i).position);
        if (that.get('currentCount') === soundBank.objectAt(i).position) {
          console.log("BANG!");
          soundBank.objectAt(i).sound.play();
        }
       }

    }, 400);



  }

});
