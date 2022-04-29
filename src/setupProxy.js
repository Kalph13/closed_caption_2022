const { createProxyMiddleware } = require("http-proxy-middleware");

/*
    How to set
    https://codingapple.com/forums/topic/%ED%94%84%EB%A1%9D%EC%8B%9C-%EC%84%A4%EC%A0%95%ED%95%B4%EB%8F%84-%EC%9E%91%EB%8F%99%ED%95%98%EC%A7%80-%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4/
*/

module.exports = (app) => {
    app.use(
        '/search.do',
        createProxyMiddleware({
            target: "https://dic.daum.net",
            changeOrigin: true
        })
    );
    app.use(
        '/viewtopic.php',
        createProxyMiddleware({
            target: "https://transcripts.foreverdreaming.org",
            changeOrigin: true
        })
    );
}