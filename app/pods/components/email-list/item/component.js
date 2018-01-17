import Ember from 'ember';

export default Ember.Component.extend({
  deleteAction: null,
  updateAction: null,
  content: null,
  editMode: false,
  deleteMode: false,
  email: '',

  actions: {
    // cancel() {
    //   this.set('editMode', false);
    //   this.set('email', '');
    // },
    cancelDelete() {
      this.set('deleteMode', false)
    },
    // save() {
    //   this.set('editMode', false),
    //   this.sendAction('updateAction', this.get('content.email'), this.getProperties('email'));
    // },
    deleteMe() {
      this.sendAction('deleteAction', this.get('content'));
      this.set('deleteMode', false);
    },
    deleteMeConfiramtion() {
      this.set('deleteMode', true);
    },
    // editMe() {
    //   this.set('editMode', true);
    //   this.set('deleteMode', false);
    //   this.set('email', this.get('content.email'));
    // }
  }
});
