// Decode decodes an array of bytes into an object.
//  - fPort contains the LoRaWAN fPort number
//  - bytes is an array of bytes, e.g. [225, 230, 255, 0]
//  - variables contains the device variables e.g. {"calibration": "3.5"} (both the key / value are of type string)
// The function must return an object, e.g. {"temperature": 22.5}
function Decode(fPort, bytes, variables) {
    devolver = {}
    //var clicks = ((bytes[0]) << 8) + (bytes[1]) ;
                                    
    //var mmCalculo = clicks * 0.05;

    var lat = (bytes[0]<<24) | bytes[1]<<16 | bytes[2]<<8 | bytes[3];
    var lon = (bytes[4]<<24) | bytes[5]<<16 | bytes[6]<<8 | bytes[7];
    
    //devolver.clicks = lluvia;

    //devolver.lluvia = mmCalculo.toFixed(2);
    //devolver.clicks = clicks;
    devolver.latitudTrack = lat/1000000;
    devolver.longitudTrack= lon/1000000;
    
    //devolver.payload2= bytes[1];
    //devolver.payload3= bytes[2];
    //devolver.payload4= bytes[3];
  //var payload = (bytes[0]<<8) | bytes[1];
    //var payload2 = (bytes[2]<<8) | bytes[3];
    return devolver; 
}