 angular.module('formApp', ['ngTagsInput'])
  .controller('formCtrl', function($scope,$http) {


$scope.date = {
         value: new Date(2013, 9, 22)
       };
    





	$scope.rule = [
		{id: 1,name:'A'},
		{id: 2,name:'B' },
		{id: 3,name:'C' },
		{id: 4,name:'D' },
		{id: 5,name:'E' },
	

	];



 $scope.tags = [
            { text: 'just' },
            { text: 'some' },
            { text: 'cool' },
            { text: 'tags' }
          ];
          $scope.loadTags = function(query) {
            return $http.get('/tags?query=' + query);
          };



    });
