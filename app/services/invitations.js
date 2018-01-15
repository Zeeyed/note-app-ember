import Ember from 'ember';
import { computed } from '@ember/object';

const { inject: { service } } = Ember;

export default Ember.Service.extend({
  
  invitations: service(),

  content: computed(function() {
    return [];
  }),

  save(invitation) {
    const invitations = this.get('content').pushObject(invitation);
    return invitations;
  },

  delete(invitation) {
    return this.get('content').removeObject(invitation);
  }
});
