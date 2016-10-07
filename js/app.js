var app = angular.module('devmtnTravel', ['ui.router']);
    app
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:'adventurers',
                parent:'home',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('contact',{
                url:'/contact',
                parent:'home',
                templateUrl: "../views/contact.html"
            })
            .state('packages',{
                url:'/packages/:state',
                templateUrl: "../views/packages.html",
                controller: 'packagesCtrl',
                controllerAs: 'vm'
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl',
                controllerAs: 'vm'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl',
                controllerAs: 'vm'
            })
            .state('about', {
                url:'/about',
                templateUrl: "../views/about.html"
            });

        $urlRouterProvider
            .otherwise('/');
    });
