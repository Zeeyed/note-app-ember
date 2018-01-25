import Ember from 'ember';

export default Ember.Component.extend({
    isChecked: false,
    matchAny: false,
    actions: {
        checkBoth(event) {
            let filterMatchAny = this.get('matchAny');
            filterMatchAny = event.target.checked;
            this.sendAction('checkBoth', filterMatchAny);
        },
    }
});
