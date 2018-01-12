import Ember from 'ember';
import { not } from '@ember/object/computed';
import InvitationModel from 'note-app-ember/models/invitation';
import { computed } from '@ember/object';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  newsletterTitle: 'Coming Soon',
  
  responseMessage: '',

  invitations: service(),

  content: computed(function() {
    return InvitationModel.create();
  }),

  
  isDisabled: not('content.isValid'),

  actions: {
    saveInvitation() {
      const content = this.get('content');
      if(content.get('isValid')) {
        this.get('invitations').save(content);
        this.set('responseMessage', `Thank you ! We save your email ${this.get('content.email')}`);
        this.set('content', InvitationModel.create());
      } else {
        this.set('responseMessage', 'That\'s bullshit');
      }
    }
  }
});