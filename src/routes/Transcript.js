import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as cheerio from "cheerio";

/*
    Proxy URL (https://transcripts.foreverdreaming.org): Differ by Title
    Crawling Tag (".postbody"): Differ by Title
    Crawling URL (/viewtopic.php?f=177&t=11508&sid=df824ea6fabe1434daef5cf40ea74918): Differ by Episode
*/

function Transcript(obj_Episode) {
    const [scriptText, setScriptText] = useState([]);
    const { location } = obj_Episode;

    const getHTML = async() => {
        try {
            return await axios.get(location.state.url_tail);
        } catch {
            console.log("getHTML Error");
        }
    };
    
    const parsing = async () => {
        const html = await getHTML();
        const $ = cheerio.load(html.data);
        const $scriptList = $(location.state.parsing);
        
        let scriptArray = [];

        $scriptList.each((idx, node) => {
            /* scriptArray.push({
                transcript: $(node).text()
            }); */
            $(node.children).each((ids, childNode) => {
                scriptArray.push({
                    key: ids,
                    transcript: $(childNode).text()
                });
            });
        });
        
        setScriptText(scriptArray);
    };
    
    useEffect(() => { 
        parsing();
    }, []);

    return (
        <div>
            {scriptText.map ((node) => (
                <p key={node.key}>{node.transcript}</p>
            ))}
        </div>
    );
}

export default Transcript;