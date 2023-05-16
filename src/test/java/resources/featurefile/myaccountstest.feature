Feature: My Accounts Test

  As a user I should able to navigate to register page successfully and should able to navigate to login page successfully
  and I should able to register account successfully and should able to login and logout successfully

  Background: I am on homepage

    Scenario:  I should verify to navigate to register page successfully
      Given    I am able to click on my account
      When     I click on my account option register "Register"
      Then     I verify register account title "Register Account"


    Scenario:  I should verify to navigate to login page successfully
      Given    I click on my account
      When     I click on login link in my account option "Login"
      Then     I verify the text returning customer "Returning Customer"


   Scenario Outline:  I should verify the register account successfully
    Given     I click on my account
    When      I click on my account option register "Register"
    And       I enter First name "<Firstname>"
    And       I enter Last name "<Lastname>"
    And       I enter Email Address
    And       I enter Telephone "<Telephone Number>"
    And       I enter Password "<password>"
    And       I enter Confirm Password "<ConfirmPassword>"
    And       I click on privacy policy checkbox
    And       I click on continue button on register page
    And       I verify account created successfully text "Your Account Has Been Created!"
    And       I click on Continue button
    And       I click on my account option register "Logout"
    And       I verify the Logout message "Account Logout"
    And       I click on continue button on logout

    Examples:
      | Firstname | Lastname | Telephone Number | password    | ConfirmPassword |
      | Henry     | smith    | 09876543673      | Password123 | Password123     |


  @smoke
  Scenario:   I Should verify Login and Logout successfully
    Given     I click on my account
    When      I click on my account option register "Login"
    And       I enter Email Address
    And       I enter password Field "Password987"
    And       I click on Login button
    And       I verify my account text "My Account"
    And       I click on my account
    And       I click on my account option register "Logout"
    And       I verify the Logout message "Account Logout"
    Then      I click on continue button on logout
