app.controller("bookedCtrl", function($scope, mainSrv, $state) {
  console.log("$state.params", $state.params.id);

  var travelInfo = mainSrv.travelInfo;
  for(var i = 0; i < travelInfo.length; i++) {
    if(String(travelInfo[i].id) === $state.params.id) {
      $scope.package = travelInfo[i];
    }
  }
})
