import './MyArt.css';
import React from 'react';

function MyArt() {
    artwork = ["alco.jpg", "anger.jpg","bridge.jpg", "calendercover.jpg", "x-mencalender.jpg", "spidermancalender.jpg",
                "croppedstarter.jpg", "landscapeandclouds.jpg", "jerseytransit.jpg", "penandlock.jpg", "waterlines.jpg", "viking.jpg",
                "suspension.jpg", "magicflute.jpg", "starter.jpg", "wheels.jpg", "trainstation.jpg", "washingmachine.jpg"]
    //insertArt => {
      //  artContainer = document.getElementById("artworkContainer");
        //for (const art of artwork) {
          //  artContainer.innerHTML = `./artworkPics/${art}`;
        //}
    //}
    return (
        <div id="artworkContainer">

            <h1>Hello Artwork</h1>
        </div>
    )
}

export default MyArt;