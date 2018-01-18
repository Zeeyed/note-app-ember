import Ember from 'ember';
import { computed } from '@ember/object';

import InvitationModel from 'note-app-ember/models/invitation';

export default Ember.Service.extend({

  content: computed(function() {
    return [
      InvitationModel.create({ email: 'some@me.io'}),
      InvitationModel.create({ email: 'some2@me.io'})
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
  },
  filterBy(email) {
    // console.log(this.get('content').findBy('email', email));
    
    // return this.get('content').findBy('email', email).setProperties({ email: email});
  }
});
