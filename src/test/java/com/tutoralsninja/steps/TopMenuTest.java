package com.tutoralsninja.steps;

import com.tutoralsninja.pages.ComponantsPage;
import com.tutoralsninja.pages.DesktopPage;
import com.tutoralsninja.pages.HomePage;
import com.tutoralsninja.pages.LaptopsAndNotebooks;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TopMenuTest {
    @Given("^I mouse hover and click on desktop$")
    public void iMouseHoverAndClickOnDesktop() {
        new HomePage().mouseHoverAndClickOnDesktop();
    }

    @When("^I select Menu \"([^\"]*)\"$")
    public void iSelectMenu(String menu)  {
      new HomePage().selectMenu(menu);
    }

    @Then("^I verify Desktop page title \"([^\"]*)\"$")
    public void iVerifyDesktopPageTitle(String title)  {
      new DesktopPage().verifyDeskTopTitle(title);
    }

    @Given("^I mouse hover and on laptop and notebook$")
    public void iMouseHoverAndOnLaptopAndNotebook() {
        new HomePage().mouseHoverAndClickOnLaptopsAndNotebooks();
    }

    @Then("^I verify Laptops and Notebooks page title \"([^\"]*)\"$")
    public void iVerifyLaptopsAndNotebooksPageTitle(String expectedText ) {
        new LaptopsAndNotebooks().verifyTextLaptosAndNotebooks(expectedText);

    }

    @Given("^I mouse hover on and click on components$")
    public void iMouseHoverOnAndClickOnComponents() {
        new HomePage().mouseHoverOnComponantsAndClick();
    }

    @Then("^I verify Components page title \"([^\"]*)\"$")
    public void iVerifyComponentsPageTitle(String expectedText)  {
       new ComponantsPage().verifyTextComponants(expectedText);
    }



}
