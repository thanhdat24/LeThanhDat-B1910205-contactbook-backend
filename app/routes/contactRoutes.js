const express = require("express");
const contacts = require("../controllers/contactController");

const router = express.Router();

router
  .route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);

router.route("/favorite").get(contacts.findAllFavorite);

router.route("/favorite-by-phone").get(contacts.findFavoriteByPhone);

router
  .route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;
