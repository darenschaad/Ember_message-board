import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      categories: this.store.findAll('category'),
    });
  },
  // 
  // sortBy: ['content:asc'],
  // sortedQuestions: Ember.computed.sort('model.questions', 'sortBy'),

  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      var category = params.category;
      category.get('questions').addObject(newQuestion);
      newQuestion.save().then(function() {
        return category.save();
      });
      this.transitionTo('index');
    }
  }
});
