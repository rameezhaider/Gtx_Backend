const {AddData, GetAllData,DeleteData,EditData,ViewData}= require("../Controller/DataController")

const router = require("express").Router();
router.post("/add-data",AddData)
router.get("/all-data",GetAllData)
router.get("/view-data/:id",ViewData)
router.delete("/delete-data/:id",DeleteData)
router.post("/edit-data",EditData)
module.exports = router;