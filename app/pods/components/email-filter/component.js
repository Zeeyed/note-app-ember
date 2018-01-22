import Ember from 'ember';
import { computed } from '@ember/object';
const { inject : { service } } = Ember;

export default Ember.Component.extend({
    email: '',
    invitations: service(),

    content: computed('invitations.content.[]', 'email', function() {
        return this.get('invitations.content').findBy('email', this.get('email'));
    }),
    proxy: computed('content', function() {
        return this.get('invitations.content').getProperties('email', 'name', 'company');
    }),

    actions: {
        handleFilterEntry(value) {
            this.sendAction('filterAction', 'email', value);
        }
    }
});
