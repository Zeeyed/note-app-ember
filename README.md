# note App Ember
Note App build with Ember.js
- [x] Create first static page with Ember.js
- [x] Add Material-UI npm package
- [x] Install Sass and Bootstrap add-ons using [Ember add-ons](https://www.emberaddons.com/)
    ember install ember-cli-sass
    ember install ember-cli-bootstrap-sassy
- [x] Install sass and bootstrap, add @import "bootstrap" to app.scss and remove app.css
    ember install ember-cli-sass && ember install ember-cli-bootstrap-sassy && echo '@import "bootstrap";' > ./app/styles/app.scss && rm ./app/styles/app.css
- [x] `outlet`: almost all content from other pages will appear inside this section.
- [x] List all the Ember cli options
    ember g --help
- [x] `{{#link-to}}`: Block helpers that helps create links.
⋅⋅* First param: route name
⋅⋅* Inside the block goes the label
- [x] Generate About page `ember g route about`
- [x] Use Ember Pods: A way of structuring project by feature, instead of type. 
