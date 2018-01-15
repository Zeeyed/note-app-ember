import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['row'],
  deleteAction: null,
  updateAction: null,
  content: null,
  email: '',

  actions: {
    cancel() {
      this.set('editMode', false);
      this.set('email', '');
    },
    save() {
      this.set('editMode', false),
      this.sendAction('updateAction', this.get('content.email'), this.getProperties('email'));
    },
    deleteMe() {
      this.sendAction('deleteAction', this.get('content'));
    },
    editMe() {
      this.set('editMode', true);
      this.set('email', this.get('content.email'));
    }
  }
});
