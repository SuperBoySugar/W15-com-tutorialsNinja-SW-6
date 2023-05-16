package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DesktopPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopPage.class.getName());

    public DesktopPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[text()='Desktops']")
    WebElement desktopTitle;

    @CacheLookup
    @FindBy(id = "input-sort")
    WebElement sortBy;

    @CacheLookup
    @FindBy(css = ".product-thumb h4 a")
    WebElement productList;

    @CacheLookup
    @FindBy(id = "input-sort")
    WebElement sortByAToZ;

    @CacheLookup
    @FindBy(xpath = "//a[text()='HP LP3065']")
    WebElement hpLP3065;

    public void verifyDeskTopTitle(String expectedText) {
        verifyElements(desktopTitle, expectedText, "Title not displayed as expected");
        log.info("Verify DeskTop Title: " + expectedText.toString() );
    }


    public void selectZToAFromSortByDropdown(String filter) {
        selectByVisibleTextFromDropDown(sortBy, filter);
        log.info("Select Z To A: " + filter.toString() );
    }

    public void verifyProductArrangeInDescendingOrder() {

        List<WebElement> products = driver.findElements(By.xpath("//h4/a"));
        ArrayList<String> originalProductsName = new ArrayList<>();
        for (WebElement e : products) {
            originalProductsName.add(e.getText());
        }
        System.out.println(originalProductsName);
        // Sort By Reverse order
        Collections.reverse(originalProductsName);
        System.out.println(originalProductsName);
        log.info("Verify Product in Descending Order: " .toString() );
    }

    public void selectAToZFromSortByDropDown(String filter1) {
        selectByVisibleTextFromDropDown(sortByAToZ, filter1);
        log.info("Select A To Z: " + filter1.toString() );
    }

    public void selectProductHPLP3065() {
        clickOnElement(hpLP3065);
        log.info("Select Product: " .toString() );
    }


}
