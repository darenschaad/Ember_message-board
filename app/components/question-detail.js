import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['time:desc'],
  sortedAnswers: Ember.computed.sort('model.question.answers', 'sortBy'),

  actions: {
    delete(question) {
      console.log(question);
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
