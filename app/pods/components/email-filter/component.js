import Ember from 'ember';
import { computed } from '@ember/object';
const { inject : { service } } = Ember;

export default Ember.Component.extend({
    email: '',
    invitations: service(),

    content: computed('invitations.content.[]', 'email', function() {
        return this.get('invitations.content').findBy('email', this.get('email'));
    }),

    actions: {
        handleFilterEntry(value) {
            this.sendAction('filterAction', 'email', value);
        }
    }
});
