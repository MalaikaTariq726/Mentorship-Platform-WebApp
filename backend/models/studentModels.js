import mongoose from 'mongoose';

const StudentSchema= new mongoose.Schema({
 rollno: {type:String,required:true,unique:true},
 email:{type:String,required:true,unique:true},
 password:{type:String}
})

const studentModel= mongoose.model('Student', StudentSchema);
export {studentModel as student}