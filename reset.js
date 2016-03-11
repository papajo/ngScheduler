 //function to set the default data
  $scope.reset = function() {

  	fb.$set({
  		monday: {
  			name: 'Monday',
  			slots: {
  				0900: {
  					time: '9.00am',
  					booked: false
  				},
  				0110: {
  					time: '11:00am',
  					booked: false
  				}
  			}
  		},
  		tuesday: {
        	name: 'Tuesday',
        	slots: {
          		0900: {
            		time: '9:00am',
            		booked: false
          		},
          		0110: {
            		time: '11:00am',
            		booked: false
          }
        }
      }
  	});
  };
  