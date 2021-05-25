import express from "express"
import { isAdmin, isAuth, requireSignin } from "../controller/auth"
import { read, update, userById, userCheckEmail } from "../controller/user"
const router = express.Router()

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile,
    })
})
router.get("/user/check", userCheckEmail)
router.get("/user/:userId", requireSignin, isAuth, read)
router.put("/user/:userId", requireSignin, isAuth, update)

router.param("userId", userById)

module.exports = router