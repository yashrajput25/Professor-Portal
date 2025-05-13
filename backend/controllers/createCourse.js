const Course = require("../models/Course");

// ##################################### COURSE CREATION CONTROLLER ##############
const createCourse = async(req,res) => {

    try{
        const {name, videos, playlistUrl } = req.body;
        if(!name || (!videos?.length && !playlistUrl)){
            return res.status(400).json({ message: "Course name and videos or playlist are required!" });
        }

        const newCourse = new Course({name, videos, playlistUrl});
        await newCourse.save();

        res.status(201).json({message: "Course created Successfully",  _id: newCourse._id });

    }
    catch(error){
        res.status(500).json({message: "error"})
    }
    
}

exports.createCourse = createCourse