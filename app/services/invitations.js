import Ember from 'ember';
import { computed } from '@ember/object';

import InvitationModel from 'note-app-ember/models/invitation';

export default Ember.Service.extend({

  content: computed(function() {
    return [
      InvitationModel.create({ id: 1, email: 'some@me.io', name: 'somebody'}),
      InvitationModel.create({ id: 2, email: 'some2@me.io', name: 'somebody else'})
    ];
  }),

  save(invitation) {
    return  this.get('content').pushObject(invitation);
  },
  delete(invitation) {
    return this.get('content').removeObject(invitation);
  },
  update(email, data) {
    const invitation = this.get('content').findBy('email', email);
    if(invitation) {
      invitation.setProperties(data);
    }
  }
});
