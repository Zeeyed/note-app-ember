import Ember from 'ember';
import { match } from '@ember/object/computed';

export default Ember.Object.extend({
  email: '',
  name: '',
  company: '',
  isValid: match('email', /^.+@.+\..+$/)
});
