// package metadata file for Meteor.js

Package.describe({
  name: 'snapappointments:bootstrap-select',  // https://atmospherejs.com/snapappointments/bootstrap-select
  summary: 'bootstrap-select (official): enhance select elements with intuitive multiselection, searching & more',
  version: '1.13.0-beta',
  git: 'https://github.com/snapappointments/bootstrap-select.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/bootstrap-select.css',
    'dist/js/bootstrap-select.js'
  ], 'client');
});