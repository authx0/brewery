package com.example.brewerydashboard.repository;

import com.example.brewerydashboard.model.BreweryData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends JpaRepository<BreweryData, Long> {
}