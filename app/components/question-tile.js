import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),



  actions: {
    addToFavorites(question) {
      this.get('favorite').add(question);
    }
  }
});
