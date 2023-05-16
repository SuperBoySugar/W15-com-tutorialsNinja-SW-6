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

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@class='nav navbar-nav']//li//a")
    WebElement topMenuOption;

    @CacheLookup
    @FindBy(xpath = "//a[text()='Desktops']")
    WebElement desktop;

    @CacheLookup
    @FindBy(xpath = "//a[text()='Laptops & Notebooks']")
    WebElement laptopsAndNotebooks;

    @CacheLookup
    @FindBy(xpath = "//a[text()='Components']")
    WebElement components;

    @CacheLookup
    @FindBy(xpath = "//footer//a[text()='My Account']")
    WebElement myAccount;


    public void mouseHoverAndClickOnDesktop() {
        mouseHoverToElementAndClick(desktop);
        log.info("MouseHover And Click On Desktops: " .toString() );
    }

    public void selectMenu(String menu) {
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//ul[@class='nav navbar-nav']//li//a"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(menu)) {
                names.click();
                break;
            }
        }
        log.info("MouseHover And Click On Desktops: " .toString() );
    }

    public void mouseHoverAndClickOnLaptopsAndNotebooks() {
        mouseHoverToElementAndClick(laptopsAndNotebooks);
        log.info("MouseHover And Click On LaptopsAndNotebooks: " .toString() );
    }


    public void mouseHoverOnComponantsAndClick(){
        mouseHoverToElementAndClick(components);
        log.info("MouseHover On Componants and Click: " .toString() );
    }

    public void clickOnMyAccount() {
        clickOnElement(myAccount);
        log.info("Click On My Account: " .toString() );

    }

}
