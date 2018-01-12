import Ember from 'ember';
import { match } from '@ember/object/computed';

export default Ember.Object.extend({
  email: '',
  isValid: match('email', /^.+@.+\..+$/)
});
