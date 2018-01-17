import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.Object.create(params);
  },

  actions: {
	getOutOfHere() {
		this.transitionTo('emails');
	}
  }
});
