import Ember from 'ember';
import { computed } from '@ember/object';

const { inject : { service } } = Ember;

export default Ember.Component.extend({
  invitations: service(),
  email: '',

  content: computed('invitations.content.[]', 'email', function() {
    return this.get('invitations.content').findBy('email', this.get('email'));
  }),

  proxy: computed('content', function() {
	return this.get('content').getProperties('email', 'name', 'company');
  }),

  actions: {
    save() {
		this.get('invitations').update(this.get('email'), this.get('proxy'));
		this.sendAction('updatedAction');
	},
	cancel() {
		this.sendAction('updatedAction');
	}
  }
});
