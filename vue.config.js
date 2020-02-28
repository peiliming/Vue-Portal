const test = require('./apis/data.json');
//const test2 = require('./apis/data.json');

module.exports = {
    //
    devServer: {
        open: true,
        port: 8080,
        before(app) {
            app.get("/search", (req, res) => {   //localhost:8080/api/index   data.jsonを読み込み
                //    app.get("https://rbai.jrt-desk.com/data", (req, res) => {
                res.json(test);
            });
        },
        proxy: {
            '/apis': {
                target: 'https://movie.douban.com/',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                },
                before(app) {
                    app.get('/apis/ithil_j/activity/movie_annual2017')
                        .then(function (res) {
                            console.log(res.data)
                        })
                        .catch(function (err) {
                            console.log(err)
                        })
                }
            }
        }
    }
};
