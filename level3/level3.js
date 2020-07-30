class Calendar {
  constructor(name,emailId) {
    this.attendeeName = name;
	this.attendeeEmailId = emailId;
  }
  
  // I assume appointment details in static json object with preexisting attendee details
   var myObj = {"Appointments":{
  "AppointmentId":"123",
  "Start":new Date('2020-08-03T09:30:00'),
  "End":new Date('2020-08-03T16:30:00'),
  "Attendees": [
    { "Attendeename":"Bala", "AttendeeEmailId":"krish090891@gmail.com"},
   { "Attendeename":"Krishnan", "AttendeeEmailId":"bala090891@gmail.com"},
    { "Attendeename":"Vignesh", "AttendeeEmailId":"vignesh090891@gmail.com"} 
   ]},
   
   {
  "AppointmentId":"234",
  "Start":new Date('2020-08-04T09:30:00'),
  "End":new Date('2020-08-04T16:30:00'),
  "Attendees": [
    { "Attendeename":"Anand", "AttendeeEmailId":"Anand090891@gmail.com"},
   { "Attendeename":"Chandran", "AttendeeEmailId":"Chandran090891@gmail.com"},
    { "Attendeename":"Ramesh", "AttendeeEmailId":"Ramesh090891@gmail.com"} 
   ]},
   
   {
  "AppointmentId":"456",
  "Start":new Date('2020-08-05T09:30:00'),
  "End":new Date('2020-08-05T16:30:00'),
  "Attendees": [
    { "Attendeename":"George", "AttendeeEmailId":"George090891@gmail.com"},
   { "Attendeename":"Pinto", "AttendeeEmailId":"pint090891@gmail"},
    { "Attendeename":"Issac", "AttendeeEmailId":"Issac090891@gmail.com"} 
   ]}
   
   
 };
 
  
 getAppointmentById(id)
 {
	var obj = JSON.parse(myobj);
	 var indx = obj['Appointments'];
	 for(i in obj.Appointments)
	 {
		 if(id===obj.Appointments[i].AppointmentId)
		 {
			 return obj.Appointments[i];
	         
		 }
	 } 
 }
 
 
  saveAppointment(appointment)
 {
	     
		 var obj = JSON.parse(myobj);	 
		 id = Math.random().toString(16).slice(2,8)
		 obj.Appointments.push({id,appointment});
		 myObj=JSON.stringify(obj);
		 return myObj;
	  
 }
 
 
  deleteAppointment(id)
  {
	var obj = JSON.parse(myobj);
	 var indx = obj['Appointments'];
	 for(i in obj.Appointments)
	 {
		 if(id===obj.Appointments[i].AppointmentId)
		 {
			 delete obj.Appointments[i];
			 myObj=JSON.stringify(obj);
		     return myObj;
	         
		 }
	 }  
	  
  }
  
  getAppointmentsBetweenDates(startDate, endDate)
  {
	 var obj = JSON.parse(myobj);
	 var indx = obj['Appointments'];
	 var app =[];
	 for(i in obj.Appointments)
	 {
		 if(obj.Appointments[i].start >startDate && obj.Appointments[i].End < endDate)
		 {
			 app.push(obj.Appointments[i])
	         
			 }
	 }  

 return app;	 
  }
 
  
 
 
 
}

