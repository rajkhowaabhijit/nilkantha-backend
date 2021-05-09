const mongoose = require("mongoose");

const uri = 'mongodb+srv://admin:Gnr5NRQ4amgpxXsj@cluster0.nau6t.mongodb.net/nilkanth?retryWrites=true&w=majority'

module.exports = () => {
    const self = module.exports;
    return mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
        .then(() => console.log("DB Connected"))
        .catch(err => {
            console.error(
                "Failed to connect to mongo on startup - retrying in 5 sec"
            );
            setTimeout(self, 5000);
        });
};