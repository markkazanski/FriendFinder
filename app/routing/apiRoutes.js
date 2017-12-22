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
        for(var i=0; i<newFriend['scores[]'].length;i++){
            newFriend.totalScore += parseInt( newFriend['scores[]'][i] );
        }
        console.log(`New Friend Total Score: ${newFriend.totalScore}`);

        for(var key in friendsArray){
            console.log(friendsArray[key]);
            friendsArray[key].totalScore = 0;
            for(var j=0; j<friendsArray[key].scores.length; j++){
                friendsArray[key].totalScore += parseInt( friendsArray[key].scores[j] );
            }
            console.log( `${friendsArray[key].name} total score: ${friendsArray[key].totalScore} `);
        }
    });
};