'use strict';

angular.module('csjsApp', [])
  .controller('MemberCtrl', function ($scope, $http) {

    $http
      .jsonp('http://api.meetup.com/2/members?order=name&group_urlname=coloradospringsjs&offset=0&format=json&page=500&sig_id=13964577&sig=c131f5e3e85388742f0ddae55b000657399eb9c1&callback=JSON_CALLBACK')
      .success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.members = data;
        console.log(data, 'success');
      })
      .error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data);
      });

  });