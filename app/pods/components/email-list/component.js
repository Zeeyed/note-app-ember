import Ember from "ember";
import { computed } from "@ember/object";

const { inject: { service } } = Ember;

export default Ember.Component.extend({
	invitations: service(),
	filter: null,
	matchAny: false,
	content: computed.reads('invitations.content'),
	filteredContent: computed('filter', 'invitations.content', 'matchAny', function() {
		const filter = this.get('filter');
		
		const matchAny = this.get('matchAny');
		if(filter === null) {
			return this.get('invitations.content');
		}
		const filterProps = Object.keys(filter);
		return this.get('invitations.content').filter(function(invitation) {
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
		updateFilter(filterObj) {
			this.set('filter', filterObj);
		},
		updateCheckbox(filterMatchAny) {
			this.set('matchAny', filterMatchAny);
		},
		resetFilter(value) {
			this.set('filter', value);
		},
		deleteItem(invitation) {
			this.get('invitations').delete(invitation);
		},
		updateItem(email, data) {
			this.get('invitations').update(email, data);
		},
		reset(value) {
			this.set('emailInputFilterValue', '');
			this.set('nameInputFilterValue', '');
			this.set('filter', value);
		},
		checkBoth(value) {
			this.set('matchAny', value);
		}
  }
});
