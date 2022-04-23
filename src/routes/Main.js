import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
    const obj_HIMYM = {
        url_head: "https://transcripts.foreverdreaming.org",
        parsing: ".postbody",
        image: "images/HIMYM.jpg",
        title: "How I Met Your Mother",
        description: "2005 · Sitcom · 9 Seasons",
        episode: [
            [
                ['01x01 - Pilot','/viewtopic.php?f=177&t=11508&sid=e106fca92d827366618775534c5d0384'],
                ['01x02 - Purple Giraffe','/viewtopic.php?f=177&t=11515&sid=e106fca92d827366618775534c5d0384'],
                ['01x03 - Sweet Taste of Liberty','/viewtopic.php?f=177&t=11516&sid=e106fca92d827366618775534c5d0384'],
                ['01x04 - Return of the Shirt','/viewtopic.php?f=177&t=11514&sid=e106fca92d827366618775534c5d0384'],
                ['01x05 - Okay Awesome','/viewtopic.php?f=177&t=11513&sid=e106fca92d827366618775534c5d0384'],
                ['01x06 - Slutty Pumpkin','/viewtopic.php?f=177&t=11512&sid=e106fca92d827366618775534c5d0384'],
                ['01x07 - Matchmaker','/viewtopic.php?f=177&t=11511&sid=e106fca92d827366618775534c5d0384'],
                ['01x08 - The Duel','/viewtopic.php?f=177&t=11510&sid=e106fca92d827366618775534c5d0384'],
                ['01x09 - Belly Full of Turkey','/viewtopic.php?f=177&t=11509&sid=e106fca92d827366618775534c5d0384'],
                ['01x10 - The Pineapple Incident','/viewtopic.php?f=177&t=11506&sid=e106fca92d827366618775534c5d0384'],
                ['01x11 - The Limo','/viewtopic.php?f=177&t=11505&sid=e106fca92d827366618775534c5d0384'],
                ['01x12 - The Wedding','/viewtopic.php?f=177&t=11517&sid=e106fca92d827366618775534c5d0384'],
                ['01x13 - Drumroll, Please','/viewtopic.php?f=177&t=11507&sid=e106fca92d827366618775534c5d0384'],
                ['01x14 - Zip, Zip, Zip','/viewtopic.php?f=177&t=11518&sid=e106fca92d827366618775534c5d0384'],
                ['01x15 - Game Night','/viewtopic.php?f=177&t=11519&sid=e106fca92d827366618775534c5d0384'],
                ['01x16 - Cupcake','/viewtopic.php?f=177&t=11520&sid=e106fca92d827366618775534c5d0384'],
                ['01x17 - Life Among the Gorillas','/viewtopic.php?f=177&t=11521&sid=e106fca92d827366618775534c5d0384'],
                ['01x18 - Nothing Good Happens After 2 A.M.','/viewtopic.php?f=177&t=11522&sid=e106fca92d827366618775534c5d0384'],
                ['01x19 - Mary the Paralegal','/viewtopic.php?f=177&t=11661&sid=e106fca92d827366618775534c5d0384'],
                ['01x20 - Best Prom Ever','/viewtopic.php?f=177&t=11662&sid=e106fca92d827366618775534c5d0384'],
                ['01x21 - Milk','/viewtopic.php?f=177&t=11664&sid=e106fca92d827366618775534c5d0384'],
                ['01x22 - Come On','/viewtopic.php?f=177&t=11665&sid=e106fca92d827366618775534c5d0384']
            ],
            [
                ['02x01 - Where Were We?','/viewtopic.php?f=177&t=11666&sid=e106fca92d827366618775534c5d0384'],
                ['02x02 - The Scorpion and the Toad','/viewtopic.php?f=177&t=11660&sid=e106fca92d827366618775534c5d0384'],
                ['02x03 - Brunch','/viewtopic.php?f=177&t=11523&sid=e106fca92d827366618775534c5d0384'],
                ['02x04 - Ted Mosby: Architect','/viewtopic.php?f=177&t=11524&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ["02x05 - World's Greatest Couple",'/viewtopic.php?f=177&t=11525&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x06 - Aldrin Justice','/viewtopic.php?f=177&t=11526&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x07 - Swarley','/viewtopic.php?f=177&t=11527&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x08 - Atlantic City','/viewtopic.php?f=177&t=11663&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x09 - Slap Bet','/viewtopic.php?f=177&t=11671&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x10 - Single Stamina','/viewtopic.php?f=177&t=11670&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x11 - How Lily Stole Christmas','/viewtopic.php?f=177&t=11668&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x12 - First Time in New York','/viewtopic.php?f=177&t=11672&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x13 - Columns','/viewtopic.php?f=177&t=11659&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x14 - Monday Night Football','/viewtopic.php?f=177&t=11673&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x15 - Lucky Penny','/viewtopic.php?f=177&t=11535&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x16 - Stuff','/viewtopic.php?f=177&t=11534&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x17 - Arrivederci, Fiero','/viewtopic.php?f=177&t=11533&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x18 - Moving Day','/viewtopic.php?f=177&t=11532&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x19 - Bachelor Party','/viewtopic.php?f=177&t=11531&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x20 - Showdown','/viewtopic.php?f=177&t=11530&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x21 - Something Borrowed','/viewtopic.php?f=177&t=11529&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['02x22 - Something Blue','/viewtopic.php?f=177&t=11528&sid=6b3a3d55346f23ab4cbdfa2bd79af953']
            ],
            [
                ['03x01 - Wait for It','/viewtopic.php?f=177&t=11537&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ["03x02 - We're Not from Here",'/viewtopic.php?f=177&t=11538&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['03x03 - Third Wheel','/viewtopic.php?f=177&t=11539&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['03x04 - Little Boys','/viewtopic.php?f=177&t=11540&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['03x05 - How I Met Everyone Else','/viewtopic.php?f=177&t=11675&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ["03x06 - I'm Not That Guy",'/viewtopic.php?f=177&t=11674&sid=6b3a3d55346f23ab4cbdfa2bd79af953'],
                ['03x07 - Dowisetrepla','/viewtopic.php?f=177&t=11667&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x08 - Spoiler Alert','/viewtopic.php?f=177&t=11536&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x09 - Slapsgiving','/viewtopic.php?f=177&t=11541&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x10 - The Yips','/viewtopic.php?f=177&t=11676&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x11 - The Platinum Rule','/viewtopic.php?f=177&t=11658&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x12 - No Tomorrow','/viewtopic.php?f=177&t=11678&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x13 - Ten Sessions','/viewtopic.php?f=177&t=11550&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x14 - The Bracket','/viewtopic.php?f=177&t=11548&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x15 - The Chain of Screaming','/viewtopic.php?f=177&t=11547&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x16 - Sandcastles in the Sand','/viewtopic.php?f=177&t=11546&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x17 - The Goat','/viewtopic.php?f=177&t=11545&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x18 - Rebound Bro','/viewtopic.php?f=177&t=11544&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x19 - Everything Must Go','/viewtopic.php?f=177&t=11543&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['03x20 - Miracles','/viewtopic.php?f=177&t=11542&sid=7295cdee8a243e59f7f77cf22acf6aa8']
            ],
            [
                ['04x01 - Do I Know You?','/viewtopic.php?f=177&t=11677&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x02 - The Best Burger in New York','/viewtopic.php?f=177&t=11657&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x03 - I Heart NJ','/viewtopic.php?f=177&t=11656&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x04 - Intervention','/viewtopic.php?f=177&t=11559&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x05 - Shelter Island','/viewtopic.php?f=177&t=11558&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x06 - Happily Ever After','/viewtopic.php?f=177&t=11557&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ["04x07 - Not a Father's Day",'/viewtopic.php?f=177&t=11556&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x08 - Woooo!','/viewtopic.php?f=177&t=11655&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x09 - The Naked Man','/viewtopic.php?f=177&t=11554&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x10 - The Fight','/viewtopic.php?f=177&t=11553&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x11 - Little Minnesota','/viewtopic.php?f=177&t=11552&sid=7295cdee8a243e59f7f77cf22acf6aa8'],
                ['04x12 - Benefits','/viewtopic.php?f=177&t=11551&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x13 - Three Days of Snow','/viewtopic.php?f=177&t=11560&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x14 - The Possimpible','/viewtopic.php?f=177&t=11549&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x15 - The Stinsons','/viewtopic.php?f=177&t=11563&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x16 - Sorry, Bro','/viewtopic.php?f=177&t=11564&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x17 - The Front Porch','/viewtopic.php?f=177&t=11580&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x18 - Old King Clancy','/viewtopic.php?f=177&t=11566&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x19 - Murtaugh','/viewtopic.php?f=177&t=11567&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x20 - Mosbius Designs','/viewtopic.php?f=177&t=11568&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x21 - The Three Days Rule','/viewtopic.php?f=177&t=11669&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x22 - Right Place, Right Time','/viewtopic.php?f=177&t=11680&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x23 - As Fast as She Can','/viewtopic.php?f=177&t=11679&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['04x24 - The Leap','/viewtopic.php?f=177&t=11562&sid=abf6d68435a3692f6313ab3bdcb2ca3b']
            ],
            [
                ['05x01 - Definitions','/viewtopic.php?f=177&t=11569&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x02 - Double Date','/viewtopic.php?f=177&t=11555&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x03 - Robin 101','/viewtopic.php?f=177&t=11570&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x04 - The Sexless Innkeeper','/viewtopic.php?f=177&t=11571&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x05 - Duel Citizenship','/viewtopic.php?f=177&t=11710&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x06 - Bagpipes','/viewtopic.php?f=177&t=11573&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x07 - The Rough Patch','/viewtopic.php?f=177&t=11574&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x08 - The Playbook','/viewtopic.php?f=177&t=11575&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x09 - Slapsgiving 2: Revenge of the Slap','/viewtopic.php?f=177&t=11703&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x10 - The Window','/viewtopic.php?f=177&t=11702&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x11 - Last Cigarette Ever','/viewtopic.php?f=177&t=11701&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x12 - Girls Versus Suits','/viewtopic.php?f=177&t=11654&sid=abf6d68435a3692f6313ab3bdcb2ca3b'],
                ['05x13 - Jenkins','/viewtopic.php?f=177&t=11705&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x14 - Perfect Week','/viewtopic.php?f=177&t=11706&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x15 - Rabbit or Duck','/viewtopic.php?f=177&t=11707&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x16 - Hooked','/viewtopic.php?f=177&t=11708&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x17 - Of Course','/viewtopic.php?f=177&t=11582&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x18 - Say Cheese','/viewtopic.php?f=177&t=11581&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x19 - Zoo or False','/viewtopic.php?f=177&t=11579&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x20 - Home Wreckers','/viewtopic.php?f=177&t=11578&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x21 - Twin Beds','/viewtopic.php?f=177&t=11709&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x22 - Robots Versus Wrestlers','/viewtopic.php?f=177&t=11576&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x23 - The Wedding Bride','/viewtopic.php?f=177&t=11561&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['05x24 - Doppelgangers','/viewtopic.php?f=177&t=11704&sid=d45a8d9564c5ccdbae894e30724abce0']
            ],
            [
                ['06x01 - Big Days','/viewtopic.php?f=177&t=11711&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x02 - Cleaning House','/viewtopic.php?f=177&t=11700&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x03 - Unfinished','/viewtopic.php?f=177&t=11699&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x04 - Subway Wars','/viewtopic.php?f=177&t=11681&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x05 - Architect of Destruction','/viewtopic.php?f=177&t=11682&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x06 - Baby Talk','/viewtopic.php?f=177&t=11683&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x07 - Canning Randy','/viewtopic.php?f=177&t=11684&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x08 - Natural History','/viewtopic.php?f=177&t=11685&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x09 - Glitter','/viewtopic.php?f=177&t=11686&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x10 - Blitzgiving','/viewtopic.php?f=177&t=11698&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x11 - The Mermaid Theory','/viewtopic.php?f=177&t=11712&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x12 - False Positive','/viewtopic.php?f=177&t=11697&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x13 - Bad News','/viewtopic.php?f=177&t=11687&sid=d45a8d9564c5ccdbae894e30724abce0'],
                ['06x14 - Last Words','/viewtopic.php?f=177&t=11565&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x15 - Oh Honey','/viewtopic.php?f=177&t=11695&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x16 - Desperation Day','/viewtopic.php?f=177&t=11584&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x17 - Garbage Island','/viewtopic.php?f=177&t=11585&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x18 - A Change of Heart','/viewtopic.php?f=177&t=11586&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x19 - Legendaddy','/viewtopic.php?f=177&t=11587&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x20 - The Exploding Meatball Sub','/viewtopic.php?f=177&t=11588&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x21 - Hopeless','/viewtopic.php?f=177&t=11589&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x22 - The Perfect Cocktail','/viewtopic.php?f=177&t=11590&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x23 - Landmarks','/viewtopic.php?f=177&t=11689&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['06x24 - Challenge Accepted','/viewtopic.php?f=177&t=11688&sid=621b195b9a3cc036fcf7976ad1506d33']
            ],
            [
                ['07x01 - The Best Man','/viewtopic.php?f=177&t=11572&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x02 - The Naked Truth','/viewtopic.php?f=177&t=11591&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x03 - Ducky Tie','/viewtopic.php?f=177&t=11592&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x04 - The Stinson Missile Crisis','/viewtopic.php?f=177&t=11593&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x05 - Field Trip','/viewtopic.php?f=177&t=11594&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x06 - Mystery vs. History','/viewtopic.php?f=177&t=11595&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x12 - Symphony of Illumination','/viewtopic.php?f=177&t=11691&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x13 - Tailgate','/viewtopic.php?f=177&t=11690&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x14 - 46 Minutes','/viewtopic.php?f=177&t=11652&sid=621b195b9a3cc036fcf7976ad1506d33'],
                ['07x15 - The Burning Beekeeper','/viewtopic.php?f=177&t=11577&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['07x16 - The Drunk Train','/viewtopic.php?f=177&t=11597&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['07x17 - No Pressure','/viewtopic.php?f=177&t=11598&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['07x18 - Karma','/viewtopic.php?f=177&t=11599&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['07x19 - The Broath','/viewtopic.php?f=177&t=11601&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['07x20 - Trilogy Time','/viewtopic.php?f=177&t=11602&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ["07x21 - Now We're Even",'/viewtopic.php?f=177&t=11603&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['07x22 - Good Crazy','/viewtopic.php?f=177&t=11696&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ["07x23 - The Magician's Code, Part 1",'/viewtopic.php?f=177&t=11649&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ["07x24 - The Magician's Code, Part 2",'/viewtopic.php?f=177&t=11651&sid=5bcfae7a4cc3c9f72cee467b74e45d52']
            ],
            [
                ['08x01 - Farhampton','/viewtopic.php?f=177&t=11647&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x02 - The Pre-Nup','/viewtopic.php?f=177&t=11583&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x03 - Nannies','/viewtopic.php?f=177&t=11604&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x04 - Who Wants to Be a Godparent?','/viewtopic.php?f=177&t=11605&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x05 - The Autumn of Break-Ups','/viewtopic.php?f=177&t=11606&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x06 - Splitsville','/viewtopic.php?f=177&t=11607&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x07 - The Stamp Tramp','/viewtopic.php?f=177&t=11608&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x08 - Twelve Horny Women','/viewtopic.php?f=177&t=11609&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x09 - Lobster Crawl','/viewtopic.php?f=177&t=11610&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x10 - The Over-Correction','/viewtopic.php?f=177&t=11644&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x11 - The Final Page, Part 1','/viewtopic.php?f=177&t=11645&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x12 - The Final Page, Part 2','/viewtopic.php?f=177&t=11646&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x13 - Band or DJ?','/viewtopic.php?f=177&t=11653&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x14 - Ring Up!','/viewtopic.php?f=177&t=11618&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x15 - P.S. I Love You','/viewtopic.php?f=177&t=11617&sid=5bcfae7a4cc3c9f72cee467b74e45d52'],
                ['08x16 - Bad Crazy','/viewtopic.php?f=177&t=11616&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['08x17 - The Ashtray','/viewtopic.php?f=177&t=11615&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ["08x18 - Weekend at Barney's",'/viewtopic.php?f=177&t=11614&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['08x19 - The Fortress','/viewtopic.php?f=177&t=11613&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['08x20 - The Time Travelers','/viewtopic.php?f=177&t=11612&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['08x21 - Romeward Bound','/viewtopic.php?f=177&t=11611&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['08x22 - The Bro Mitzvah','/viewtopic.php?f=177&t=11641&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['08x23 - Something Old','/viewtopic.php?f=177&t=11642&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['08x24 - Something New','/viewtopic.php?f=177&t=11643&sid=ca04daa9b99e78f49d0dd96da580660f']
            ],
            [
                ['09x01 - The Locket','/viewtopic.php?f=177&t=11640&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x02 - Coming Back','/viewtopic.php?f=177&t=11650&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x03 - Last Time in New York','/viewtopic.php?f=177&t=11638&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x04 - The Broken Code','/viewtopic.php?f=177&t=11637&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x05 - The Poker Game','/viewtopic.php?f=177&t=11625&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x06 - Knight Vision','/viewtopic.php?f=177&t=11624&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x07 - No Questions Asked','/viewtopic.php?f=177&t=11623&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x08 - The Lighthouse','/viewtopic.php?f=177&t=11622&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x09 - Platonish','/viewtopic.php?f=177&t=11621&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x10 - Mom and Dad','/viewtopic.php?f=177&t=11620&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x11 - Bedtime Stories','/viewtopic.php?f=177&t=11619&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x12 - The Rehearsal Dinner','/viewtopic.php?f=177&t=11639&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x13 - Bass Player Wanted','/viewtopic.php?f=177&t=11648&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x14 - Slapsgiving 3: Slappointment in Slapmarra','/viewtopic.php?f=177&t=11635&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x15 - Unpause','/viewtopic.php?f=177&t=11634&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x16 - How Your Mother Met Me','/viewtopic.php?f=177&t=11633&sid=ca04daa9b99e78f49d0dd96da580660f'],
                ['09x17 - Sunrise','/viewtopic.php?f=177&t=11632&sid=15316a1d1bc46c9533ac6a477fe4d9ca'],
                ['09x18 - Rally','/viewtopic.php?f=177&t=11631&sid=15316a1d1bc46c9533ac6a477fe4d9ca'],
                ['09x19 - Vesuvius','/viewtopic.php?f=177&t=11630&sid=15316a1d1bc46c9533ac6a477fe4d9ca'],
                ['09x20 - Daisy','/viewtopic.php?f=177&t=11629&sid=15316a1d1bc46c9533ac6a477fe4d9ca'],
                ['09x21 - Gary Blauman','/viewtopic.php?f=177&t=11628&sid=15316a1d1bc46c9533ac6a477fe4d9ca'],
                ['09x22 - The End of the Aisle','/viewtopic.php?f=177&t=11627&sid=15316a1d1bc46c9533ac6a477fe4d9ca'],
                ['09x23 - Last Forever, Part 1','/viewtopic.php?f=177&t=11626&sid=15316a1d1bc46c9533ac6a477fe4d9ca'],
                ['09x24 - Last Forever, Part 2','/viewtopic.php?f=177&t=11636&sid=15316a1d1bc46c9533ac6a477fe4d9ca']
            ],
        ]
    }

    return (
        <div className="main_container">
            <div className="main_header">
                <Link to="/">
                    <img src="images/logo.png" alt="logo" title ="logo" />
                </Link>
            </div>
            <div className="main_main">
                <div className="main_about">
                    How to Use CC
                </div>
                <div className="main_list">
                    <Link to={{
                        pathname: "/title",
                        state: {
                            url_head: obj_HIMYM.url_head,
                            parsing: obj_HIMYM.parsing,
                            image: obj_HIMYM.image,
                            title: obj_HIMYM.title,
                            description: obj_HIMYM.description,
                            episode: obj_HIMYM.episode
                        }
                    }}>
                        <img src={obj_HIMYM.image} alt={obj_HIMYM.title} title={obj_HIMYM.title} />
                        <p className="main_title">{obj_HIMYM.title}</p>
                        <p className="main_description">{obj_HIMYM.description}</p>
                    </Link>
                 </div>
            </div>
            <div className="main_footer">
            </div>
        </div>
    );
}

export default Main;