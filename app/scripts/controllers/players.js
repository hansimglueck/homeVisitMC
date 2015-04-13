'use strict';

/**
 * @ngdoc function
 * @name homeVisitMCApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the homeVisitMCApp
 */
angular.module('homeVisitMCApp')
    .controller('PlayersCtrl', function ($scope, Status, Socket) {
        $scope.socket = Socket;
        $scope.status = Status;

        
        $scope.players = [
            {name: 'player1', top: 10, left: 189, color: '#000000'},
            {name: 'player2', top: 10, left: 377, color: '#000000'},
            {name: 'player3', top: 10, left: 565, color: '#000000'},
            {name: 'player4', top: 10, left: 753, color: '#000000'},
            {name: 'player5', top: 10, left: 941, color: '#000000'},
            {name: 'player6', top: 150, left: 1110, color: '#000000'},
            {name: 'player7', top: 340, left: 1110, color: '#000000'},
            {name: 'player8', top: 490, left: 941, color: '#000000'},
        ];
        
        //
        //$scope.getPlayers = function() {
        //    if (Status.otherPlayers.length == 0) return;
        //    var players = $scope.status.otherPlayers.filter(function(p){return p.joined;});
        //    return players;
        //};
        
        $scope.playback = function(cmd, param) {
            console.log("play clicked");
            Socket.emit({type:"playbackAction", data:cmd, param:param}, function() { console.log('play emitted'); });
        };
        $scope.alert = function() {
            console.log("Alarm clicked");
            Socket.emit({type:"alert"}, function() { console.log('Alarm emitted'); });
        }

   });
