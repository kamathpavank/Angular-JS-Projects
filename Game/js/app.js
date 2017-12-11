var app = angular.module("gameApp",[]);

app.controller("GameController",function($scope,$timeout){

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
		//if user enters correct letter again
			for (var i = 0; i < $scope.correctLettersChosen.length; i++) {
				if($scope.correctLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
					$scope.input.letter = "";
					return;
				}
			}

		//if user enters correct letter again
			for (var i = 0; i < $scope.incorrectLettersChosen.length; i++) {
				if($scope.incorrectLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
					$scope.input.letter = "";
					return;
				}
			}

			var correct = false;
			//if entered letter is correct
			for (var i = 0; i <selectedWord.length; i++) {
				if(selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()){
					//make correct letter appear as letter instead of star
					$scope.displayWord = $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);
					correct = true;
				}
			}

			//update chosen arrays
			if(correct){
				$scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
			}
			else{
				$scope.guesses--;
				$scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase())
			}

			$scope.input.letter = "";

			//if all gusses are over
			if($scope.guesses == 0){
				$timeout(function(){
					newGame();
				},500);
			}

			//if all letters are guessed correctly
			if($scope.displayWord.indexOf("*")==-1){
				$timeout(function(){
					newGame();
				},500);
			}


	}

	newGame();
});