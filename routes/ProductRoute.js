const express =require('express');
const productController =require('../controller/ProductController');
const verifyUser=require('../middleware/AuthMiddleware');

const router = express.Router();

router.post('/create',verifyUser,productController.create);
router.get('/find-by-id',verifyUser,productController.findById);
router.delete('/delete-by-id',verifyUser,productController.deleteById);
router.put('/update',verifyUser,productController.update);
router.get('/find-all',verifyUser,productController.findAll);

module.exports=router;