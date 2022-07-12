// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

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
 
    })
    // add event listener 
    let form = document.querySelector('form');
    list.style.visibility = "visible";
    
    form.addEventListener("submit", function (event) { 
    // faultyitems list getelementbyid 
    // event.preventDefault();
    let list = document.getElementById('faulyItems');
    let pilot = document.querySelector('input[name=pilotStatus]');
    let copilot = document.querySelector('input[name=copilotStatus]');
    let fuelLevel = document.querySelector('input[name=fuelLevel]');
    let cargoLevel = document.querySelector('input[name=cargoLevel]');
    // list.style.visibility = "visible";
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    event.preventDefault();
});
});