import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save() {
      var date = new Date();
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        time: date.getTime(),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
