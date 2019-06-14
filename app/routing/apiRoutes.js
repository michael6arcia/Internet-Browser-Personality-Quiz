var browsers = require("../data/browsers.js");

module.exports = function (app) {

    app.get("/api/browsers", function (req, res) {
        res.json(browsers);
    });

    app.post("/api/browsers", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            browserDifference: Infinity
        };

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference;

        for (var i = 0; i < browsers.length; i++) {
            var currentPick = browsers[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            for (var j = 0; j < currentPick.scores.length; j++) {
                var currentBrowserScore = currentPick.scores[j];
                var currentUserScore = userScores[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentBrowserScore));
            }

            if (totalDifference <= bestMatch.browserDifference) {
                bestMatch.name = currentPick.name;
                bestMatch.photo = currentPick.photo;
                bestMatch.browserDifference = totalDifference;
            }
        }

        browsers.push(userData);

        res.json(bestMatch);
    });
};
