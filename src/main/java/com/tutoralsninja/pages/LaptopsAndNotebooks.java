package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class LaptopsAndNotebooks extends Utility {

    private static final Logger log = LogManager.getLogger(LaptopsAndNotebooks.class.getName());

    public LaptopsAndNotebooks() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[text()='Laptops & Notebooks']")
    WebElement laptopsAndNotebooks;

    @CacheLookup
    @FindBy(id = "input-sort")
    WebElement sortByHighToLow;

    @CacheLookup
    @FindBy(xpath = "//a[text()='MacBook']")
    WebElement macBook;

    public void verifyTextLaptosAndNotebooks(String expectedText) {
        verifyElements(laptopsAndNotebooks, expectedText, "Error");
        log.info("Verify Text Laptops And Notebooks: " + expectedText.toString());

    }

    public void selectHighToLowFromSortByDropDown(String filter) {
        selectByVisibleTextFromDropDown(sortByHighToLow, filter);
        log.info("Select High To Low: " + filter.toString());
    }

//    public void validateProductPricesAreSortedByHighToLow() {
//        verifyProductsAreSortedByHighToLow();
//    }

    public void selectMacBook() {
        clickOnElement(macBook);
        log.info("Select MacBook: " .toString());
    }


}



