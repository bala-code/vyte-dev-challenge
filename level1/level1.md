The goal is to create a very simple appointment scheduling system.

An appointment has an `id`, a `start` (Date javascript object) and `end` (Date javascript object) and an array of `attendees`.
Each attendee has a `name` and an `email` address.

TODO
 * [ ] Create a class `Appointment` that models an appointment and implement `addAttendee({name, email})` and `removeAttendee(email)` methods.
 * [ ] You should not be able to add an attendee after the appointment `start` datetime.