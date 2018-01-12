import Ember from 'ember';
import { match, not, and, gte } from '@ember/object/computed';

export default Ember.Component.extend({
  emailAddress: '',
  message: '',
  responseMessage: '',

  emailIsValid: match('emailAddress', /^.+@.+\..+$/),
  messageIsValid: gte('message.length', 5),
  formIsValid: and('emailIsValid', 'messageIsValid'),
  isDisabled: not('formIsValid'),

  actions: {
    sendMessage(){
      this.set('responseMessage', `Thank you for contacting us!`);
      this.set('emailAddress', '');
    }
  }
});
