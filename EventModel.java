package com.JavaPostgress.demo.Model;


public class EventModel {
    private String ID;
    private String Name;
    private String CreatedBy;
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

    