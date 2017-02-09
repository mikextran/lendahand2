(function () {
  'use strict';

  angular
    .module('profiles')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Profiles',
      state: 'profiles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown edit item
    Menus.addSubMenuItem('topbar', 'profiles', {
      title: 'Create Profile',
      state: 'profiles.create'
    });

    // Add the dropdown View item
    Menus.addSubMenuItem('topbar', 'profiles', {
      title: 'List Profiles',
      state: 'profiles.list',
      roles: ['user']
    });

  }
}());
