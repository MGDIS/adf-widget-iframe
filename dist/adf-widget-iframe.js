(function(window, undefined) {'use strict';


angular.module('adf.widget.iframe', ['adf.provider'])
  .config(["dashboardProvider", function(dashboardProvider){
    dashboardProvider
      .widget('iframe', {
        title: 'iframe',
        description: 'Embed an external page into the dashboard',
        templateUrl: '{widgetsPath}/iframe/src/view.html',
        controller: 'iframeController',
        controllerAs: 'iframe',
        edit: {
          templateUrl: '{widgetsPath}/iframe/src/edit.html'
        },
        config: {
          height: '420px'
        }
      });
  }])
  .controller('iframeController', ["$scope", "$sce", "config", function($scope, $sce, config){
    $scope.$emit('widgetReady', $scope.config);
    if (config.url){
      this.url = $sce.trustAsResourceUrl(config.url);
    }
  }]);

angular.module("adf.widget.iframe").run(["$templateCache", function($templateCache) {$templateCache.put("{widgetsPath}/iframe/src/edit.html","<form role=form><div class=form-group><label for=url>{{config.namespace + \'.iframe.url\' | translate}}</label> <input type=url class=form-control id=url ng-model=config.url placeholder=\"{{config.namespace + \'.iframe.placeholder\' | translate}}\"></div><div class=form-group><label for=url>{{config.namespace + \'.iframe.height\' | translate}}</label> <input type=text class=form-control id=url ng-model=config.height></div></form>");
$templateCache.put("{widgetsPath}/iframe/src/view.html","<div><div class=\"alert alert-info\" ng-if=!config.url>{{config.namespace + \'.iframe.noUrl\' | translate}}</div><iframe ng-if=iframe.url class=adf-iframe style=\"height: {{config.height}}\" ng-src={{iframe.url}}></iframe></div>");}]);})(window);