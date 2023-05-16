
Feature: Top Menu Test

  As a user I should able to navigate to Desktops, laptops & Notebooks and Components page

  Background: I am on homepage


  Scenario: Verify user should navigate to desktops page successfully
    Given   I mouse hover and click on desktop
    When    I select Menu "Show AllDesktops"
    Then    I verify Desktop page title "Desktops"

  Scenario: Verify user should navigate to laptops and notebook page successfully
    Given   I mouse hover and on laptop and notebook
    When    I select Menu "Show AllLaptops & Notebooks"
    Then    I verify Laptops and Notebooks page title "Laptops & Notebooks"

  Scenario: Verify user should navigate to Components page successfully
    Given   I mouse hover on and click on components
    When    I select Menu "Show AllComponents"
    Then    I verify Components page title "Components"