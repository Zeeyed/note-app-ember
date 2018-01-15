import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['list-group-item'],
  deleteAction: null,
  content: null,
  actions: {
    deleteMe() {
      this.sendAction('deleteAction', this.get('content'));
    }
  }
});
