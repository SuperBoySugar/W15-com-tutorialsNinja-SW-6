Feature: Desktop Test

  As a user I should able to verify products arrange in alphabetical order and product added
  to shopping cart successfully

  Background: I am on homepage


  Scenario:  Verify product are arranged in alphabetical order
    Given    I mouse hover & click on desktop
    When     I select menu "Show AllDesktops"
    And      I select Z to A from sort by dropdown "Name (Z - A)"
    Then     I verify product arrange in descending order


  Scenario:  Verify product added to shopping cart successfully
    Given     I mouse hover & click on desktop
    When      I select menu "Show AllDesktops"
    And       I select A to Z from sort by dropdown "Name (A - Z)"
    And       I select product HP LP
    And       I verify HP LP title "HP LP3065"
    And       I click on delivery date "2022-11-30"
    And       I input quantity "1"
    And       I click on add to cart button
#    And       I verify text message "Success: You have added HP LP3065 to your shopping cart!"
   And        I click on shopping cart
    And       I verify shopping cart text "Shopping Cart  (1.00kg)"
    And       I verify HP LP "HP LP3065"
    And       I verify delivery date "Delivery Date:2022-11-30"
    And       I verify model "Product 21"
    And       I verify total "$122.00"

