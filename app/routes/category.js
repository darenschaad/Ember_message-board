import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    save(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('category');
    }
  }
});
