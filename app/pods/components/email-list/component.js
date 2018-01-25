import Ember from "ember";
import { computed } from "@ember/object";
import { map } from "@ember/object/computed";

const { inject: { service } } = Ember;

export default Ember.Component.extend({
	invitations: service(),
	filter: null,
	matchAny: false,

	// Normal way
	invitationNamesList: computed('invitations.content.@each.name', function() {
		return this.get('invitations.content').map((element) => {
			return {
				label: element.get('name'),
				value: element.get('name')
			};
		});
	}),

	invitationCompaniesList: computed('invitations.content.@each.company', function() {
		return this.get('invitations.content').map((element) => {
			return {
				label: element.get('company'),
				value: element.get('company')
			};
		});
	}),

	// Semi-normal way
	// invitationNamesList: computed('invitations.content.@each.name', function() {
	// 	return this.get('invitations.content').map((el) => ({ value: el.get('name'), label: el.get('name') }));
	// }),

	// 1 liner
	// invitationNamesList: map('invitations.content', (el) => ({ value: el.get('name'), label: el.get('name') }),


	filteredContent: computed('filter', 'invitations.content.[]', 'matchAny', 'invitationCompaniesList', 'invitationNamesList', function() {
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
		updateFilter(name, value) {
			const updatedFilter = { ...this.get('filter')};
			updatedFilter[name] = value;
			this.set('filter', updatedFilter);
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
