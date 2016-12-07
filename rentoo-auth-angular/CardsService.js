app.service('CardsService', ['$http', function($http){
  var self = this;

  self.getCards = function(){
    return $http.get("http://localhost:3000/")
  };

  self.createCard = function(card){
    return $http.post("http://localhost:3000/cards.json", card)
  };

  self.destroyCard = function(id){
    $http.delete("http://localhost:3000/card/" + id).success(function(data){
      console.log(data)
    });
  };

}]);
