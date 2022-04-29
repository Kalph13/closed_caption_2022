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

    const onFind = async (output) => {
        const findWord = await axios.get(`../search.do?q=${output}&dic=eng&search_first=Y`);
        const $ = cheerio.load(findWord.data);
        const $vocaList = $(".cleanword_type.kuek_type > ul > li > .txt_search");
        const $exampleList = $(".list_example.sound_example > li");
        
        let vocaArray = [];

        $vocaList.each((idx, node) => {
            vocaArray.push($(node).text());
        });

        let exampleArray = [];

        $exampleList.each((idx, node) => {
            exampleArray.push({
                txtExample: $(node).find(".txt_example").text(),
                meanExample: $(node).find(".mean_example").text()
            });
        });

        alert(vocaArray)
        alert(JSON.stringify(exampleArray));
    }

    const onClick = () => {
        /* 'range' represent a selected block in a browser */
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const node = selection.anchorNode;

        /* Set a start point of the range */
        /* Run until the function finds the most adjacent left ' ' */
        while (range.toString().indexOf(' ') === -1 && range.startOffset > 0) {
            range.setStart(node, range.startOffset - 1);
        }
        /* When it finds the most adjacent left ' ', set the start point */
        if (range.startOffset !== 0) range.setStart(node, range.startOffset + 1);
        
        /* Set an end point of the range */
        /* The range shouldn't include ' ' or blank */
        while (range.toString().indexOf(' ') === -1 && range.endOffset < node.length && range.toString().trim() !== '') {
            range.setEnd(node, range.endOffset + 1);
        }
        /* When it finds the most adjacent right ' ', set the end point */
        if (range.endOffset < node.length) range.setEnd(node, range.endOffset - 1);
        
        /* Remove special characters */
        const word = range.toString().trim();
        const output = word.replace(/[^a-zA-Z0-9]/g, "");
        console.log(output);
        onFind(output);
    }

    return (
        <div onClick={onClick}>
            {scriptText.map ((node) => (
                <p key={node.key}>{node.transcript}</p>
            ))}
        </div>
    );
}

export default Transcript;