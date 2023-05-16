package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MacBookPage extends Utility {

    private static final Logger log = LogManager.getLogger(MacBookPage.class.getName());

    public MacBookPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='MacBook']")
    WebElement textMacBook;

    @CacheLookup
    @FindBy(id = "button-cart")
    WebElement addToCartBtn;

    @CacheLookup
    @FindBy(xpath = "//div[text()='Success: You have added ']")
    WebElement successMessage;

    @CacheLookup
    @FindBy(xpath = "//a[text()='shopping cart']")
    WebElement shoppingCart;

    public void verifyTextMacBook(String expectedText) {
        verifyElements(textMacBook, expectedText, "Error");
        log.info("Verify Text MacBook: " + expectedText.toString());
    }

    public void clickOnAddToCartBtn() {
        clickOnElement(addToCartBtn);
        log.info("Click On Add To Cart: ".toString());

    }

    public void verifySuccessMessage(String expectedMessage) {
        verifyElements(successMessage, expectedMessage, "error");
        log.info("Verify Success Message: " + expectedMessage.toString());
    }

    public void clickOnShoppingCart() {
        clickOnElement(shoppingCart);
        log.info("Click On Shopping Cart: " .toString());
    }
}