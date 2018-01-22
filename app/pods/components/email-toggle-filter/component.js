import Ember from 'ember';

export default Ember.Component.extend({
    checked: false,

    actions: {
        checkBoth(value) {
            this.sendAction('filterAction', 'checked', value.target.checked)
        }
    }
});
