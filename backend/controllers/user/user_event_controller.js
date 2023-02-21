const user_event_schema = require("../../schema/user/user_event");
// const CryptoJS = require("crypto-js");
const user_event = async (req, res) => {
  const { Name, Roll_no, Class, House, Activity_name } = req.body;
  try {
  
    const existing_student = await user_event_schema.findOne({
      Roll_no: Roll_no,
      Class: Class
    });
    if (existing_student) {
      res.status(400).json({ message: "Already Registered" });
    }

   

    const new_student = new user_event_schema(req.body);

    const store = await new_student.save();
    

    res.status(201).json({
      sucess: true,
      message: "Registration is done successfully",
      result: store,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

const view_participant = async(req,res)=>{
  user_event_schema.find((error , result)=>{
      if(error){
          console.log(error)
          res.status(500).json({error : error})
      }
      res.status(201).json(result)
  })
}
module.exports = {user_event , view_participant};



// const event_schema = require("../schema/event");
// const CryptoJS = require("crypto-js");
// const event = async (req, res) => {
//   const { name, roll_nos, class_name, house_name, activity_name } = req.body;
//   try {
//     // var bytes_roll_nos = CryptoJS.AES.decrypt(encrypt_roll_nos,process.env.CRYPTO_SECRET_KEY)
//     // var decrypt_roll_nos = JSON.parse(bytes_roll_nos.toString(CryptoJS.enc.Utf8));
//     // var bytes_class_name = CryptoJS.AES.decrypt(encrypt_class_name,process.env.CRYPTO_SECRET_KEY)
//     // var decrypt_class_name = JSON.parse(bytes_class_name.toString(CryptoJS.enc.Utf8));
//     const existing_student = await event_schema.findOne({
//       roll_nos: roll_nos,
//       class_name: class_name,
//     });
//     if (existing_student) {
//       res.status(400).json({ message: "Already Registered" });
//     }

//     const encrypt_name = CryptoJS.AES.encrypt(
//       JSON.stringify(name),
//       process.env.CRYPTO_SECRET_KEY
//     ).toString();
//     const encrypt_roll_nos = CryptoJS.AES.encrypt(
//       JSON.stringify(roll_nos),
//       process.env.CRYPTO_SECRET_KEY
//     ).toString();
//     const encrypt_class_name = CryptoJS.AES.encrypt(
//       JSON.stringify(class_name),
//       process.env.CRYPTO_SECRET_KEY
//     ).toString();
//     const encrypt_house_name = CryptoJS.AES.encrypt(
//       JSON.stringify(house_name),
//       process.env.CRYPTO_SECRET_KEY
//     ).toString();
//     const encrypt_activity_name = CryptoJS.AES.encrypt(
//       JSON.stringify(activity_name),
//       process.env.CRYPTO_SECRET_KEY
//     ).toString();

//     const new_student = new event_schema({
//       name: encrypt_name,
//       roll_nos: encrypt_roll_nos,
//       class_name: encrypt_class_name,
//       house_name: encrypt_house_name,
//       activity_name: encrypt_activity_name,
//     });

//     const store = await new_student.save();
    

//     res.status(201).json({
//       sucess: true,
//       message: "Registration is done successfully",
//       // result: store,
//       // token: token,
     

//       result: store,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error });
//   }
// };
// module.exports = event;
