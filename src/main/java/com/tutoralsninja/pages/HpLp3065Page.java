package com.tutoralsninja.pages;

import com.tutoralsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HpLp3065Page extends Utility {

    private static final Logger log = LogManager.getLogger(HpLp3065Page.class.getName());

    public HpLp3065Page() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='HP LP3065']")
    WebElement textHPLP3065;

    @CacheLookup
    @FindBy(xpath = "//div[@class='input-group date']//button[@type='button']")
    WebElement deliveryDate;

    @CacheLookup
    @FindBy(id = "input-quantity")
    WebElement quantity;

    @CacheLookup
    @FindBy(xpath = "//button[text()='Add to Cart']")
    WebElement addToCart;

    @CacheLookup
    @FindBy(xpath = "//div[text()='Success: You have added ']")
    WebElement textMessage;

    @CacheLookup
    @FindBy(xpath = "//a[text()='shopping cart']")
    WebElement shoppingCart;

    public void verifyTextHpLp3065(String expectedText) {
        verifyElements(textHPLP3065, expectedText, "error");
        log.info("Verify Text HPLP3065: " + expectedText.toString() );

    }

    public void clickOnDeliveryDate() {
        String year = "2022";
        String month = "November";
        String date = "30";
        pmClickOnElement(By.xpath("//div[@class='input-group date']//button[@type='button']"));
        while (true) {
            String monthYear = driver.findElement(By.cssSelector("div[class='datepicker-days'] th[class='picker-switch']")).getText();
            System.out.println(monthYear); // Apr 2023
            String[] a = monthYear.split(" ");
            String mon = a[0];
            String yer = a[1];
            if (mon.equalsIgnoreCase(month) && yer.equalsIgnoreCase(year)) {
                break;
            } else {
                pmClickOnElement(By.xpath("//div[@class='datepicker-days']//th[@class='next'][contains(text(),'›')]"));
            }
        }
        // Select the date
        List<WebElement> allDates = driver.findElements(By.xpath("//tbody//tr//td[@class='day']"));
        for (WebElement dt : allDates) {
            if (dt.getText().equalsIgnoreCase(date)) {
                dt.click();
                break;
            }
        }
    }

    public void inputQuantity(String qty) {
        sendTextToElement(quantity, Keys.BACK_SPACE + qty);
        log.info("Input Quantity: " + qty.toString() );
    }
    public void clickOnAddToCartBtn(){
        clickOnElement(addToCart);
        log.info("Click On Add To Cart Button: " .toString() );
    }
    public void verifyTextMessage(String expectedText){
        verifyElements(textMessage, expectedText, "error");
        log.info("Verify Text Message: " + expectedText.toString() );
    }
    public void clickOnShoppingCart(){
        clickOnElement(shoppingCart);
        log.info("Click On Shopping Cart: " .toString() );
    }
}
