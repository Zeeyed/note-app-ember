import Ember from "ember";
import { computed } from "@ember/object";

const { inject: { service } } = Ember;
export default Ember.Component.extend({
  invitations: service(),

  content: computed.reads("invitations.content"),
  
  actions: {
    deleteItem(invitation) {
      this.get("invitations").delete(invitation);
    },
    updateItem(email, data) {
      this.get("invitations").update(email, data);
    }
  }
});
