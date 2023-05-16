package com.tutoralsninja.steps;

import com.tutoralsninja.pages.HomePage;
import com.tutoralsninja.pages.MyAccountPage;
import com.tutoralsninja.pages.RegisterAccountPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyAccountTest {
    @Given("^I am able to click on my account$")
    public void iAmAbleToClickOnMyAccount() {
        new HomePage().clickOnMyAccount();
    }

    @When("^I click on my account option register \"([^\"]*)\"$")
    public void iClickOnMyAccountOptionRegister(String option)  {
        new MyAccountPage().myAccountOptionRegister(option);

    }

    @Then("^I verify register account title \"([^\"]*)\"$")
    public void iVerifyRegisterAccountTitle(String expectedText)  {
        new RegisterAccountPage().verifyTextRegisterAccount(expectedText);

    }

    @Given("^I click on my account$")
    public void iClickOnMyAccount() {
        new HomePage().clickOnMyAccount();
    }


    @When("^I click on login link in my account option \"([^\"]*)\"$")
    public void iClickOnLoginLinkInMyAccountOption(String menu)  {
        new MyAccountPage().myAccountOptionRegister(menu);

    }

    @Then("^I verify the text returning customer \"([^\"]*)\"$")
    public void iVerifyTheTextReturningCustomer(String expectedText)  {
        new MyAccountPage().verifyReturningCustomerText(expectedText);

    }


    @And("^I enter First name \"([^\"]*)\"$")
    public void iEnterFirstName(String name)  {
        new RegisterAccountPage().enterFirstName(name);

    }

    @And("^I enter Last name \"([^\"]*)\"$")
    public void iEnterLastName(String lname)  {
        new RegisterAccountPage().enterLastName(lname);

    }
    @And("^I enter Email Address$")
    public void iEnterEmailAddress() {
        new RegisterAccountPage().enterEmail();
    }

    @And("^I enter Telephone \"([^\"]*)\"$")
    public void iEnterTelephone(String phone)  {
        new RegisterAccountPage().enterTelephone(phone);


    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String pass)  {
        new RegisterAccountPage().enterPassword(pass);

    }

    @And("^I enter Confirm Password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confPass)  {
        new RegisterAccountPage().enterConfirmPassword(confPass);

    }

    @And("^I click on privacy policy checkbox$")
    public void iClickOnPrivacyPolicyCheckbox() {
        new RegisterAccountPage().clickOnPrivacyPolicyCheckbox();
    }

    @And("^I click on continue button on register page$")
    public void iClickOnContinueButtonOnRegisterPage() {
        new RegisterAccountPage().clickContinueButtonOnRegisterPage();
    }


    @And("^I verify account created successfully text \"([^\"]*)\"$")
    public void iVerifyAccountCreatedSuccessfullyText(String expectedMessage)  {
        new RegisterAccountPage().verifyAccountCreatedSuccessfullyText(expectedMessage);

    }

    @And("^I click on Continue button$")
    public void iClickOnContinueButton() {
        new MyAccountPage().clickOnContinueButton();

    }

    @And("^I verify the Logout message \"([^\"]*)\"$")
    public void iVerifyTheLogoutMessage(String expectedMessage)  {
        new MyAccountPage().verifyLogoutMessage(expectedMessage);

    }

    @And("^I click on continue button on logout$")
    public void iClickOnContinueButtonOnLogout() {
        new MyAccountPage().clickContinueBtnOnLogout();
    }


    @And("^I enter password Field \"([^\"]*)\"$")
    public void iEnterPasswordField(String email)  {
        new MyAccountPage().enterEmaiAddress(email);

    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new MyAccountPage().clickOnLoginBtn();
    }

    @And("^I verify my account text \"([^\"]*)\"$")
    public void iVerifyMyAccountText(String title)  {
        new MyAccountPage().verifyMyAccountText(title);

    }
}
