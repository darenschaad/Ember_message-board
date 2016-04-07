import Ember from 'ember';

export default Ember.Route.extend({

  //change this to RSVP

  //question:
  //categories: findAll('')
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.refresh();

    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});