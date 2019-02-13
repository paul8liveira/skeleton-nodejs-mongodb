import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    description: String
});

const Example = mongoose.model('Example', schema);

export default Example;
    