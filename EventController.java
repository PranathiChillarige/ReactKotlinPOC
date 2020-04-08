package com.JavaPostgress.demo.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.JavaPostgress.demo.DAO.EventRepository;
import com.JavaPostgress.demo.Entity.EventEntity;
import com.JavaPostgress.demo.Model.EventModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
//@CrossOrigin
//@PropertySource(value= {"classpath:configuration.properties"})
public class EventController {

	@Autowired
	private EventRepository repository;
	
	
	@GetMapping("/getAllEvents")
	public ResponseEntity<?> getAllEvents() {
		return new ResponseEntity<Iterable<EventEntity>>(repository.findAll(),HttpStatus.OK);
	}
	@GetMapping("/")
	public String getAllEvent() {
		return "Hi";
	}
	@PostMapping("/saveEvent")
	public String saveEvent(@RequestBody EventModel Event) {
		
		try {
			System.out.printf("Body",Event);
			EventEntity e= new EventEntity();
			e.setID(Event.getID());
			e.setName(Event.getName());
			e.setCreatedBy(Event.getCreatedBy());
			e.setDate(Event.getDate());
			repository.save(e);
			return "Event Saved Successfully";
		}catch(Exception e) {
			System.out.printf("e",e);
			return "Unable to Save";
		}
		
	}
	@PutMapping("/editEvent/{ID}")
	public String editEvent(@RequestBody EventEntity Event,@PathVariable String ID) {
		try {
			Event.setID(ID);
			repository.save(Event);
			return "Event Updated Successfully";
		}catch(Exception e) {
			return "Unable to Update";
		}
	}
	@DeleteMapping("/deleteEvent/{ID}")
	public String deleteEvent(@PathVariable Long ID) {
		try {
			repository.deleteById(ID);
			return "Event Deleted Successfully";
		}catch(Exception e) {
			return "Unable to delete";
		}
	}
	@DeleteMapping("/deleteEvents")
	public String deleteEvent() {
		try {
			repository.deleteAll();
			return "Events Deleted Successfully";
		}catch(Exception e) {
			return "Unable to delete";
		}
	}

}