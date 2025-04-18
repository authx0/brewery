package com.example.brewerydashboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.brewerydashboard.service.DashboardService;

@Controller
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/dashboard")
    public String getDashboard(Model model) {
        model.addAttribute("breweryData", dashboardService.fetchBreweryData());
        return "dashboard";
    }
}