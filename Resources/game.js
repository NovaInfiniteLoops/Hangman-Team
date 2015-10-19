var app = angular.module('game', ['ui.bootstrap']);
  app.controller("hangman", ["$scope", function ($scope) {
    $scope.state = 0;
    $scope.word = [
      {letter: "H", visible: false},
      {letter: "E", visible: false},
      {letter: "L", visible: false},
      {letter: "L", visible: false},
      {letter: "O", visible: false}
    ];

    $scope.states = [
      "./Resources/hangman1.gif",
      "./Resources/hangman2.gif",
      "./Resources/hangman3.gif",
      "./Resources/hangman4.gif",
      "./Resources/hangman5.gif",
      "./Resources/hangman6.gif",
      "./Resources/hangman7_dead.gif"
    ];

    $scope.alphabet = [
      {letter: "A", visible: true},
      {letter: "B", visible: true},
      {letter: "C", visible: true},
      {letter: "D", visible: true},
	    {letter: "E", visible: true},
	    {letter: "F", visible: true},
      {letter: "G", visible: true},
      {letter: "H", visible: true},
      {letter: "I", visible: true},
	    {letter: "J", visible: true},
	    {letter: "K", visible: true},
      {letter: "L", visible: true},
      {letter: "M", visible: true},
      {letter: "N", visible: true},
	    {letter: "O", visible: true},
  	  {letter: "P", visible: true},
      {letter: "Q", visible: true},
      {letter: "R", visible: true},
      {letter: "S", visible: true},
	    {letter: "T", visible: true},
      {letter: "U", visible: true},
      {letter: "V", visible: true},
      {letter: "W", visible: true},
      {letter: "X", visible: true},
	    {letter: "Y", visible: true},
	    {letter: "Z", visible: true}
    ];


    $scope.clicked = function (idx) {
      console.log("clicked",idx);
      $scope.alphabet[idx].visible = false;
      var found = false;
      for(var i = 0; i < $scope.word.length; i++) {
        if ($scope.alphabet[idx].letter === $scope.word[i].letter) {
          $scope.word[i].visible = true;
          found = true;
        }
      }
      if (!found) {
        $scope.state += 1;
      }
    };


    $scope.stateImg = function () {
      return $scope.states[$scope.state];
    };

  }]);

  app.controller("discard_pile", ["$scope", function ($scope) {
    $scope.letters = letters = [
      {letter: "A", visible: true},
      {letter: "B", visible: true},
      {letter: "C", visible: false},
      {letter: "D", visible: true}
    ];
  }]);
