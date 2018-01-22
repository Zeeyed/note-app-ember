import Ember from 'ember';
import { computed } from '@ember/object';
const { inject : { service } } = Ember;

export default Ember.Component.extend({
    invitations: service(),
    email: '',
    filter: null,
    content: computed.reads('invitations.content'),

    actions: {
        resetItems() {
            console.log('hahah', this.get('content'));
            
            // this.set('email', 'ssss')
            this.sendAction('resetAction')
        }
    }
});
