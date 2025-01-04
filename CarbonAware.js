/*function takevalue(){
    //Input Start
    
    var Vehicle = document.getElementById("Vehicle").value;
    var Kms = document.getElementById("Kms").value;
    var kWh = document.getElementById("kWh").value;
    var Kgs = document.getElementById("Kgs").value;
    //Input End

    //Output Variables
    var emissionFactorTransport = 2.5;
    var emissionFactorEnergy = 0.5;
    var emissionFactorFood = 1.2;

    var carbonFootprintTransport = Kms * emissionFactorTransport;
    var carbonFootprintEnergy = kWh * emissionFactorEnergy;
    var carbonFootprintFood = Kgs * emissionFactorFood;
    var totalCarbonFootprint = carbonFootprintTransport + carbonFootprintEnergy + carbonFootprintFood;
    var result = Vehicle.localeCompare("EV");
    var result2= Vehicle.localeCompare("ev");
    if(result!=-1 && result2!=-1)
    {
        carbonFootprintTransport=0.0;
    }
   // <b><span style='font-size: 22px'>Which type of vehicle do you use to travel?</span></b>
    
    document.write("<center><br><b><span style='font-size: 56px'><font color='#00FF7F'>'</font><font color='#848884'>Carbon</font><font color='#00FF7F'>Aware</font><font color='#848884'>' </font><font color='#848884'>Results are:</font></span></b></center><br><br>");
    if(result!=-1 && result2!=-1)
    {
    document.write("<center><b><span style='font-size: 22px'>Since You Drive an EV Your Transport Emissions:"+carbonFootprintTransport+" Kg CO2</span></b></center><br>");

    }
    
    document.write("<center><b><span style='font-size: 22px'>Transport Emissions:"+carbonFootprintTransport+" Kg CO2</span></b></center><br>");
    document.write("<center><b><span style='font-size: 22px'>Energy Emissions: " + carbonFootprintEnergy + " Kg CO2</span></b></center><br>");
    document.write("<center><b><span style='font-size: 22px'>Food Emissions: " + carbonFootprintFood + " Kg CO2</span></b></center><br>");
    document.write("<center><b><span style='font-size: 22px'>[Your Total Carbon Footprint is: '" + totalCarbonFootprint + "' kg CO2]</span></b></center><br><br><br>");
    if(totalCarbonFootprint>20000)
   {
    document.write("<center><b><span style='font-size: 18px'>Since your Total Carbon Footprint is more than average, we suggest you a few ways to keep it in check:</span></b></center><br><br>");
    document.write("<center><b><span style='font-size: 18px'>1) Look for Energy STAR symbol when buying new product</center><br>");
    document.write("<center><b><span style='font-size: 18px'>2) Switch it Off. Turn off the lights when natural light is sufficient and when you leave the room.</span></b></center><br> ");
    document.write("<center><b><span style='font-size: 18px'>3) Climate Control</span></b></center><br>");
    document.write("<center><b><span style='font-size: 18px'>4) Phantom Power</span></b></center><br>");
    document.write("<center><b><span style='font-size: 18px'>5) Use water heater 120F</span></b></center><br>");
    }
}*/
function takevalue() {
    // Input Start
    var Vehicle = document.getElementById("Vehicle").value.toLowerCase(); // Convert to lowercase to handle case insensitivity
    var Kms = document.getElementById("Kms").value;
    var kWh = document.getElementById("kWh").value;
    var Kgs = document.getElementById("Kgs").value;
    // Input End

    // Output Variables
    var emissionFactorTransport = 2.5;
    var emissionFactorEnergy = 0.5;
    var emissionFactorFood = 1.2;

    var carbonFootprintTransport = Kms * emissionFactorTransport;
    var carbonFootprintEnergy = kWh * emissionFactorEnergy;
    var carbonFootprintFood = Kgs * emissionFactorFood;
    var totalCarbonFootprint = carbonFootprintTransport + carbonFootprintEnergy + carbonFootprintFood;

    // Fix: Check for "ev" (case insensitive)
    if (Vehicle === "ev") {
        carbonFootprintTransport = 0.0; // Set transport footprint to zero for EV
    }

    // Output Display
    document.write("<center><br><b><span style='font-size: 56px'><font color='#00FF7F'>'</font><font color='#848884'>Carbon</font><font color='#00FF7F'>Aware</font><font color='#848884'>' </font><font color='#848884'>Results are:</font></span></b></center><br><br>");

    // Show the results
    document.write("<center><b><span style='font-size: 22px'>Transport Emissions: " + carbonFootprintTransport + " Kg CO2</span></b></center><br>");
    document.write("<center><b><span style='font-size: 22px'>Energy Emissions: " + carbonFootprintEnergy + " Kg CO2</span></b></center><br>");
    document.write("<center><b><span style='font-size: 22px'>Food Emissions: " + carbonFootprintFood + " Kg CO2</span></b></center><br>");
    document.write("<center><b><span style='font-size: 22px'>[Your Total Carbon Footprint is: '" + totalCarbonFootprint + "' kg CO2]</span></b></center><br><br><br>");

    // Suggest ways to reduce carbon footprint if it's above the average threshold
    if (totalCarbonFootprint > 20000) {
        document.write("<center><b><span style='font-size: 18px'>Since your Total Carbon Footprint is more than average, we suggest you a few ways to keep it in check:</span></b></center><br><br>");
        document.write("<center><b><span style='font-size: 18px'>1) Look for Energy STAR symbol when buying new product</span></b></center><br>");
        document.write("<center><b><span style='font-size: 18px'>2) Switch it Off. Turn off the lights when natural light is sufficient and when you leave the room.</span></b></center><br>");
        document.write("<center><b><span style='font-size: 18px'>3) Climate Control</span></b></center><br>");
        document.write("<center><b><span style='font-size: 18px'>4) Phantom Power</span></b></center><br>");
        document.write("<center><b><span style='font-size: 18px'>5) Use water heater 120F</span></b></center><br>");
    }
}

