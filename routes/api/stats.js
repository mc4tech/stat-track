const router = require("express").Router():
const statController = require("../../controllers/statController");


//Matches with "/api/stats"
router.route("/").get();

module.exports = router;
