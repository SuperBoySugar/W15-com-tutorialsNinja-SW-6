package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class MyAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(MyAccountPage.class.getName());

    public MyAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[text()='Returning Customer']")
    WebElement returningCustText;

    @CacheLookup
    @FindBy(xpath = "//a[text()='Continue']")
    WebElement accountContinueBtn;

    @CacheLookup
    @FindBy(xpath = "//h1[text()='Account Logout']")
    WebElement logoutMessage;

    @CacheLookup
    @FindBy(xpath = "//a[text()='Continue']")
    WebElement continueBtnLogout;

    @CacheLookup
    @FindBy(id = "input-email")
    WebElement email;

    @CacheLookup
    @FindBy(id = "input-password")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@value='Login']")
    WebElement loginBtn;

    @CacheLookup
    @FindBy(xpath = "//h2[text()='My Account']")
    WebElement myAccountText;


    public void myAccountOptionRegister(String menu) {
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//div[@class='list-group']//a"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(menu)) {
                names.click();
                break;
            }
        }
        log.info("Click on My Account Option: " + menu.toString());
    }

    public void verifyReturningCustomerText(String expectedText) {
        verifyElements(returningCustText, expectedText, "Error, Text/Message not displayed as expected!");
        log.info("Verify Text Returning customer: " + expectedText.toString());
    }

    public void clickOnContinueButton() {
        clickOnElement(accountContinueBtn);
        log.info("Click On Continue Button: ".toString());
    }

    public void verifyLogoutMessage(String expectedMessage) {
        verifyElements(logoutMessage, expectedMessage, "Error, Text/Message not displayed as expected!");
        log.info("Verify Logout Message: " + expectedMessage.toString());
    }

    public void clickContinueBtnOnLogout() {
        clickOnElement(continueBtnLogout);
        log.info("Click On Continue Btn Logout: ".toString());
    }

    public void enterEmaiAddress(String email1) {
        sendTextToElement(email, email1);
        log.info("Enter Email Address: " + email1.toString());
    }

    public void enterPassword(String pass) {
        sendTextToElement(password, pass);
        log.info("Enter Password: " + pass.toString());
    }

    public void clickOnLoginBtn() {
        clickOnElement(loginBtn);
        log.info("Click On LoginBtn: ".toString());
    }

    public void verifyMyAccountText(String expectedTitle) {
        verifyElements(myAccountText, expectedTitle, "Error, Text/Message not displayed as expected!");
        log.info("Verify My Account Text: " + expectedTitle.toString());
    }


}
