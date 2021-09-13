package com.mozanta.studentmanagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Studentcontroller {
    @Autowired
    private StudentRepository studentRepository;

@GetMapping("/")
    public List<Student> GetStudent() {
        return studentRepository.findAll(); 
}
@GetMapping("/{id}")
public Student GetStudent(@PathVariable String id) {
    return studentRepository.findById(id).orElse(null);
}
@PostMapping("/")
public Student postMethodName(@RequestBody Student student) {
return studentRepository.save(student);   
}
}