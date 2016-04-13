 var userRouter = require('express').Router();
 var userController = require('../controllers/userController.js');

userRouter.route('/') // to all users (/api/users/)
  .get(userController.retrieveAll)
  .post(userController.createOne);

userRouter.route('/login') // to all users (/api/users/login)
  .post(userController.verifyLogin);


userRouter.route('/:user_id') // to one specific user (/api/users/:user_id)
  .put(userController.updateOne)
  .delete(userController.deleteOne);

 module.exports = userRouter;