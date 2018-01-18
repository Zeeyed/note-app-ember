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
            this.sendAction('filterAction', "email", value);
            // this.set(this.get('invitations.content'), this.get('content'));
            
            // this.get("invitations").filterBy(value);
            // console.log('this.get("invitations")', this.get("invitations"));
            
            // this.set(this.get('content.'))
            // console.log('hey filter ...', this.get('invitations').update(value, this.get('proxy')));
            // console.log(this.get('content'));
            
        }
    }
});
