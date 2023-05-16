package com.tutoralsninja.steps;

import com.tutoralsninja.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LaptopsAndNoteBooksTest {
    @Given("^I mouse hover and click on Laptops and Notebooks$")
    public void iMouseHoverAndClickOnLaptopsAndNotebooks() {
        new HomePage().mouseHoverAndClickOnLaptopsAndNotebooks();
    }

    @When("^I Select menu \"([^\"]*)\"$")
    public void iSelectMenu(String menu)  {
        new HomePage().selectMenu(menu);

    }

    @Then("^I select high to low from sort by dropdown \"([^\"]*)\"$")
    public void iSelectHighToLowFromSortByDropdown(String filter)  {
        new LaptopsAndNotebooks().selectHighToLowFromSortByDropDown(filter);

    }

    @And("^I select MacBook$")
    public void iSelectMacBook() {
        new LaptopsAndNotebooks().selectMacBook();
    }

    @And("^I verify MacBook title \"([^\"]*)\"$")
    public void iVerifyMacBookTitle(String expectedProduct)  {
        new MacBookPage().verifyTextMacBook(expectedProduct);

    }

    @And("^I click on Add to Cart$")
    public void iClickOnAddToCart() {
        new MacBookPage().clickOnAddToCartBtn();
    }

    @And("^I click on Shopping Cart$")
    public void iClickOnShoppingCart() {
        new MacBookPage().clickOnShoppingCart();
    }

    @And("^I verify Shopping Cart Text \"([^\"]*)\"$")
    public void iVerifyShoppingCartText(String expectedText)  {
        new ShoppingCartPage().verifyTextShoppingCart(expectedText);

    }

    @And("^I verify product MacBook \"([^\"]*)\"$")
    public void iVerifyProductMacBook(String expectedText)  {
        new ShoppingCartPage().verifyProductMacBook(expectedText);

    }

    @And("^I change product quantity \"([^\"]*)\"$")
    public void iChangeProductQuantity(String qty)  {
        new ShoppingCartPage().changeQuantity(qty);

    }

    @And("^I click on update button$")
    public void iClickOnUpdateButton() {
        new ShoppingCartPage().clickOnUpdateBtn();
    }

    @And("^I verify update total \"([^\"]*)\"$")
    public void iVerifyUpdateTotal(String expectedTotal)  {
        new ShoppingCartPage().verifyTotalUpdate(expectedTotal);

    }

    @And("^I click on checkout text$")
    public void iClickOnCheckoutText() {
        new ShoppingCartPage().clickOnCheckoutBtn();
    }

    @And("^I verify checkout text \"([^\"]*)\"$")
    public void iVerifyCheckoutText(String expectedText)  {
       new CheckoutPage().verifyCheckoutText(expectedText);
    }

    @And("^I click on guest checkout$")
    public void iClickOnGuestCheckout() {
        new CheckoutPage().clickOnGuestCheckout();
    }

    @And("^I click on continue button$")
    public void iClickOnContinueButton() {
        new CheckoutPage().clickOnContinueBtn();
    }

    @And("^I input First name \"([^\"]*)\"$")
    public void iInputFirstName(String firstname)  {
        new CheckoutPage().inputFirstNameField(firstname);

    }

    @And("^I input Last name \"([^\"]*)\"$")
    public void iInputLastName(String lastname)  {
        new CheckoutPage().inputLastNameField(lastname);

    }

    @And("^I input Email \"([^\"]*)\"$")
    public void iInputEmail(String email)  {
        new CheckoutPage().inputEmailField(email);

    }

    @And("^I input Telephone number \"([^\"]*)\"$")
    public void iInputTelephoneNumber(String telNumber)  {
        new CheckoutPage().inputTelephoneField(telNumber);

    }

    @And("^I input Address \"([^\"]*)\"$")
    public void iInputAddress(String address) {
        new CheckoutPage().inputAddressField(address);

    }

    @And("^I input City \"([^\"]*)\"$")
    public void iInputCity(String city)  {
        new CheckoutPage().inputCity(city);

    }

    @And("^I input Postcode \"([^\"]*)\"$")
    public void iInputPostcode(String postcode)  {
        new CheckoutPage().inputPostCode(postcode);

    }

    @And("^I select Country \"([^\"]*)\"$")
    public void iSelectCountry(String country)  {
        new CheckoutPage().selectCountry(country);

    }

    @And("^I select Region \"([^\"]*)\"$")
    public void iSelectRegion(String region)  {
        new CheckoutPage().selectRegion(region);

    }

    @And("^I click on continue tab$")
    public void iClickOnContinueTab() {
        new CheckoutPage().clickOnContinueTab();
    }

    @And("^I input Comment \"([^\"]*)\"$")
    public void iInputComment(String comment) throws InterruptedException {
        new CheckoutPage().inputComment(comment);

    }

    @And("^I click on check box$")
    public void iClickOnCheckBox() {
        new CheckoutPage().clickOnCheckBox();
    }

    @And("^I click on text continue$")
    public void iClickOnTextContinue() {
        new CheckoutPage().clickOnTextContinue();
    }

    @Then("^I verify payment warning message \"([^\"]*)\"$")
    public void iVerifyPaymentWarningMessage(String expectedMessage)  {
        new CheckoutPage().verifyPaymentWarning(expectedMessage);

    }


//
//    @And("^I verify product are sorted by high to low$")
//    public void iVerifyProductAreSortedByHighToLow() {
//



}

