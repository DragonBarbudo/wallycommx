var app = angular.module('dw3', [
  'ng-backstretch',
  'ngSwipebox',
  'tooltipster',
  'duScroll',
  'slickCarousel'
]);

app.config(function(){

});


app.run(function(){

});


app.controller('MainCtrl', function($scope){

  $scope.headerClass = 'green';
  $scope.slickConfig={
    event:{
      beforeChange : function(event, slick, currentslide, nextSlide){
        switch(nextSlide){
          case 0: $scope.headerClass = 'green'; break;
          case 1: $scope.headerClass = 'cian'; break;
          case 2: $scope.headerClass = 'yellow'; break;
          console.log($scope.headerClass);
        }
      }
    }
  };
});



angular.module("ngSwipebox").run(["$templateCache", function($templateCache) {$templateCache.put("swipebox.html","<div ng-repeat=\'photo in photos\'>\n        <a ng-href=\'{{ photo.href }}\' class=\'swipebox\' title=\'{{ photo.title }}\'>\n            <img ng-src=\'{{ photo.src }}\' alt=\'image\'>\n        </a>\n    </div>\n");}]);



app.controller('FormCtrl', function($scope, $http){
  $scope.sent = false;
  $scope.submitForm = function(e){
    console.log(e.target);
    var datos = $(e.target).serialize();
    $scope.form = {};

    $http({
      method: 'GET',
      url: 'http://www.dragonbarbudo.com/api/email.php?'+datos
    }).then(function(result){
      if(result.data=="1"){
        console.log('done');
        $scope.sent = true;
      }
    });

  }
});
