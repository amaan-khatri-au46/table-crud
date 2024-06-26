const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.post("/employees", createEmployee);
router.get("/employees", getAllEmployees);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

module.exports = router;
