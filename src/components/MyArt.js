import './MyArt.css';
import React from 'react';

function MyArt() { 

    let insertArt = () => {
        const artwork = ["alco.jpg", "anger.jpg","bridge.jpg", "calendercover.jpg", "x-mencalender.jpg", "spidermancalender.jpg",
                "croppedstarter.jpg", "landscapeandclouds.jpg", "jerseytransit.jpg", "penandlock.jpg", "waterlines.jpg", "viking.jpg",
                "suspension.jpg", "magicflute.jpg", "starter.jpg", "trainstation.jpg", "washingmachine.jpg"]
        
        let artString = ""
        
        for (const art of artwork) {
            artString = artString + `<img className="artwork" src="./artworkPics/${art}"></img>`;
        };
        console.log(artString);
        document.getElementById("artworkContainer").innerHTML = artString;
    }
    //insertArt();
    return (
        <>
            <div id="artworkContainer">
                <img className="artwork" src="./artworkPics/alco.jpg"></img><img className="artwork" src="./artworkPics/anger.jpg"></img><img className="artwork" src="./artworkPics/bridge.jpg"></img><img className="artwork" src="./artworkPics/calendercover.jpg"></img><img className="artwork" src="./artworkPics/x-mencalender.jpg"></img><img className="artwork" src="./artworkPics/spidermancalender.jpg"></img><img className="artwork" src="./artworkPics/croppedstarter.jpg"></img><img className="artwork" src="./artworkPics/landscapeandclouds.jpg"></img><img className="artwork" src="./artworkPics/jerseytransit.jpg"></img><img className="artwork" src="./artworkPics/penandlock.jpg"></img><img className="artwork" src="./artworkPics/waterlines.jpg"></img><img className="artwork" src="./artworkPics/viking.jpg"></img><img className="artwork" src="./artworkPics/suspension.jpg"></img><img className="artwork" src="./artworkPics/magicflute.jpg"></img><img className="artwork" src="./artworkPics/starter.jpg"></img><img className="artwork" src="./artworkPics/trainstation.jpg"></img><img className="artwork" src="./artworkPics/washingmachine.jpg"></img>
            </div>
            
        </>
    )
}

export default MyArt;