package com.tutoralsninja.steps;

import com.tutoralsninja.pages.DesktopPage;
import com.tutoralsninja.pages.HomePage;
import com.tutoralsninja.pages.HpLp3065Page;
import com.tutoralsninja.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DesktopTest {

    @Given("^I mouse hover & click on desktop$")
    public void iMouseHoverClickOnDesktop() {
        new HomePage().mouseHoverAndClickOnDesktop();

    }

    @When("^I select menu \"([^\"]*)\"$")
    public void iSelectMenu(String menu)  {
        new HomePage().selectMenu(menu);

    }

    @And("^I select Z to A from sort by dropdown \"([^\"]*)\"$")
    public void iSelectZToAFromSortByDropdown(String filter) {
        new DesktopPage().selectZToAFromSortByDropdown(filter);

    }

    @Then("^I verify product arrange in descending order$")
    public void iVerifyProductArrangeInDescendingOrder() {
        new DesktopPage().verifyProductArrangeInDescendingOrder();
    }



      @When("^I select A to Z from sort by dropdown \"([^\"]*)\"$")
    public void iSelectAToZFromSortByDropdown(String filter)  {
        new DesktopPage().selectAToZFromSortByDropDown(filter);

    }



    @And("^I select product HP LP$")
    public void iSelectProductHPLP() {
        new DesktopPage().selectProductHPLP3065();
    }



    @And("^I verify HP LP title \"([^\"]*)\"$")
    public void iVerifyHPLPTitle(String expectedText)  {
        new HpLp3065Page().verifyTextHpLp3065(expectedText);

    }

    @And("^I click on delivery date \"([^\"]*)\"$")
    public void iClickOnDeliveryDate(String expectedDate)  {
        new HpLp3065Page().clickOnDeliveryDate();

    }

    @And("^I input quantity \"([^\"]*)\"$")
    public void iInputQuantity(String qty)  {
        new HpLp3065Page().inputQuantity(qty);

    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new HpLp3065Page().clickOnAddToCartBtn();
    }



    @And("^I verify text message \"([^\"]*)\"$")
    public void iVerifyTextMessage(String expectedText) {
        new HpLp3065Page().verifyTextMessage(expectedText);


    }


    @And("^I click on shopping cart$")
    public void iClickOnShoppingCart() {
        new HpLp3065Page().clickOnShoppingCart();
    }



    @And("^I verify shopping cart text \"([^\"]*)\"$")
    public void iVerifyShoppingCartText(String expectedText)  {
        new ShoppingCartPage().verifyTextShoppingCart(expectedText);

    }

    @And("^I verify HP LP \"([^\"]*)\"$")
    public void iVerifyHPLP(String expectedText)  {
        new ShoppingCartPage().verifyTextHpLp3065(expectedText);

    }

    @And("^I verify delivery date \"([^\"]*)\"$")
    public void iVerifyDeliveryDate(String expectedText)  {
        new ShoppingCartPage().verifyDeliverDate(expectedText);

    }


    @And("^I verify model \"([^\"]*)\"$")
    public void iVerifyModel(String expectedText)  {
        new ShoppingCartPage().verifyModel(expectedText);

    }

    @And("^I verify total \"([^\"]*)\"$")
    public void iVerifyTotal(String expectedTotal)  {
        new ShoppingCartPage().verifytotal(expectedTotal);

    }


}
