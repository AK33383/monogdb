
const { userModel,goalModel,ObjectId }= require('../model/models')


const userPage = (req,res) => {

    const userdata = new userModel({
        username:req.body.username,
        email:req.body.email
    })

    const data=userdata.save().then(result => res.send(result)).catch(err => res.send(err))
    


}

const goalPage = (req,res) => {

    const goaldata = new goalModel({

        username:new ObjectId(req.body.username),
        goal:req.body.goal
    })

    goaldata.save().then(result => res.send(result)).catch(err => res.send(err))
}

const homePage = (req,res) => {
    res.send('welcome to Homepage')
}

const getuserdetail = (req, res) => {
    goalModel.findOne({ goal: 'complete today task' })
      .populate('username') // Populate the 'username' field with User documents
      .exec()
      .then((post) => {
        console.log(post);
        // The 'username' field will now contain the User document(s)
        res.send(post);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('An error occurred');
      });
  };
  

module.exports = { homePage,goalPage,userPage,getuserdetail}