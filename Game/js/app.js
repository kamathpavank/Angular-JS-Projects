var app = angular.module("gameApp",[]);

app.controller("GameController",function($scope){

	var words = ['cat' , 'rat' , 'bat' , 'mat'];
	$scope.incorrectLettersChosen = [];
	$scope.correctLettersChosen = [];
	$scope.guesses = 6;
	$scope.displayWord='';
	$scope.input = {
		letter : ''
	}

	//function to select random words
	var selectRandomWord = function(){
		var index = Math.round(Math.random() * words.length);
		return words[index];
	}

		//function for new game
	var newGame = function(){

		$scope.incorrectLettersChosen = [];
		$scope.correctLettersChosen = [];
		$scope.guesses = 6;
		$scope.displayWord='';

		selectedWord = selectRandomWord();
		var tempDisplayWord = '';

		//loop to represent word in stars
		for (var i = 0; i < selectedWord.length; i++) {
			tempDisplayWord +='*';

		}
		$scope.displayWord = tempDisplayWord;
	}

	$scope.letterChosen = function(){
			
	}

	newGame();
});