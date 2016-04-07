import Ember from 'ember';

export default Ember.Component.extend({
  updateQUestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var date = new Date();
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        time: date.getTime(),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
