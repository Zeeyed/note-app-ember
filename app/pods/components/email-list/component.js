import Ember from "ember";
import { computed } from "@ember/object";

const { inject: { service } } = Ember;

export default Ember.Component.extend({
	invitations: service(),

	content: computed.reads('invitations.content'),
	filter: null,
	filteredContent: computed('filter', 'content', function() {
		const filter = this.get('filter');

		if(filter === null) {
			return this.get('content');
		}
		const filterProps = Object.keys(filter);
		return this.get('content').filter(function(invitation) {
			let result = true;
			filterProps.forEach(function(filterProp) {
				if(result && invitation[filterProp] !== filter[filterProp]) {
					result = false;
				}
			});
			return result;
		});
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
    }
  }
});
