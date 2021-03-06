angular.module('SearchCtrl', []).controller('SearchController', function($scope, $http, ApiService, ModalService){

    $scope.query = null;
    $scope.results = null;
    $scope.error = null;


    $scope.showModal = function(id) {
 
        ModalService.showModal({
          templateUrl: "../../views/modal.html",
          controller: "ModalCtrl",
          inputs: {
            id: id
          }
        }).then(function(modal) {
          modal.element.modal();
          modal.close();
        });
    };   


    $scope.search = function(){
        ApiService.search($scope.query, function(err, results){
            if(err){
                console.log("error");
                $scope.error = err.error.message;
            }
            $scope.results = results;
        });
    };
	
});