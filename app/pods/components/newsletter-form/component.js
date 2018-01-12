import Ember from 'ember';
import { not, match } from '@ember/object/computed';

const { Component } = Ember;

export default Component.extend({
  newsletterTitle: 'Coming Soon',
  emailAddress: '',
  responseMessage: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveInvitation() {
      alert(`Saving in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you ! We save your email ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});