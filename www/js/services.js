angular.module('starter.services', [])


.factory('http', ['$http', function ($http) {
        "use strict";
        return {
            register: function (data) {
                return $http.post("http://www.nuwn.net/schoolapi/register.php", data,{
                                  headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}  );
            },
            login: function (data) {
                return $http.post('http://www.nuwn.net/schoolapi/login.php', data, {
                                  headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}  );
            }  
        };
}]);