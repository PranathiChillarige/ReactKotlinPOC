package com.JavaPostgress.demo.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.JavaPostgress.demo.Entity.EventEntity;


@Repository
public interface EventRepository extends CrudRepository<EventEntity, Long> {

}