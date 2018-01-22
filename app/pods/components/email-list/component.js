import Ember from "ember";
import { computed } from "@ember/object";

const { inject: { service } } = Ember;

export default Ember.Component.extend({
	invitations: service(),

	content: computed.reads('invitations.content'),
	filter: null,
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
	resetContent: computed('', function() {

	}),

  actions: {
    deleteItem(invitation) {
      this.get('invitations').delete(invitation);
    },
    updateItem(email, data) {
      this.get('invitations').update(email, data);
    },
    filterItem(filterName, value) {
		const filterObj = { ...this.get('filter') };
		filterObj[filterName] = value;
		this.set('filter', filterObj);
	},
	useBoth(e, value) {
		let filterMatchAny = this.get('filterMatchAny');
		filterMatchAny = value;
		this.set('matchAny', filterMatchAny)
	},
	resetFilter() {
		console.log('this', this.get('filter.email'));
		let clone = this.get('filter.email');
		clone = null;
		this.set('filter.email', '')
		// console.log('this', this.get('content'));
	}
  }
});
