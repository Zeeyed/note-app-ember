import Ember from 'ember';
import { computed } from '@ember/object';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
    invitations: service(),
    filter: null,
    displayValue: '',
    isBtnVisible: false,
    isChecked: false,
    name: null,
    isBlankSelected: computed.empty('selectedOption'),
    content: computed.reads('invitations.content'),
    matchAny: false,
	filteredContent: computed('filter', 'content', 'matchAny', function() {
        const filter = this.get('filter');
        const matchAny = this.get('matchAny');
		if(filter === null) {
			return this.get('content');
		}
		const filterProps = Object.keys(filter);
		return this.get('content').filter(function(invitation) {
			let result = !matchAny;
			filterProps.forEach(function(filterProp) {
				if(matchAny) {
					if(!result && invitation[filterProp] === filter[filterProp]) {
						result = true;
					}
				} else {
					if(result && invitation[filterProp] !== filter[filterProp]) {
						result = false;
					}
				}
			});
			return result;
		});
	}),
    actions: {
        handleFilterEntry(value) {
            this.sendAction('filterAction', 'displayValue', value);
        },
        resetItems() {
            this.set('displayValue', null);
            this.set('selectedOption', '');
            this.set('filter', null);
            this.sendAction('refreshList', this.get('filteredContent'));
            this.set('isBtnVisible', true);
        },
        checkBoth(event) {
            let filterMatchAny = this.get('matchAny');
            filterMatchAny = event.target.checked;
            this.set('matchAny', filterMatchAny);
            this.sendAction('refreshList', this.get('filteredContent'));
        },
        onChangeName(value) {
            this.sendAction('filterAction', 'name', value.target.value);
        },
        filterItem(filterName, event) {
            this.set('isBtnVisible', false);
            event.target && event.target.value && this.set('selectedOption', event.target.value);
            const filterObj = { ...this.get('filter') };
            filterObj[filterName] = event.target && event.target.value ? event.target.value : event;
            this.set('filter', filterObj);
            this.sendAction('refreshList', this.get('filteredContent'));
        }
    }
});
