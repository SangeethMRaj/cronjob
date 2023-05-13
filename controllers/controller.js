const userModal = require('../Modal/userModal')

module.exports={
    addUser:(req,res)=>{
        console.log(req.body);
        const user = new userModal({
            username:req.body.username,
            email:req.body.email
        })
        user.save()
        res.json({msg:'user is created'})
    }
}