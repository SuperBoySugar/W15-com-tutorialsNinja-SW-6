package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShoppingCartPage extends Utility {

    private static final Logger log = LogManager.getLogger(ShoppingCartPage.class.getName());

    public ShoppingCartPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Shopping Cart')]")
    WebElement textShoppingCart;

    @CacheLookup
    @FindBy(css = "form .text-left a[href^='https']")
    WebElement textHplp3065;

    @CacheLookup
    @FindBy(css = "form tr:nth-child(1) > td:nth-child(2) > small:nth-child(3)")
    WebElement deliveryDate;

    @CacheLookup
    @FindBy(css = "form tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3)")
    WebElement model;

    @CacheLookup
    @FindBy(css = "tbody tr td:nth-child(6)")
    WebElement total;

    @CacheLookup
    @FindBy(css = "form .text-left a[href^='https']")
    WebElement macBook;

    @CacheLookup
    @FindBy(css = "input[name*='quantity']")
    WebElement changeQuantity;

    @CacheLookup
    @FindBy(css = "button[type='submit']")
    WebElement updateBtn;

    @CacheLookup
    @FindBy(xpath = "//div[contains (text(), 'Success: You have modified')]")
    WebElement updateMessage;

    @CacheLookup
    @FindBy(css = "tbody tr td:nth-child(6)")
    WebElement totalUpdate;

    @CacheLookup
    @FindBy(xpath = "//a[@class='btn btn-primary']")
    WebElement checkoutBtn;


    public void verifyTextShoppingCart(String expectedMessage) {
        verifyElements(textShoppingCart, expectedMessage, "Error");
        log.info("Verify Text Shopping cart: " + expectedMessage.toString());
    }

    public void verifyTextHpLp3065(String expectedText) {
        verifyElements(textHplp3065, expectedText, "Error");
        log.info("Verify Text HPLP3065: " + expectedText.toString());
    }

    public void verifyDeliverDate(String expectedText) {
        verifyElements(deliveryDate, expectedText, "error");
        log.info("Verify Delivery Date: " + expectedText.toString());
    }

    public void verifyModel(String expectedMessage) {
        verifyElements(model, expectedMessage, "error");
        log.info("Verify Model: " + expectedMessage.toString());
    }

    public void verifytotal(String expectedMessage) {
        verifyElements(total, expectedMessage, "error");
        log.info("Verify Total: " + expectedMessage.toString());
    }

    public void verifyProductMacBook(String expectedText) {
        verifyElements(macBook, expectedText, "error");
        log.info("Verify Product MacBook: " + expectedText.toString());
    }

    public void changeQuantity(String qty) {
        sendKeysToElement(changeQuantity, Keys.BACK_SPACE + qty);
        log.info("Change Quantity: " + qty.toString());
    }

    public void clickOnUpdateBtn() {
        clickOnElement(updateBtn);
        log.info("Click On UpdateBtn: ".toString());
    }

    public void verifyUpdateMessage(String expectedMessage) {
        verifyElements(updateMessage, expectedMessage, "Error message");
        log.info("Verify Update Message: " + expectedMessage.toString());
    }

    public void verifyTotalUpdate(String expectedTotal) {
        verifyElements(total, expectedTotal, "Error in Total");
        log.info("Verify Total Update: " + expectedTotal.toString());
    }

    public void clickOnCheckoutBtn() {
        clickOnElement(checkoutBtn);
        log.info("Click On CheckoutBtn: ".toString());
    }
}
