import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'George',
  greeting: `hey"'"''"' there`,
  title: 'chef',
  foods: [1, 2, 3, 4, 5, 6],
  actions: {
    enter(chef) {
        Ember.set(chef, 'isAvailable', true)
      },
      exit(chef) {
        Ember.set(chef, 'isAvailable', false)
      }
  }
});
