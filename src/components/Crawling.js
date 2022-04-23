const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async(keyword) => {
    try {
        return await axios.get("https://transcripts.foreverdreaming.org/viewforum.php?f=177" + keyword);
    } catch {
        console.log(err);
    }
}

const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $vocaList = $(".topictitle");

    let vocaArray = [];

    $vocaList.each((idx, node) => {
        vocaArray.push([$(node).text(), $(node).attr("href")])
        /* pronunce: $(node).find(".listen_pronunce_mark").text(),
        mean:$(node).find(".mean").text() */
    });

    console.log(
        /* vocaArray.map ((node) => (node.transcript)) */
        vocaArray.map ((node) => (node))
    );
}

parsing();

for (let i = 25; i < 201; i = i + 25) {
    parsing(`&start=${i}`);
}