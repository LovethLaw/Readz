
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json({ status: "User Route" });
});

module.exports = router;
