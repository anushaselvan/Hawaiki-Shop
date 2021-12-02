const { Cart } = require("../../models");
// const {withAuth} = require('../../utils/auth');
const router = require("express").Router();

// get all cart items for the user
router.get("/", async (req, res) => {
    // get all the cart items from the table where the user id is the same
    // as that in the session 
    try {
        const userId = req.session.user_id;
        const cartItems = await Cart.findAll({
            where: {
                userId
            }
        })
        res.status(200).json(cartItems)
    } catch (err) {
        res.status(500).json
    }
})

// router.post("/", withAuth, async (req, res) => {
//     // we expect the body to have a cart id
//     console.log(`cartRoutes post hit`, req.body);
//     const productId = req.body
//     const userId = req.session.user_id
//     try {
      
//         const newCartItem = await Cart.create({
//             userId,
//             productId,  
//         })
  
//       console.log()
//       res.render("products", { products });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.put("/", withAuth, async (req, res) => {
//     // we expect the body to have a cart id
//     console.log(`cartRoutes hit`, req.body);
// const cardItemId = ""
//     try {
//         const updatedCartItem = await Cart.update({
//             cardItemId
//         }, {
//             ...req.body
//         })
  
//       console.log()
//       res.render("products", { products });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.delete("/", withAuth, async (req, res) => {
//     // we expect the body to have a cart id
//     console.log(`cartRoutes hit`, req.body);
//     const cardItemId = ""
//     try {
      
//         const updatedCartItem = await Cart.destroy({
//              cardItemId 
//         })
  
//       console.log()
//       res.render("products", { products });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.post("/checkout", async (req, res) => {
//      try {
//          const userId = ""
//          // get the card items and then send and email
//          const cardItems = await Cart.findAll({
//             where: {
//                 userId
//             }
//         })

//         // TODO: send email
//         // nodemailer // recommend
//         // sendgrid 

//         const deletedCartItems = await Cart.destroy({
//             where: {
//                 userId
//             }
//         })
//         res.json({message: "Your order has successfuly been placed!"})
//      }catch( e) {
//          res.status(500).json({message: "Something went wrong"})
//      }
//   })

module.exports = router;