import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'George',
  greeting: `hey"'"''"' there`,
  title: 'chef',
  foods: [1, 2, 3, 4, 5, 6],
  chefsOnStaff: Ember.computed.alias('model.length'),
  chefsOnSite: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {
    enter(chef) {
      Ember.set(chef, 'isAvailable', true)
      chef.save();
    },
    exit(chef) {
      Ember.set(chef, 'isAvailable', false)
      chef.save();
    },
    addNewChef() {
      this.store.createRecord('chef', {
          isAvailable: false,
          name: this.get('newChef')
        }).save(),
        this.set('newChef', '')
    },
    removeChef(chef){
      chef.destroyRecord()
    }
  }
});
