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
            this.set('filter', null);
            console.log('heyeeyyy', this.get('filter.displayValue'));
            
            this.sendAction('resetAction', 'filter', this.get('filter.displayValue'))
        }
    }
});
