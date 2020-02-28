//const test = require('./data/data.json');
//const test = require('https://rbai.jrt-desk.com/data/data.json');

module.exports = {
    //
    devServer: {
        port: 8080,
        before(app) {
            app.get("/test", (req, res) => {   //localhost:8080/api/index   data.jsonを読み込み
        //    app.get("https://rbai.jrt-desk.com/data", (req, res) => {
                res.json('https://rbai.jrt-desk.com/data/data.json');
            });
        }
    }
};
