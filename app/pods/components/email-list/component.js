import Ember from "ember";
import { computed } from "@ember/object";

const { inject: { service } } = Ember;

export default Ember.Component.extend({
	invitations: service(),
	filter: null,
	filteredContent: computed('filteredContent', function() {
		return this.get('invitations.content');
	}),
  actions: {
		refreshList(value) {
			this.set('filteredContent', value);
		},
    deleteItem(invitation) {
      this.get('invitations').delete(invitation);
    },
    updateItem(email, data) {
      this.get('invitations').update(email, data);
    }
  }
});
