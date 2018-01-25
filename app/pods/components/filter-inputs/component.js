import Ember from 'ember';
import { computed } from '@ember/object';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
    invitations: service(),
    filter: null,
    displayValue: '',
    // isChecked: false,
    // name: null,
    // isBlankSelected: computed.empty('selectedOption'),
    content: computed.reads('invitations.content'),
    // matchAny: false,
	
    actions: {
        filterItem(filterName, event) {
            event.target && event.target.value && this.set('selectedOption', event.target.value);
            const filterObj = { ...this.get('filter') };
            filterObj[filterName] = event.target && event.target.value ? event.target.value : event;
            this.set('filter', filterObj);
            this.sendAction('refreshList', this.get('filter'));
            // todo =====> dont set filter here, set it in the list
            // DELETE  this.set('filter', filterObj);
            // todo =====> delete this
            // make the filterContent in the email list
            // and sendAction (filter) and set filter in the email list
            // DELETE  this.sendAction('refreshList', this.get('filteredContent'));
        }
    }
});
