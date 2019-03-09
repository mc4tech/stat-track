const axios = require("axios");
// const db = require("../models");

// Defining methods for the nytController

// findAll searches the NYT API and returns only the entries we haven't already saved
module.exports = {
  findAll: function(req, res) {
    const params = Object.assign(
      { sport: "nfl",
        season: "2015-2016-regular",
        stats: "cumulative_player_stats",
        format: "json",
        team: "dallas-cowboys",
        api_key: "project18" + ":" + "SportTrack18"
      },
      // req.query
    );
    axios
      .get("https://api.mysportsfeeds.com/v1.0/pull", {
        params
      })
      .then(response => {
        // db.Article
        //   .find()
        //   .then(dbArticles =>
        //     response.data.response.docs.filter(article =>
        //       dbArticles.every(
        //         dbArticle => dbArticle._id.toString() !== article._id
        //       )
        //     )
        //   )
        //   .then(articles => res.json(articles))
        //   .catch(err => res.status(422).json(err));
        console.log(response);
        console.log("it works");
      });
  }
};
