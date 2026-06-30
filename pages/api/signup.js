// import user from "../../models/user";
// import connect  from "../../midwar/connect";
// import mongoose from "mongoose";
// // import type { NextApiRequest, NextApiResponse } from "next";


// const handler = async (req, res) => {
//   await mongoose.connect(process.env.MONGO_URI);
// //   return handler(req, res);
//   if (req.method == "POST") {
//       console.log(req.body);
//       for (let i = 0; i<req.body.length ; i++){
//           let u = new user({
//                   name : req.body[i].name,
//                   username : req.body[i].username,
//                   email : req.body[i].email,
//                   password : req.body[i].password
//       })
  
//     await u.save()
  
//   }
//   res.status(200).json({ message: "Signup successful"});
//       }
//   else {
//       res.status(405).json({ message: "Method Not Allowed" });
//   }
// };

// export default connect(handler);


// // async function handler(req: NextApiRequest, res: NextApiResponse) {
// // }


// // export default connect(handler);