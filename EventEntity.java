package com.JavaPostgress.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Event")
public class EventEntity {

    @Id
   @Column(name="ID")
    private String ID;
    @Column(name="Name")
    private String Name;
    @Column(name="CreatedBy")
    private String CreatedBy;
    @Column(name="Date")
    private String Date;

 

    public String getID() {
        return ID;
    }

    public String getName() {
        return Name;
    }
    public String getCreatedBy() {
        return CreatedBy;
    }
    public String getDate() {
        return Date;
    }
    public void setID(String ID) {
        this.ID=ID;
    }

    public void setName(String Name) {
    	 this.Name=Name;
    }
    public void setCreatedBy(String CreatedBy) {
    	 this.CreatedBy=CreatedBy;
    }
    public void setDate(String Date) {
    	 this.Date=Date;
    }}

    