//import user from "server/models/user";
//import { hashPassword, comparePassword } from "server/utils/auth";

export const authen = async (req,res) => {
try{


    const{name,email,password} = req.body
    //validation
    if(!name) return res.status(400).send("Name is required");
    if (!password || password.lengh < 6){
        return res 
        .status(400)
        .send("Password is required and be min 6 charachter")
    }
    let userExist = await UserDropdown.findOne({email}).exec();
    if(userExist) return res.status(400).send("email is taken");

    //hash password

    const hashedPassword = await hashPassword(password);

    //register

    const user = await new User({

        name,
        email,
        password
    }).save();
    console.log("user saved", user);
    return res.json({ok:true});


}catch(err){

    console.log(err);
    return res.status(400).send("error. TRY AGAIN");
}



}