(function (angular, $) {
  'use strict';

  angular.module('ngSwipebox', [])
    .directive('wallySwipebox', ['$timeout', function ($timeout) {
      return {
        restrict: 'A',
        scope: {
          wallySwipebox: '=',
          swipeboxIndex: '@'
        },
        link: function (scope, element) {
          element.on('click', function (event) {
            var photos = scope.wallySwipebox || [];
            var index = parseInt(scope.swipeboxIndex, 10) || 0;

            if (!$.swipebox || !photos.length) {
              return;
            }

            event.preventDefault();
            event.stopPropagation();

            scope.$applyAsync(function () {
              $.swipebox(photos, {
                initialIndexOnArray: index
              });
            });
          });

          scope.$on('$destroy', function () {
            element.off('click');
          });
        }
      };
    }])
    .directive('ngSwipebox', ['$timeout', function ($timeout) {
      return {
        restrict: 'EA',
        scope: {
          photos: '='
        },
        templateUrl: 'swipebox.html',
        link: function (scope, element) {
          function initSwipebox() {
            $timeout(function () {
              var links = element.find('a[data-wally-swipebox]');
              if (links.length && $.fn.swipebox) {
                links.swipebox();
              }
            });
          }

          scope.$watchCollection('photos', initSwipebox);
          initSwipebox();
        }
      };
    }]);
})(window.angular, window.jQuery);
