(function () {
  'use strict';

  angular
    .module('posts')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('posts', {
        abstract: true,
        url: '/posts',
        template: '<ui-view/>'
      })
      .state('posts.list', {
        url: '',
        templateUrl: 'modules/posts/client/views/list-posts.client.view.html',
        controller: 'PostsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Posts List'
        }
      })
      .state('posts.create', {
        url: '/create',
        templateUrl: 'modules/posts/client/views/form-post.client.view.html',
        controller: 'PostsController',
        controllerAs: 'vm',
        resolve: {
          postResolve: newPost
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Posts Create'
        }
      })
      .state('posts.edit', {
        url: '/:postId/edit',
        templateUrl: 'modules/posts/client/views/form-post.client.view.html',
        controller: 'PostsController',
        controllerAs: 'vm',
        resolve: {
          postResolve: getPost
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Post {{ postResolve.name }}'
        }
      })
      .state('posts.view', {
        url: '/:postId',
        views: {
          '@' : {
            templateUrl: 'modules/posts/client/views/view-post.client.view.html',
            controller: 'PostsController',
            controllerAs: 'vm',
            resolve: {
              postResolve: getPost
            }
          },
          'replies@posts.view' : {
            templateUrl: 'modules/replies/client/views/list-replies.client.view.html',
            controller: 'RepliesController',
            controllerAs: 'vm'
          }
        }
      });
  }

  getPost.$inject = ['$stateParams', 'PostsService'];

  function getPost($stateParams, PostsService) {
    return PostsService.get({
      postId: $stateParams.postId
    }).$promise;
  }

  newPost.$inject = ['PostsService'];

  function newPost(PostsService) {
    return new PostsService();
  }
}());
