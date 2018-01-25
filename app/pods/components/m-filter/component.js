import Ember from 'ember';
import { equal, empty } from '@ember/object/computed';

export default Ember.Component.extend({
    type: null,
    value: '',
    filter: null,
    isInput: equal('type', 'input'),
    isSelect: equal('type', 'select'),
    isBlankSelected: empty('selectedOption'),
    
    actions: {
        /**
         * Make the filterContent in the email list and sendAction (filter) and set filter in the email list
         * @param filterName
         * @param event input values (sometime we get the event)
         */
        filterItem(filterName, event) {
            event.target && event.target.value && this.set('selectedOption', event.target.value);
            const filterObj = { ...this.get('filter') };
            filterObj[filterName] = event.target && event.target.value ? event.target.value : event;
            this.set('filter', filterObj);
            this.sendAction('onChangeAction', this.get('filter'));
        }
    }
});
