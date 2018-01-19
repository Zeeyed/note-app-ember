import Ember from 'ember';
import { computed } from '@ember/object';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
    invitations: service(),
    content: computed.reads('invitations.content'),
    
    actions: {
        onChangeName(value) {
            this.sendAction('filterAction', 'name', value.target.value);
        }
    }
});
