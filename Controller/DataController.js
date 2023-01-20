const DataModel=require('../model/DataModel')
module.exports.AddData= async (req,res) => {
    try {
      const { userName,number,address} = req.body;
  
  
        const data = new DataModel({
            userName,number,address
        });
  
        data 
        .save() 
        .then((userData) => {
          res.status(201).json({
            userData,
          });
        })
        .catch((err) => {
            console.log("Error...");
        });
      
    } catch (error) {
      console.log("Error...");
    }
  }
  module.exports.GetAllData= async (req,res) => {
    try {
  
        const allData=await DataModel.find({});
  
        return res.json(allData);
      
    } catch (error) {
      console.log("Error...");
    }
  }
  module.exports.EditData= async (req,res) => {
    try {
        // const { } = req.params;
        const {_id ,userName,number,address}=req.body;
        console.log(req.body);
        const editData=await DataModel.findOneAndUpdate({_id:_id},{ userName,number,address});
        console.log(editData);
        if(editData){
            return res.status(200).json({
                editData,
              });
           }
           else {
            return res.status(404).json({
                msg:"No data found"
              });
           }
    } catch (error) {
      console.log("Error...");
    }
  }
  module.exports.ViewData= async (req,res) => {
    try {
        const {id}=req.params;
        console.log(id);
        const singleData=await DataModel.findOne({_id:id});
  
        return res.json(singleData);
      
    } catch (error) {
      console.log("Error...");
    }
  }
  module.exports.DeleteData= async (req,res) => {
    console.log("Function is running");
    try {
        
        const { id } = req.params;
        const data = await DataModel.findOneAndDelete({ _id: id });
        console.log(data);
       if(data){
        return res.status(200).json({
            data,
          });
       }
       else {
        return res.status(404).json({
            msg:"No data found"
          });
       }
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          error: "Something went wrong",
        });
  }
}