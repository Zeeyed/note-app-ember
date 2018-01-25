import Ember from 'ember';

export default Ember.Component.extend({
  deleteAction: null,
  updateAction: null,
  content: null,
  editMode: false,
  deleteMode: false,

  actions: {
    cancelDelete() {
      this.set('deleteMode', false)
    },
    deleteMe() {
      this.sendAction('deleteAction', this.get('content'));
      this.set('deleteMode', false);
    },
    deleteMeConfiramtion() {
      this.set('deleteMode', true);
    }
  }
});
