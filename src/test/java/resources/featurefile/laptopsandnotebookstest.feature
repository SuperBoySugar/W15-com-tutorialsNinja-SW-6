Feature: Laptops And Notebooks Test

  As a user I should able to verify products price display high to low successfully and
  I place the order successfully

  Background: I am on homepage


  Scenario:   Verify products are display in high to low successfully
    Given     I mouse hover and click on Laptops and Notebooks
    When      I Select menu "Show AllLaptops & Notebooks"
    Then      I select high to low from sort by dropdown "Price (High > Low)"

#  @smoke
  Scenario Outline:   Verify I place order successfully
    Given      I mouse hover and click on Laptops and Notebooks
    When       I Select menu "Show AllLaptops & Notebooks"
    And        I select high to low from sort by dropdown "Price (High > Low)"
#      And        I verify product are sorted by high to low
    And        I select MacBook
    And        I verify MacBook title "MacBook"
    And        I click on Add to Cart
#    And        I verify success message "Success: You have added MacBook to your shopping cart!"
    And        I click on Shopping Cart
    And        I verify Shopping Cart Text "Shopping Cart  (0.00kg)"
    And        I verify product MacBook "MacBook"
    And        I change product quantity "2"
    And        I click on update button
#    And        I verify update message "Success: You have modified your shopping cart!"
    And        I verify update total "$1,204.00"
    And        I click on checkout text
    And        I verify checkout text "Checkout"
    And        I click on guest checkout
    And        I click on continue button
    And        I input First name "<Firstname>"
    And        I input Last name "<Lastname>"
    And        I input Email "<email>"
    And        I input Telephone number "<telnumber>"
    And        I input Address "<address>"
    And        I input City "<city>"
    And        I input Postcode "<postcode>"
    And        I select Country "<country>"
    And        I select Region "<region>"
    And        I click on continue tab
    And        I input Comment "Order Placed"
    And        I click on check box
    And        I click on text continue
    Then       I verify payment warning message "Warning: No Payment options are available. Please contact us for assistance!"

    Examples:
      | Firstname | Lastname | email              | telnumber  | address           | city   | postcode | country        | region  |
      | Henry     | smith    | shert123@gmail.com | 0897685643 | 10 Downing Street | London | SW1 1AA  | United Kingdom | Bristol |