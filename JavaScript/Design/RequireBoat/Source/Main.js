/**
 * @author Charlie Calvert
 */

require.config({
  paths: {
    "jquery": "http://code.jquery.com/jquery-1.11.0.min",     
  }
});

require([ "Boat", "Car" ], function(boat, car) { 'use strict';
	boat.describe();
	car.describe();
	car.talk();
});
