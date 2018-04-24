const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const IdeaSchema = new Schema({
    ideaName: {
        type: String,
        required: true,
        unique: true
    },
    idea: {
        type: String,
        required: true
    },
    ideas: [IdeaSchema]
})

const UserModel = mongoose.model('User', UserSchema)
const IdeaModel = mongoose.model('Idea', IdeaSchema)

// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
    IdeaModel: IdeaModel
}
