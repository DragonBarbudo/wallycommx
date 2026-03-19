


var app = angular.module('dw4', [
  'ng-backstretch',
  'ngBox',
  'tooltipster',
  'duScroll',
  'slickCarousel',
  'ngSwipebox'
]);



app.run(function(){

});


app.controller('MainCtrl', function($scope){

  $scope.headerClass = 'green';
  $scope.galleryPhotos = [
    { src: 'app/img/gal/f1.jpg', href: 'app/img/gal/f1.jpg' },
    { src: 'app/img/gal/f2.jpg', href: 'app/img/gal/f2.jpg' },
    { src: 'app/img/gal/f3.jpg', href: 'app/img/gal/f3.jpg' },
    { src: 'app/img/gal/f4.jpg', href: 'app/img/gal/f4.jpg' },
    { src: 'app/img/gal/f5.jpg', href: 'app/img/gal/f5.jpg' },
    { src: 'app/img/gal/f6.jpg', href: 'app/img/gal/f6.jpg' },
    { src: 'app/img/gal/f7.jpg', href: 'app/img/gal/f7.jpg' }
  ];
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
app.controller('FormCtrl', function($scope, $http){
  $scope.sent = false;
  $scope.submitError = false;
  $scope.submitForm = function(e){
    var datos = $(e.target).serialize();
    $scope.form = {};
    $scope.submitError = false;
    $http({
      method: 'GET',
      url: 'https://www.dragonbarbudo.com/api/email.php?' + datos
    }).then(function(result){
      if(result.data == "1"){
        $scope.sent = true;
      } else {
        $scope.submitError = true;
      }
    }, function(){
      $scope.submitError = true;
    });

  };
});




  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-30012102-1');



/* OTHER CODES */
/* http://embed.plnkr.co/UAELQkmh18RVDn1cOAaW/ */
angular.module("tooltipster",[]).directive('tooltip', function () {
    return {
      restrict: 'C',
      link: function (scope, element, attrs) {
        $(element).tooltipster({
          animation: attrs.animation
        });
      }
    };
  });

/* NgBox */
angular.module("ngBox",[]).directive("ngBox",["$timeout",function(a){return{restrict:"C",scope:{useCss:"=",useSvg:"=",initialIndexOnArray:"=",removeBarsOnMobile:"=",hideCloseButtonOnMobile:"=",hideBarsDelay:"=",videoMaxWidth:"=",vimeoColor:"=",loopAtEnd:"=",autoplayVideos:"=",queryStringData:"=",toggleClassOnLoad:"=",beforeOpen:"&beforeOpen",afterOpen:"&afterOpen",afterClose:"&afterClose",nextSlide:"&nextSlide",prevSlide:"&prevSlide"},link:function(b){var c;return t={useCSS:b.useCss,useSVG:b.useSvg,initialIndexOnArray:b.initialIndexOnArray||0,removeBarsOnMobile:b.removeBarsOnMobile,hideCloseButtonOnMobile:b.hideCloseButtonOnMobile||!1,hideBarsDelay:b.hideBarsDelay||3e3,videoMaxWidth:b.videoMaxWidth||1140,vimeoColor:b.vimeoColor||"cccccc",loopAtEnd:b.loopAtEnd||!1,autoplayVideos:b.autoplayVideos||!1,queryStringData:b.queryStringData||{},toggleClassOnLoad:b.toggleClassOnLoad||"",beforeOpen:b.beforeOpen||function(){},afterOpen:b.afterOpen||null,afterClose:b.afterClose||function(){},nextSlide:b.nextSlide||null,prevSlide:b.prevSlide||null},a(function(){angular.element(".ng-box").swipebox(c)})}}}]);



angular.module("ngSwipebox").run(["$templateCache", function($templateCache) {$templateCache.put("swipebox.html","<div ng-repeat=\'photo in photos\'>\n        <a ng-href=\'{{ photo.href }}\' class=\'swipebox\' title=\'{{ photo.title }}\'>\n            <img ng-src=\'{{ photo.src }}\' alt=\'image\'>\n        </a>\n    </div>\n");}]);


var promoOpen = document.getElementById('promoopen');
if (promoOpen) {
  promoOpen.addEventListener('click', function () {
    if (this.classList.contains('closed')) {
      this.classList.remove('closed');
    } else {
      this.classList.add('closed');
    }
  });
}
