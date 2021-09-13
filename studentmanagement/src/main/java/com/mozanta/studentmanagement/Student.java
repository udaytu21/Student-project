package com.mozanta.studentmanagement;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student{
    @Id
    private String id;

    private String Sid;
    private String Name;
    private String Dob;
    private String Clas;
    private String Div;
    private String Gender; 
}