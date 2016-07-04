import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-resource';
import HomeController from './HomeController.js';
import FindAbonentController from './FindAbonentController.js';
import AbonentListController from './AbonentListController.js';
import AbonentInfoController from './AbonentInfoController.js';
import DocumentListController from './DocumentListController.js';

/*
angular.element(
	document.getElementsByTagName('head')
)
.append(
	angular.element('<base href="' + window.location.pathname + '" />')
);
*/

angular.module('ArchivApp', ['ui.router', 'ngMaterial', 'ngResource'])
.config(['$mdThemingProvider', $mdThemingProvider => {
	$mdThemingProvider
	.theme('default')
	.primaryPalette('green')
	.accentPalette('orange');
}])
.config(['$stateProvider', $stateProvider => {
	$stateProvider
	.state('home',
		{
			url: '/',
			templateUrl: '/tmpl/home.html',
			controller: HomeController
		}
	)
	.state('documents',
		{
			url: '/documents',
			views: {
				'': {
					templateUrl: '/tmpl/documents.html'
				},
				'find@documents': {
					templateUrl: '/tmpl/find-abonent.html',
					controller: FindAbonentController
				},
				'list@documents': {
					templateUrl: '/tmpl/abonents.html',
					controller: AbonentListController
				}
			}
		}
	)
	.state('document-ls',
		{
			url: '/documents/ls/{ls:int}',
			views: {
				'': {
					templateUrl: '/tmpl/document-ls.html'
				},
				'abonent@document-ls': {
					templateUrl: '/tmpl/abonent-info.html',
					controller: AbonentInfoController
				},
				'list@document-ls': {
					templateUrl: '/tmpl/document-list.html',
					controller: DocumentListController
				}
			}
		}
	);
}])
.config(['$urlRouterProvider', $urlRouterProvider => {
	$urlRouterProvider.otherwise('/');
}]);
/*
.config(['$locationProvider', $locationProvider => {
	$locationProvider.html5Mode(true);
}]);
*/




