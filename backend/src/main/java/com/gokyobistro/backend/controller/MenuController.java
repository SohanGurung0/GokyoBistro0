package com.gokyobistro.backend.controller;

import com.gokyobistro.backend.model.MenuItem;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "${frontend.url}")
@RequestMapping("/api/menu")
public class MenuController {

    @GetMapping
    public List<MenuItem> getMenu() {
        return Arrays.asList(
            new MenuItem(1L, "Everest Momo", "Authentic steamed chicken dumplings served with spicy tomato achar.", 12.99, "Starters", "/images/momo.jpg"),
            new MenuItem(2L, "Dal Bhat Tarkari", "Traditional Nepali staple with lentils, rice, vegetable curry, and pickles.", 18.99, "Mains", "/images/dalbhat.jpg"),
            new MenuItem(3L, "Sherpa Stew (Thukpa)", "Hearty Tibetan-style noodle soup with vegetables and meat.", 14.50, "Mains", "/images/thukpa.jpg"),
            new MenuItem(4L, "Gokyo Special Platter", "Assortment of tandoori grilled meats, naan, and raita.", 24.99, "Mains", "/images/platter.jpg"),
            new MenuItem(5L, "Kathmandu Sel Roti", "Sweet ring-shaped rice bread, a traditional treat.", 6.50, "Desserts", "/images/selroti.jpg")
        );
    }
}
