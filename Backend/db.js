const mongoose=require('mongoose');
const { boolean } = require('zod');
// mongoose.connect('mongodb+srv://gulrezturk1853:Honey2003@cluster0.vf7ut.mongodb.net/todos');
mongoose.connect('mongodb+srv://gulrezturk1853:Honey2003@cluster0.vf7ut.mongodb.net/todos?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout for server selection
    socketTimeoutMS: 45000,        // Timeout for socket
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('Connection error:', err));




const todoschema=mongoose.Schema({
    title:String,
    decription:String,
    completed:Boolean,
})

const todo=mongoose.model('todos',todoschema);
module.exports={
    todo:todo
}
// mongoose.set('debug', true);



