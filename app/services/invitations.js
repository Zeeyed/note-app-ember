import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Service.extend({
  content: computed(function() {
    return [];
  }),

  save(invitation) {
    this.get('content').pushObject(invitation);
  }
});
