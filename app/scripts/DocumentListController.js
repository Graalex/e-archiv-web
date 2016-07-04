import angular from 'angular';

export default ($scope, $stateParams, $resource) => {
	$scope.documents = [];
	const ls = $stateParams.ls;

	$resource('http://localhost\\:9000/api/v1.0/ls/' + ls + '/documents')
	.query(res => {
		const documents = res[0];
		angular.forEach(documents, doc => {
			const buf = new Uint8Array(doc.Source.data);
			const blob = new Blob([buf], {type: 'image/jpeg'});
			const src = URL.createObjectURL(blob);

			$scope.documents.push({
				name: doc.Name,
				createAt: doc.CreateAt,
				path: src
			});
		});
	});

};
