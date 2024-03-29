// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = 
  `
  <h2>Mission Destination</h2>
  <ol>
  <li>Name: ${name}</li>
  <li>Diameter: ${diameter}</li>
  <li>Star: ${star}</li>
  <li>Distance from Earth: ${distance}</li>
  <li>Number of Moons: ${moons}</li>
  </ol>

    <img src="${imageUrl}">
  `
}

function validateInput(testInput) {
    let answer;
	if (testInput === "") {
	answer = "Empty";
	} else if (isNaN(testInput)) {
	answer = "Not a Number";
	} else {
	answer = "Is a Number";
	};
    return answer;
	};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let pilotStatus = document.getElementById('pilotStatus');
    // let copilotStatus = document.getElementById('copilotStatus');
    // let fuelStatus = document.getElementById('fuelStatus');
    // let cargoStatus = document.getElementById('cargoStatus');
    // let list = document.getElementById('faultyItems');

// if fields are left empty
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
// if names are numbers or fuel/cargo is not 
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number"|| validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");

    } if (fuelLevel < 10000) {
        // If the user submits a fuel level that is too low (less than 10,000 liters)
        list.style.visbility = "visible";
    document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready For Launch`;
    document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    document.getElementById("launchStatus").style.color = "red";

    } if (cargoLevel > 10000) {
        // If the user submits a cargo mass that is too large (more than 10,000 kilograms)
        list.style.visbility = "visible";
        document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready For Launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch.`;
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        document.getElementById("launchStatus").style.color = "red";
    
    } if ((fuelLevel > 10000) && (cargoLevel < 10000))  {
            // if shuttle is ready for launch
        list.style.visbility = "visible";
        document.getElementById("launchStatus").innerHTML = `Shuttle is Ready for Launch`;
        document.getElementById("launchStatus").style.color = 'green';
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
        // list.style.visibility = "visible";
    }
    
//    list.style.visibility = "visible";
//    console.log(alert);
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random()*6);
    return planets[i];
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;