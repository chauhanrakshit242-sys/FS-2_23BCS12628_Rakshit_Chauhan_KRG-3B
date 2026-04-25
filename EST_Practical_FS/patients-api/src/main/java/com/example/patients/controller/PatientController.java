package com.example.patients.controller;

import com.example.patients.model.Patient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    // GET /patients - returns a hardcoded list of 3 patients
    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {
        List<Patient> patients = Arrays.asList(
            new Patient(1, "Alice Johnson", 34),
            new Patient(2, "Bob Smith",     52),
            new Patient(3, "Carol White",   28)
        );
        return ResponseEntity.ok(patients); // 200 OK
    }

    // POST /patients - accepts a Patient JSON body and prints it to the console
    @PostMapping
    public ResponseEntity<String> createPatient(@RequestBody Patient patient) {
        System.out.println("Received patient: id=" + patient.getId()
            + ", name=" + patient.getName()
            + ", age=" + patient.getAge());
        return ResponseEntity.status(HttpStatus.CREATED)
                             .body("Patient received successfully"); // 201 Created
    }
}
