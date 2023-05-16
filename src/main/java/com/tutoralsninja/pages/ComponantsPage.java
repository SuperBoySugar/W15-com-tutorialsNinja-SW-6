package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class ComponantsPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComponantsPage.class.getName());

    public ComponantsPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//h2[text()='Components']")
    WebElement componants;

    public void verifyTextComponants(String expectedText) {
        verifyElements(componants, expectedText, "Error");
        log.info("Verify Text Componants: " + expectedText.toString() );
    }
}
