function matchWinner(
    teamOneGoalsInGameOne, // home 
    teamTwoGoalsInGameOne, // away
    teamOneGoalsInGameTwo,  // away
    teamTwoGoalsInGameTwo) { //home

        var totalGoalsTeamOne = teamOneGoalsInGameOne + teamOneGoalsInGameTwo;
        var totalGoalsTeamTwo = teamTwoGoalsInGameOne + teamTwoGoalsInGameTwo;
        
        if (totalGoalsTeamOne > totalGoalsTeamTwo) {
            return 1;
        } else if (totalGoalsTeamOne < totalGoalsTeamTwo) {
            return 2;
        } else if (totalGoalsTeamOne == totalGoalsTeamTwo) {
            if (teamOneGoalsInGameTwo > teamTwoGoalsInGameOne) {
                return 1;
            } else if (teamOneGoalsInGameTwo < teamTwoGoalsInGameOne) {
                return 2;
            } else if (teamOneGoalsInGameTwo == teamTwoGoalsInGameOne) {
                return 0;
            }
        }
}

