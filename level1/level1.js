class Appointment {
  constructor(name,emailId) {
    this.attendeeName = name;
	this.attendeeEmailId = emailId;
  }
  
  // I assume appointment details in static json object with preexisting attendee details
   var myObj = {
  "AppointmentId":"Day31072020",
  "Start":new Date('2020-08-03T09:30:00'),
  "End":new Date('2020-08-03T16:30:00'),
  "Attendees": [
    { "Attendeename":"Bala", "AttendeeEmailId":"krish090891@gmail.com"},
   { "Attendeename":"Krishnan", "AttendeeEmailId":"bala090891@gmail.com"},
    { "Attendeename":"Vignesh", "AttendeeEmailId":"vignesh090891@gmail.com"} 
  ]
 };
 
 
  // I assume to add the new attendee details in preexisting appointment and return data
  addAttendee(name , EmailId) {
  
  var obj = JSON.parse(myObj);
  appointmentValidation(obj.start);
   obj.Attendees.push({"Attendeename":name,"AttendeeEmailId":EmailId});
   myObj=JSON.stringify(obj);
   console.log("Added new attendee, pls check Appointment Details :"+myObj);
    return myObj;
  }
  
  //this method will return text if the appointment starts and no more new appointment
  appointmentValidation(obj)
  {
	  if(new Date.getTime()>obj.getTime()){
		  return "Appointment not available at the moment";
	  }
  
}

// I assume to remove the preexisting attendee details in the appointment and return data
 removeAttendee(emailId)
 {
	 var obj = JSON.parse(myobj);
	 var indx = obj['Attendees'];
	 for(i in obj.Attendees)
	 {
		 if(emailId===obj.Attendees[i].attendeeEmailId)
		 {
			 delete obj.Attendees[i];
	         myObj=JSON.stringify(obj);
	         console.log("Removed the attendee from the appointment details");
	         return myObj;
		 }
	 }
	 
 }
 
 
 
}

