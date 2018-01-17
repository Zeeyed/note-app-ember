# Ember Note Application
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
- [x] Make the newsletter form as a new component.  
- [x] Invite Me button should be inactive when input box is empty.
- [x] Invite Me button should be inactive when the content in the input box is not a valid email address.
- [x] Show a response message after clicking on button.
- [x] Clear input box after sending invitation.
- [x] Add contact page with a form
- [x] Send message button should be active if email address is valid and the message in the textarea is greater than 5.
- [x] Create Invitation service to persist the emails
- [x] Create Email List Component
- [x] Create Email List Item Component (Child component of previous one)
- [x] Add update button to edit each email
- [x] Change buttons to save and cancel once we edit email
- [x] We handle input visibility of edit action using `editMode` prop.
- [x] Whenever you delete an email, you will get confirmation buttons(yes/no).
- [x] Click on edit, shows a details section (email-detail component)
- [x] Move the details to the right
- [ ] Add name and company property to model