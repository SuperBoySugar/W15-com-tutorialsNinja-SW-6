package com.tutoralsninja.utility;

import com.google.common.base.Function;
import com.tutoralsninja.browserfactory.ManageBrowser;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.*;
import org.testng.Assert;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class Utility extends ManageBrowser {

    // This method will click on element
    public void clickOnElement(WebElement element) {
        element.click();
    }

    public void doClickOnElement(WebElement element, String text){
        element.click();
    }

    public void pmClickOnElement(By by) {
        WebElement link = driver.findElement(by);
        link.click();
    }
    /**
     * This method will get text from element
     * @param element
     * @return
     */
    public String getTextFromElement(WebElement element) {
        return element.getText();
    }

    /**
     *  This method will send text to element
     */
    public void sendTextToElement(WebElement element, String text){
        element.sendKeys(text);
    }

    /**
     * This method will send text to element by CharSequence
     * @param element
     * @param keys
     */
    public void sendKeysToElement(WebElement element, CharSequence keys){
        element.sendKeys(keys);
    }

    /**
     *  This method will clear text from field
     * @param element
     * @param keys
     */
    public void clearTextFromField(WebElement element, CharSequence keys){
        element.sendKeys(Keys.CONTROL+"a");
        element.sendKeys(Keys.DELETE);
    }


    //*************************** Window Handle Methods ***************************************//

    /**
     * This method will close all windows
     */
    public void closeAllWindows(List<String> hList, String parentWindow) {
        for (String str : hList) {
            if (!str.equals(parentWindow)) {
                driver.switchTo().window(str).close();
            }
        }
    }

    /**
     * This method will switch to parent window
     */
    public void switchToParentWindow(String parentWindowId) {
        driver.switchTo().window(parentWindowId);
    }

    /**
     * This method will find that we switch to right window
     */
    public boolean switchToRightWindow(String windowTitle, List<String> hList) {
        for (String str : hList) {
            String title = driver.switchTo().window(str).getTitle();
            if (title.contains(windowTitle)) {
                System.out.println("Found the right window....");
                return true;
            }
        }
        return false;
    }

    //*************************** Action Methods ***********************************//

    // This method will select value from drop down menu

     public void selectByValueFromDropDown(WebElement element, String value) {
        new Select(element).selectByValue(value);
    }

    // This method will select option matching text
      public void selectByVisibleTextFromDropDown(WebElement element, String text) {
        new Select(element).selectByVisibleText(text);
    }

    // This method will select option matching value
    public void selectByIndexFromDropDown(WebElement element, int index) {
        new Select(element).selectByIndex(index);
    }

    // This method will mouse hover and click the element
    public void mouseHoverToElementAndClick(WebElement element) {
        Actions actions = new Actions(driver);
        actions.moveToElement(element).click().perform();
    }

    // This method will mouse hover on element
    public void mouseHoverToElement(WebElement element) {
        Actions actions = new Actions(driver);
        actions.moveToElement(element).perform();
    }


    /**
     * This method will verify text displayed on web page
     * @param expectedMessage
     * @param element
     * @param displayMessage
     */
    public void verifyText(String expectedMessage, WebElement element, String displayMessage) {
        String actualMessage = getTextFromElement(element);
        Assert.assertEquals(displayMessage, expectedMessage, actualMessage);
    }

    // Thbis method will generate random email
    public String getRandomEmail() {
        String saltChars = "abcdefghijklmnopqrstuvwxyz1234567890";
        StringBuilder email = new StringBuilder();
        Random random = new Random();
        while (email.length() < 10) {
            int index = (int) (random.nextFloat() * saltChars.length());
            email.append(saltChars.charAt(index));
        }
        String saltStr = (email.toString() + "@gmail.com");
        return saltStr;
    }


    //*************************** Alert Methods ***************************************//

    // This method will dismiss alert
    public void dismissAlert(){
        Alert alert = driver.switchTo().alert();    // Creating alert object reference
        alert.dismiss();
    }

    //This method will accept alert
    public void acceptAlert(){
        Alert alert = driver.switchTo().alert();
        alert.accept();
    }

    // This method will get text from alert
    public String getTextFromAlert() {
        Alert alert = driver.switchTo().alert();
        String textOnAlert = alert.getText();
        System.out.println(textOnAlert);
        return textOnAlert;
    }

    public void dragAndDrop(By drag, By drop){

        Actions actions = new Actions(driver);
        WebElement draggable = driver.findElement(drag);
        WebElement droppable = driver.findElement(drop);
        actions.dragAndDrop(draggable,droppable).build().perform();

    }

    //This method will switch to alert
    public void switchToAlert() {
        driver.switchTo().alert();
    }


    // This method will send text from alert
    public void sendTextToAlert(String text) {
        driver.switchTo().alert().sendKeys(text);
    }


    //************************** Waits Methods *********************************************//

    // This method will use to wait until visiblity of element
    public WebElement waitUnitVisibilityOfElementLocated(By by, int time){

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(time));
        return wait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }

    // This method is for Fluent wait
    public WebElement waitForElementWithFluentWait(By by, int time, int pollingTime){
        Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
                .withTimeout(Duration.ofSeconds(time))
                .pollingEvery(Duration.ofSeconds(pollingTime))
                .ignoring(NoSuchElementException.class);

        WebElement element = wait.until(new Function<WebDriver, WebElement>() {
            public WebElement apply(WebDriver driver) {
                return driver.findElement(by);
            }
        });
        return element;
    }


    //************************** ScreenShot Methods *********************************************//
    public static String currentTimeStamp() {
        Date d = new Date();
        return d.toString().replace(":", "_").replace(" ", "_");
    }

    /*
     *Screenshot methods
     */
    public static String takeScreenShot(String fileName) {
        String filePath = System.getProperty("user.dir") + "/test-output/html/";
        TakesScreenshot screenshot = (TakesScreenshot) driver;
        File scr1 = screenshot.getScreenshotAs(OutputType.FILE);
        String imageName = fileName + currentTimeStamp() + ".jpg";
        String destination = filePath + imageName;
        try {
            FileUtils.copyFile(scr1, new File(destination));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return destination;
    }


    //***************************** Is Display Methods **********************************************//
    /**
     * This method will verify that element is displayed
     */
    public boolean verifyThatElementIsDisplayed(By by) {
        WebElement element = driver.findElement(by);
        if (element.isDisplayed()) {
            return true;
        } else {
            return false;
        }
    }

    public boolean verifyThatElementIsDisplayed(WebElement element) {
        if (element.isDisplayed()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * This method will verify that element is displayed
     */
    public boolean verifyThatTextIsDisplayed(By by, String text) {
        WebElement element = driver.findElement(by);
        if (text.equals(element.getText())) {
            return true;
        } else {
            return false;
        }
    }

    public boolean verifyThatTextIsDisplayed(WebElement element, String text) {
        if (text.equals(element.getText())) {
            return true;
        } else {
            return false;
        }
    }

    // This method will verify logo is visible
    public void verifyLogoVisible(WebElement element){
        boolean logoPresent = element.isDisplayed();
        Assert.assertTrue(logoPresent);
        if (!logoPresent){
            System.out.println("Logo not Visible");
        }else{
            System.out.println("Logo is Visible");
        }
    }


    /******
     * This method verifies elements using locator directly as the second
     * instead of String
     * @param expectedMessage
     * @param displayMessage
     */

    public void verifyElements( WebElement element,String expectedMessage, String displayMessage) {
        String actualMessage = getTextFromElement(element);
        Assert.assertEquals(actualMessage, expectedMessage, displayMessage);
    }

    public static String getScreenshot(WebDriver driver, String screenshotName) {
        String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);

        // After execution, you could see a folder "FailedTestsScreenshots" under screenshot folder
        String destination = System.getProperty("user.dir") + "/src/main/java/com/tutoralsninja/screenshots/" + screenshotName + dateName + ".png";
        File finalDestination = new File(destination);
        try {
            FileUtils.copyFile(source, finalDestination);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return destination;
    }


//    public void verifyProductAreInDescendingOrder(WebElement element) {
////        Thread.sleep(2000);
//        List<WebElement> originalList = driver.findElements(element);
//        List<String> originalProductNameList = new ArrayList<>();
//        for (WebElement product : originalList) {
//            originalProductNameList.add(product.getText());
//        }
//
//        originalProductNameList.sort(String.CASE_INSENSITIVE_ORDER.reversed());
//        System.out.println(originalProductNameList);
//
//        List<WebElement> afterSortingList = driver.findElements(element);
//        List<String> afterSortingProductName = new ArrayList<>();
//        for (WebElement product1 : afterSortingList) {
//            afterSortingProductName.add(product1.getText());
//        }
//        System.out.println(afterSortingProductName);
////        Assert.assertEquals("Product not sorted", originalProductNameList, afterSortingProductName.toString());
//        Assert.assertEquals(originalProductNameList, afterSortingProductName, "Product Not Sorted");
//    }

}
