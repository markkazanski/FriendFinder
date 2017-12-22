var friendsArray =  require("../data/friends.js");

module.exports = function(app){
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        //do some shit
        //A POST routes `/api/friends`. This will be used to handle incoming survey results. 
        //This route will also be used to handle the compatibility logic. 
        console.log(newFriend);
        newFriend.totalScore =0;
        for(var i=0; i<newFriend['scores'].length;i++){ //calculate new score
            newFriend.totalScore += parseInt( newFriend['scores'][i] );
        }
        console.log(`New Friend Total Score: ${newFriend.totalScore}`);

        friendsArray.push(newFriend);

        var closestMatch = { index:null, difference:50  };

        for(var key in friendsArray){ //calculate score for all friends
            console.log(friendsArray[key]);
            friendsArray[key].totalScore = 0;
            for(var j=0; j<friendsArray[key].scores.length; j++){
                friendsArray[key].totalScore += parseInt( friendsArray[key].scores[j] );
            }
            console.log( `${friendsArray[key].name} total score: ${friendsArray[key].totalScore} `);
            
            var difference = Math.abs(friendsArray[key].totalScore - newFriend.totalScore);

            if( difference < closestMatch.difference ){ //make the lowest difference friend the match
                closestMatch.difference = difference;
                closestMatch.index = key;
            }
        }

        console.log(`Your closest match: ${closestMatch.index}`);

        res.json( friendsArray[ closestMatch.index ]);
    });
};