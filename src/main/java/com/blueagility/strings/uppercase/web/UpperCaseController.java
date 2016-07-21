package com.blueagility.strings.uppercase.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Serves up the upper case web content
 */
@Controller
public class UpperCaseController {

    private String upperCaseServiceUrl = null;

    /**
     * Get the upper case service url
     * @return
     */
    private String upperCaseServiceUrl() {
        if (StringUtils.isEmpty(upperCaseServiceUrl)) {
            upperCaseServiceUrl = System.getenv("uppercase.service.url");
            if (StringUtils.isEmpty(upperCaseServiceUrl)) {
                throw new IllegalStateException("No URL provided for UpperCase service");
            }
        }

        return upperCaseServiceUrl;
    }

    @RequestMapping("/upperCase")
    public String upperCase(Model model) {
        model.addAttribute("upperCaseServiceUrl", upperCaseServiceUrl());
        return "upperCase";
    }

}
