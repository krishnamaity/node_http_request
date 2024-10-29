const express=require('express');
const router = express.Router();

const employeesCtrl=require('../ctrls/employees.ctrl');


router.get('/:id',employeesCtrl.getById)
router.get('/', employeesCtrl.getAll);
router.delete('/:id',employeesCtrl.delete)
router.post('/',employeesCtrl.create)
router.put('/:id',employeesCtrl.update)

module.exports = router;