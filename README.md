# note App Ember
Note App build with Ember.js
- [x] Create first static page with Ember.js
- [x] Add Material-UI npm package
- [x] Install Sass and Bootstrap add-ons using [Ember add-ons](https://www.emberaddons.com/)
    ember install ember-cli-sass
    ember install ember-cli-bootstrap-sassy
- [x] Install sass and bootstrap, add @import "bootstrap" to app.scss and remove app.css
    ember install ember-cli-sass && ember install ember-cli-bootstrap-sassy && echo '@import "bootstrap";' > ./app/styles/app.scss && rm ./app/styles/app.css
- [x] Usage of `outlet` almost all content from other pages will appear inside this section.
- [ ] List all the Ember cli options
    ember g --help