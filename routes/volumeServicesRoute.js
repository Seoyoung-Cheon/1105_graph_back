const router = require("express").Router();
const volumeServicesRoute = require("../controllers/volumeservicesCtrl");

router.get("/volumeServices", volumeServicesRoute.getVolumeServices);

module.exports = router;
