// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo, validateInput, formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result; 
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetSelected = pickPlanet(listedPlanets);

       addDestinationInfo(window.document, planetSelected.name, planetSelected.diameter, planetSelected.star,
           planetSelected.distance, planetSelected.moons, planetSelected.image);
    });
    // add event listener 
    let form = document.querySelector('form');
    

    form.addEventListener("submit", function (event) { 
    // faultyitems list getelementbyid 
    event.preventDefault();
    let pilot = document.querySelector('input[name=pilotStatus]');
    let copilot = document.querySelector('input[name=copilotStatus]');
    let fuelLevel = document.querySelector('input[name=fuelLevel]');
    let cargoLevel = document.querySelector('input[name=cargoLevel]');
    let list = document.getElementById('faultyItems');
    list.style.visibility = "visible";
    // list.style.visibility = "visible";
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    // event.preventDefault();
});
});