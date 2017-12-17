app.get('/api/tables', function (req, res) {
    res.json(allFriends);
});

app.post("/api/tables", function (req, res) {
    var newFriend = req.body;
    //do some shit
    //A POST routes `/api/friends`. This will be used to handle incoming survey results. 
    //This route will also be used to handle the compatibility logic. 

});