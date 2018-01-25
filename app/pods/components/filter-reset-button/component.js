import Ember from 'ember';
// import { computed } from '@ember/object';
// const { inject : { service } } = Ember;

export default Ember.Component.extend({
    // invitations: service(),
    // email: '',
    filter: null,

    actions: {
        reset() {
            this.set('filter', null);
            this.sendAction('reset', this.get('filter'));
            //console.log('heyeeyyy', this.get('filter.displayValue'));
            //this.sendAction('resetAction', 'filter', this.get('filter.displayValue'));
        },
    }
});
