(function() {
  "use strict";

  angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.itemString = "";
    $scope.resultString;
    $scope.resultadoOk = null;

    $scope.checkItems = function() {
      if($scope.itemString.length > 0) {
        console.log("Items introducidos: " + $scope.itemString);
        var itemArray = $scope.itemString.split(",");
        console.log("El item es un array: " + itemArray);

        $scope.resultString = checkItemCount(itemArray);
        $scope.resultadOk = true;
      }
      else
      {
        $scope.resultString = "Porfavor Ingrese Alimentos";
        $scope.resultadOk = false;
      }
    };
  }
  function checkItemCount(items) {
    var itemCount = items.length;
    console.log("Numero de Items ingresados : " + itemCount);
    if(itemCount < 4)
      return "Disfruta!";
    else
      return "Es mucho, te hara mal :c";
  }
})();