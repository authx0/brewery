package com.example.brewerydashboard.service;

import com.example.brewerydashboard.model.BreweryData;
import com.example.brewerydashboard.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    private final DataRepository dataRepository;

    @Autowired
    public DashboardService(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    public List<BreweryData> fetchBreweryData() {
        return dataRepository.findAll();
    }
}