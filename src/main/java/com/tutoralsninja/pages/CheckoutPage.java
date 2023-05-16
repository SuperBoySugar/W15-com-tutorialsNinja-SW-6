package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class CheckoutPage extends Utility {

    private static final Logger log = LogManager.getLogger(CheckoutPage.class.getName());

    public CheckoutPage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='Checkout']")
    WebElement checkoutText;

    @CacheLookup
    @FindBy(xpath = "//h2[text()='New Customer']")
    WebElement newCustomer;

    @CacheLookup
    @FindBy(xpath = "//label[text()='Guest Checkout']")
    WebElement guestCheckout;

    @CacheLookup
    @FindBy(css = "#button-account")
    WebElement continueBtn;

    @CacheLookup
    @FindBy(id = "input-payment-firstname")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(id = "input-payment-lastname")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(id = "input-payment-email")
    WebElement emailField;

    @CacheLookup
    @FindBy(id = "input-payment-telephone")
    WebElement telephone;

    @CacheLookup
    @FindBy(id = "input-payment-address-1")
    WebElement addressField;

    @CacheLookup
    @FindBy(id = "input-payment-city")
    WebElement cityField;

    @CacheLookup
    @FindBy(id = "input-payment-postcode")
    WebElement postCodeField;

    @CacheLookup
    @FindBy(id = "input-payment-country")
    WebElement country;

    @CacheLookup
    @FindBy(id = "input-payment-zone")
    WebElement region;

    @CacheLookup
    @FindBy(id = "button-guest")
    WebElement continueTab;

    @CacheLookup
    @FindBy(xpath = "//textarea[@name='comment']")
    WebElement comment;

    @CacheLookup
    @FindBy(xpath = "//input[@type='checkbox']")
    WebElement checkBox;

    @CacheLookup
    @FindBy(id = "button-payment-method")
    WebElement textContinue;

    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-warning alert-dismissible']")
    WebElement paymentWarning;

    @CacheLookup
    @FindBy(xpath = "//span[text()='My Account']")
    WebElement myAccount;

    public void verifyCheckoutText(String expectedText) {
        verifyElements(checkoutText, expectedText, "Error Text not displayed as expected");
        log.info("Verify Checkout Text: " + expectedText.toString() );

    }

    public void verifyNewCustomerText(String expectedText) {
        verifyElements(newCustomer, expectedText, "Error, Text/Message not displayed as expected!");
        log.info("Verify New Customer: " + expectedText.toString() );
    }

    public void clickOnGuestCheckout() {
        clickOnElement(guestCheckout);
        log.info("Click On Guest Checkout " .toString() );
    }

    public void clickOnContinueBtn() {
        clickOnElement(continueBtn);
        log.info("Click On Continue Button " .toString() );
    }

    public void inputFirstNameField(String firstName) {
        sendTextToElement(firstNameField, firstName);
        log.info("Input FirstName: " + firstNameField.toString() );
    }

    public void inputLastNameField(String lastName) {
        sendTextToElement(lastNameField, lastName);
        log.info("Input LastName: " + lastNameField.toString() );
    }

    public void inputEmailField(String email) {
        sendTextToElement(emailField, email);
        log.info("Input Email: " + emailField.toString() );
    }

    public void inputTelephoneField(String telNumber) {
        sendTextToElement(telephone, telNumber);
        log.info("Input Telephone: " + telephone.toString() );
    }

    public void inputAddressField(String address) {
        sendTextToElement(addressField, address);
        log.info("Input Address: " + addressField.toString() );
    }

    public void inputCity(String city) {
        sendTextToElement(cityField, city);
        log.info("Input City: " + cityField.toString() );
    }

    public void inputPostCode(String postCode) {
        sendTextToElement(postCodeField, postCode);
        log.info("Input PostCode: " + postCodeField.toString() );
    }

    public void selectCountry(String country1) {
        selectByVisibleTextFromDropDown(country, country1);
        log.info("Select Country: " + country.toString() );
    }

    public void selectRegion(String region1) {
        selectByVisibleTextFromDropDown(region, region1);
        log.info("Select Region: " + region.toString() );
    }

    public void clickOnContinueTab() {
        clickOnElement(continueTab);
        log.info("Click On Continue Tab: " + continueTab.toString() );
    }

    public void inputComment(String comment1) throws InterruptedException {
        Thread.sleep(1000);
        sendTextToElement(comment, comment1);
        log.info("Input Comment: " + comment1.toString() );
    }

    public void clickOnCheckBox() {
        clickOnElement(checkBox);
        log.info("Click On CheckBox: " .toString() );
    }

    public void clickOnTextContinue() {
        clickOnElement(textContinue);
        log.info("Click On Text Continue: " .toString() );
    }

    public void verifyPaymentWarning(String expectedWarning) {
        verifyElements(paymentWarning, expectedWarning, "Error, Text/Message not displayed as expected!");
        log.info("Verify Payment Warning: " + expectedWarning.toString() );
    }

    public void clickOnMyAccount() {
        clickOnElement(myAccount);
        log.info("Click On My Account: " .toString() );
    }

}
