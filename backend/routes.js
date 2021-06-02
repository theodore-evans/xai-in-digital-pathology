let router = require("express").Router();
const survey = require("./database");

router.post("/result", async (req, res) => {
  const parsed_survey = new survey(req.body);
  await parsed_survey.save();
});

module.exports = router;
