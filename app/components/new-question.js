import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var date = new Date()
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        time: date.getTime(),
        notes: this.get('notes')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
