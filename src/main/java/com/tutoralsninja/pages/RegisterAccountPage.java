package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterAccountPage.class.getName());

    public RegisterAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='Register Account']")
    WebElement registerAccount;

    @CacheLookup
    @FindBy(id = "input-firstname")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "input-lastname")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "input-email")
    WebElement email;

    @CacheLookup
    @FindBy(id = "input-telephone")
    WebElement telephone;

    @CacheLookup
    @FindBy(id = "input-password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "input-confirm")
    WebElement confimPass;

    @CacheLookup
    @FindBy(xpath = "//input[@type='checkbox']")
    WebElement pPCheckbox;

    @CacheLookup
    @FindBy(xpath = "//input[@value='Continue']")
    WebElement regContinueBtn;

    @CacheLookup
    @FindBy(xpath = "//h1[text()='Your Account Has Been Created!']")
    WebElement successMessage;

    public void verifyTextRegisterAccount(String expectedText) {
        verifyElements(registerAccount, expectedText, "Error, Text/Message not displayed as expected!");
        log.info("Verify Text Register Account: " + expectedText.toString());
    }

    public void enterFirstName(String name) {
        sendTextToElement(firstName, name);
        log.info("Enter First Name: " + name.toString());
    }

    public void enterLastName(String lName) {
        sendTextToElement(lastName, lName);
        log.info("Enter Last Name: " + lName.toString());
    }

    public void enterEmail() {
        sendTextToElement(email, getRandomEmail());
        log.info("Enter Email: " .toString());
    }

    public void enterTelephone(String phone) {
        sendTextToElement(telephone, phone);
        log.info("Enter Telephone: " + phone.toString());
    }

    public void enterPassword(String pass) {
        sendTextToElement(password, pass);
        log.info("Enter Password: " + pass.toString());
    }

    public void enterConfirmPassword(String confPass) {
        sendTextToElement(confimPass, confPass);
        log.info("Enter Confirm Password: " + confPass.toString());
    }

    public void clickOnPrivacyPolicyCheckbox() {
        clickOnElement(pPCheckbox);
        log.info("Click On ppCheck: ".toString());
    }

    public void clickContinueButtonOnRegisterPage() {
        clickOnElement(regContinueBtn);
        log.info("Click On ContinueButton Register Page: ".toString());
    }

    public void verifyAccountCreatedSuccessfullyText(String expectedMessage) {
        verifyElements(successMessage, expectedMessage, "Error, Text/Message not displayed as expected!");
        log.info("Verify Account Created Successfully: " + expectedMessage.toString());
    }
}
