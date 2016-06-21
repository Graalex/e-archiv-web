import angular from 'angular';
import animate from 'angular-animate';
import aria from 'angular-aria';
import mat from 'angular-material';

angular.module('ArchivApp', ['ngMaterial'])
	.config($mdThemingProvider => {
		$mdThemingProvider.theme('default')
			.primaryPalette('green')
			.accentPalette('orange')
	});
