We would now like the Calendar to be able to compute a list of slots of a specific duration between 2 dates.

TODO
 * [ ] add a `slotsBetweenDates(start, end, duration)` method that returns an array of all the possible slots of duration `duration` (in minutes) between javascript `start` and `end` `Date` objects.
 * [ ] add an `availableSlotsBetweenDates(start, end, duration)` method that returns an array of all the slots that are still available between those dates. A slot is available if there is either no appointment in the calendar at that time, or if the slot matches an appointment that still has available spots. All the appointments that are confirmed yet still available in the calendar between those dates should be included in that response.