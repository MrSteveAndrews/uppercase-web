package com.blueagility.strings.uppercase.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Serves up web content
 */
@Controller
public class UpperCaseController {

    @RequestMapping("/upperCase")
    public String upperCase() {
        return "upperCase";
    }

}
