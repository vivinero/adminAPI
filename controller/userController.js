const userModel = require("../model/userModel")

exports.home = async (req, res)=>{
    console.log("Welcome to Admin API")
}

exports.createUser = async (req, res)=> {
    try {

        const createUser = await userModel.create(req.body)
        if (!createUser) {
            res.status(401).json({
                message: `unable to create new user`
            })
        }else{
            res.status(200).json({
                message: `user created successfully`,
                createUser,
            })
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.getOne = async (req, res) => {
    const id = req.params.id
    try {
        const oneUser =  await userModel.findById(id).select(["userName", "name", "age"]);
        if (!oneUser) {
            res.status(404).json({
                message: `user not found`
            })
        }else{
            res.status(200).json({
                message: `data found`,
                oneUser
            })
        }
    } catch (error) {
        res.status(404).json(`${error.message}`)
    }
}

exports.getAll = async (req, res)=>{
    try {
        const allUser = await userModel.find().select(["name", "age"])
        if (allUser.length === 0) {
            res.status(200).json({
                message: "no user created"
            })
        } else {
            res.status(200).json({
                message: `you have ${allUser.length} existing user`,
                allUser
            });
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

//make an admin 
exports.makeUserAdmin = async (req, res) => {
    const id = req.params.id
    const user = await userModel.findById(id)
    const isAdmin = user.isAdmin
    const convertToAdmin = await userModel.findByIdAndUpdate(id,{isAdmin: true}, {new: true})
    if (!convertToAdmin) {
        res.status(404).json({
            message: `unable to make ${user}admin`
        })
    }else{
        res.status(200).json({
            message: `updated successfully`,
            isAdmin,
    })
}
}
//update user
exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const adminId = req.params.ide
        const admin = await userModel.findById(adminId)
        const updateUser = await userModel.findByIdAndUpdate(userId,req.body,{new:true})
        if (admin.isAdmin === false) {
            res.status(400).json("not an admin")
        }else if(!updateUser){
            res.status(404).json("id not found")
        }
        else{
            res.status(200).json({
                message: `updated successfully`,
                updateUser
            })
        }
    } catch (error) {
        res.json(error.message)
    }
}

