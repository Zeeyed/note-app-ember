import Ember from 'ember';
import { computed } from '@ember/object';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
    invitations: service(),
    filter: null,
    displayValue: '',
    content: computed.reads('invitations.content'),

    actions: {
        // /**
        //  * Make the filterContent in the email list and sendAction (filter) and set filter in the email list
        //  * @param filterName
        //  * @param event input values (sometime we get the event)
        //  */
        // filterItem(filterName, event) {
        //     event.target && event.target.value && this.set('selectedOption', event.target.value);
        //     const filterObj = { ...this.get('filter') };
        //     filterObj[filterName] = event.target && event.target.value ? event.target.value : event;
        //     this.set('filter', filterObj);
        //     this.sendAction('refreshList', this.get('filter'));
        // }
    }
});
