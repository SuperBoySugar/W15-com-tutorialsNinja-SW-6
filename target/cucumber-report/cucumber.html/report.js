$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktoptest.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Test",
  "description": "\r\nAs a user I should able to verify products arrange in alphabetical order and product added\r\nto shopping cart successfully",
  "id": "desktop-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5939378300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 9,
  "name": "Verify product are arranged in alphabetical order",
  "description": "",
  "id": "desktop-test;verify-product-are-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I mouse hover \u0026 click on desktop",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I select menu \"Show AllDesktops\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select Z to A from sort by dropdown \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify product arrange in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopTest.iMouseHoverClickOnDesktop()"
});
formatter.result({
  "duration": 270295400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 15
    }
  ],
  "location": "DesktopTest.iSelectMenu(String)"
});
formatter.result({
  "duration": 1360940500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 39
    }
  ],
  "location": "DesktopTest.iSelectZToAFromSortByDropdown(String)"
});
formatter.result({
  "duration": 578505200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTest.iVerifyProductArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 196242100,
  "status": "passed"
});
formatter.after({
  "duration": 196200,
  "status": "passed"
});
formatter.before({
  "duration": 3550541600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Verify product added to shopping cart successfully",
  "description": "",
  "id": "desktop-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I mouse hover \u0026 click on desktop",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I select menu \"Show AllDesktops\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select A to Z from sort by dropdown \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select product HP LP",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify HP LP title \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on delivery date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I input quantity \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    And       I verify text message \"Success: You have added HP LP3065 to your shopping cart!\""
    }
  ],
  "line": 26,
  "name": "I click on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify shopping cart text \"Shopping Cart  (1.00kg)\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify HP LP \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify delivery date \"Delivery Date:2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify model \"Product 21\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify total \"$122.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopTest.iMouseHoverClickOnDesktop()"
});
formatter.result({
  "duration": 155436900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 15
    }
  ],
  "location": "DesktopTest.iSelectMenu(String)"
});
formatter.result({
  "duration": 1012492600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 39
    }
  ],
  "location": "DesktopTest.iSelectAToZFromSortByDropdown(String)"
});
formatter.result({
  "duration": 636676700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTest.iSelectProductHPLP()"
});
formatter.result({
  "duration": 1526321200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 22
    }
  ],
  "location": "DesktopTest.iVerifyHPLPTitle(String)"
});
formatter.result({
  "duration": 64371300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 26
    }
  ],
  "location": "DesktopTest.iClickOnDeliveryDate(String)"
});
formatter.result({
  "duration": 15694248800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "DesktopTest.iInputQuantity(String)"
});
formatter.result({
  "duration": 157125200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 74116900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTest.iClickOnShoppingCart()"
});
formatter.result({
  "duration": 980821000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart  (1.00kg)",
      "offset": 29
    }
  ],
  "location": "DesktopTest.iVerifyShoppingCartText(String)"
});
formatter.result({
  "duration": 57287300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 16
    }
  ],
  "location": "DesktopTest.iVerifyHPLP(String)"
});
formatter.result({
  "duration": 44003800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery Date:2022-11-30",
      "offset": 24
    }
  ],
  "location": "DesktopTest.iVerifyDeliveryDate(String)"
});
formatter.result({
  "duration": 36892900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 16
    }
  ],
  "location": "DesktopTest.iVerifyModel(String)"
});
formatter.result({
  "duration": 47500800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$122.00",
      "offset": 16
    }
  ],
  "location": "DesktopTest.iVerifyTotal(String)"
});
formatter.result({
  "duration": 46106600,
  "status": "passed"
});
formatter.after({
  "duration": 92600,
  "status": "passed"
});
formatter.uri("laptopsandnotebookstest.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops And Notebooks Test",
  "description": "\r\nAs a user I should able to verify products price display high to low successfully and\r\nI place the order successfully",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3593654100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 9,
  "name": "Verify products are display in high to low successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-products-are-display-in-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I mouse hover and click on Laptops and Notebooks",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Select menu \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select high to low from sort by dropdown \"Price (High \u003e Low)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iMouseHoverAndClickOnLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 167225900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iSelectMenu(String)"
});
formatter.result({
  "duration": 891783400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 44
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iSelectHighToLowFromSortByDropdown(String)"
});
formatter.result({
  "duration": 578076400,
  "status": "passed"
});
formatter.after({
  "duration": 83300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "#  @smoke"
    }
  ],
  "line": 15,
  "name": "Verify I place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-i-place-order-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I mouse hover and click on Laptops and Notebooks",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I Select menu \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select high to low from sort by dropdown \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#      And        I verify product are sorted by high to low"
    }
  ],
  "line": 20,
  "name": "I select MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify MacBook title \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#    And        I verify success message \"Success: You have added MacBook to your shopping cart!\""
    }
  ],
  "line": 24,
  "name": "I click on Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify Shopping Cart Text \"Shopping Cart  (0.00kg)\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify product MacBook \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I change product quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on update button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#    And        I verify update message \"Success: You have modified your shopping cart!\""
    }
  ],
  "line": 30,
  "name": "I verify update total \"$1,204.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on checkout text",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify checkout text \"Checkout\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on guest checkout",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I input First name \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I input Last name \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input Telephone number \"\u003ctelnumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input Postcode \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select Country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select Region \"\u003cregion\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I input Comment \"Order Placed\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on check box",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on text continue",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I verify payment warning message \"Warning: No Payment options are available. Please contact us for assistance!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-i-place-order-successfully;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "email",
        "telnumber",
        "address",
        "city",
        "postcode",
        "country",
        "region"
      ],
      "line": 51,
      "id": "laptops-and-notebooks-test;verify-i-place-order-successfully;;1"
    },
    {
      "cells": [
        "Henry",
        "smith",
        "shert123@gmail.com",
        "0897685643",
        "10 Downing Street",
        "London",
        "SW1 1AA",
        "United Kingdom",
        "Bristol"
      ],
      "line": 52,
      "id": "laptops-and-notebooks-test;verify-i-place-order-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3648394600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 52,
  "name": "Verify I place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-i-place-order-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I mouse hover and click on Laptops and Notebooks",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I Select menu \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select high to low from sort by dropdown \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#      And        I verify product are sorted by high to low"
    }
  ],
  "line": 20,
  "name": "I select MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify MacBook title \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#    And        I verify success message \"Success: You have added MacBook to your shopping cart!\""
    }
  ],
  "line": 24,
  "name": "I click on Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify Shopping Cart Text \"Shopping Cart  (0.00kg)\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify product MacBook \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I change product quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on update button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#    And        I verify update message \"Success: You have modified your shopping cart!\""
    }
  ],
  "line": 30,
  "name": "I verify update total \"$1,204.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on checkout text",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify checkout text \"Checkout\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on guest checkout",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I input First name \"Henry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I input Last name \"smith\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input Email \"shert123@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input Telephone number \"0897685643\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input Address \"10 Downing Street\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input City \"London\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input Postcode \"SW1 1AA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select Country \"United Kingdom\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select Region \"Bristol\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I input Comment \"Order Placed\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on check box",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on text continue",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I verify payment warning message \"Warning: No Payment options are available. Please contact us for assistance!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iMouseHoverAndClickOnLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 187061700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iSelectMenu(String)"
});
formatter.result({
  "duration": 782566100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 44
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iSelectHighToLowFromSortByDropdown(String)"
});
formatter.result({
  "duration": 498144200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iSelectMacBook()"
});
formatter.result({
  "duration": 1362511000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 24
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iVerifyMacBookTitle(String)"
});
formatter.result({
  "duration": 25739300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnAddToCart()"
});
formatter.result({
  "duration": 63941000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnShoppingCart()"
});
formatter.result({
  "duration": 1047111800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart  (0.00kg)",
      "offset": 29
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iVerifyShoppingCartText(String)"
});
formatter.result({
  "duration": 57203000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iVerifyProductMacBook(String)"
});
formatter.result({
  "duration": 47950900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iChangeProductQuantity(String)"
});
formatter.result({
  "duration": 96001400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnUpdateButton()"
});
formatter.result({
  "duration": 752621800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,204.00",
      "offset": 23
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iVerifyUpdateTotal(String)"
});
formatter.result({
  "duration": 34800200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnCheckoutText()"
});
formatter.result({
  "duration": 513160000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 24
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iVerifyCheckoutText(String)"
});
formatter.result({
  "duration": 49184300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnGuestCheckout()"
});
formatter.result({
  "duration": 415759100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 108188100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henry",
      "offset": 20
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iInputFirstName(String)"
});
formatter.result({
  "duration": 499309000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iInputLastName(String)"
});
formatter.result({
  "duration": 102006500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shert123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iInputEmail(String)"
});
formatter.result({
  "duration": 133938700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0897685643",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iInputTelephoneNumber(String)"
});
formatter.result({
  "duration": 114451300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 Downing Street",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iInputAddress(String)"
});
formatter.result({
  "duration": 137570300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 14
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iInputCity(String)"
});
formatter.result({
  "duration": 122891900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SW1 1AA",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iInputPostcode(String)"
});
formatter.result({
  "duration": 132454400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iSelectCountry(String)"
});
formatter.result({
  "duration": 132758700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bristol",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iSelectRegion(String)"
});
formatter.result({
  "duration": 187024800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnContinueTab()"
});
formatter.result({
  "duration": 90213800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order Placed",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iInputComment(String)"
});
formatter.result({
  "duration": 1139707300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnCheckBox()"
});
formatter.result({
  "duration": 82978600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTest.iClickOnTextContinue()"
});
formatter.result({
  "duration": 79605500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warning: No Payment options are available. Please contact us for assistance!",
      "offset": 34
    }
  ],
  "location": "LaptopsAndNoteBooksTest.iVerifyPaymentWarningMessage(String)"
});
formatter.result({
  "duration": 37602100,
  "status": "passed"
});
formatter.after({
  "duration": 85200,
  "status": "passed"
});
formatter.uri("myaccountstest.feature");
formatter.feature({
  "line": 1,
  "name": "My Accounts Test",
  "description": "\r\nAs a user I should able to navigate to register page successfully and should able to navigate to login page successfully\r\nand I should able to register account successfully and should able to login and logout successfully",
  "id": "my-accounts-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5580429700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "I should verify to navigate to register page successfully",
  "description": "",
  "id": "my-accounts-test;i-should-verify-to-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am able to click on my account",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on my account option register \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify register account title \"Register Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountTest.iAmAbleToClickOnMyAccount()"
});
formatter.result({
  "duration": 760983700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 39
    }
  ],
  "location": "MyAccountTest.iClickOnMyAccountOptionRegister(String)"
});
formatter.result({
  "duration": 1153752000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 33
    }
  ],
  "location": "MyAccountTest.iVerifyRegisterAccountTitle(String)"
});
formatter.result({
  "duration": 33370000,
  "status": "passed"
});
formatter.after({
  "duration": 45100,
  "status": "passed"
});
formatter.before({
  "duration": 4049455900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "I should verify to navigate to login page successfully",
  "description": "",
  "id": "my-accounts-test;i-should-verify-to-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I click on my account",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on login link in my account option \"Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify the text returning customer \"Returning Customer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountTest.iClickOnMyAccount()"
});
formatter.result({
  "duration": 759833700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 44
    }
  ],
  "location": "MyAccountTest.iClickOnLoginLinkInMyAccountOption(String)"
});
formatter.result({
  "duration": 397425900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 38
    }
  ],
  "location": "MyAccountTest.iVerifyTheTextReturningCustomer(String)"
});
formatter.result({
  "duration": 27075300,
  "status": "passed"
});
formatter.after({
  "duration": 30200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "I should verify the register account successfully",
  "description": "",
  "id": "my-accounts-test;i-should-verify-the-register-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I click on my account",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on my account option register \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter First name \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Last name \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Telephone \"\u003cTelephone Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Confirm Password \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on privacy policy checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on continue button on register page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify account created successfully text \"Your Account Has Been Created!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on my account option register \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify the Logout message \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on continue button on logout",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "my-accounts-test;i-should-verify-the-register-account-successfully;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Telephone Number",
        "password",
        "ConfirmPassword"
      ],
      "line": 38,
      "id": "my-accounts-test;i-should-verify-the-register-account-successfully;;1"
    },
    {
      "cells": [
        "Henry",
        "smith",
        "09876543673",
        "Password123",
        "Password123"
      ],
      "line": 39,
      "id": "my-accounts-test;i-should-verify-the-register-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3495953700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 39,
  "name": "I should verify the register account successfully",
  "description": "",
  "id": "my-accounts-test;i-should-verify-the-register-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I click on my account",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on my account option register \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter First name \"Henry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Last name \"smith\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Telephone \"09876543673\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Password \"Password123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Confirm Password \"Password123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on privacy policy checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on continue button on register page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify account created successfully text \"Your Account Has Been Created!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on my account option register \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify the Logout message \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on continue button on logout",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountTest.iClickOnMyAccount()"
});
formatter.result({
  "duration": 746346200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 39
    }
  ],
  "location": "MyAccountTest.iClickOnMyAccountOptionRegister(String)"
});
formatter.result({
  "duration": 740228400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henry",
      "offset": 20
    }
  ],
  "location": "MyAccountTest.iEnterFirstName(String)"
});
formatter.result({
  "duration": 98070300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith",
      "offset": 19
    }
  ],
  "location": "MyAccountTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 76263100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountTest.iEnterEmailAddress()"
});
formatter.result({
  "duration": 71505000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09876543673",
      "offset": 19
    }
  ],
  "location": "MyAccountTest.iEnterTelephone(String)"
});
formatter.result({
  "duration": 56380500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 18
    }
  ],
  "location": "MyAccountTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 59928800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 26
    }
  ],
  "location": "MyAccountTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 63061200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountTest.iClickOnPrivacyPolicyCheckbox()"
});
formatter.result({
  "duration": 65306100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountTest.iClickOnContinueButtonOnRegisterPage()"
});
formatter.result({
  "duration": 844401400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 44
    }
  ],
  "location": "MyAccountTest.iVerifyAccountCreatedSuccessfullyText(String)"
});
formatter.result({
  "duration": 32309100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 521251900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 39
    }
  ],
  "location": "MyAccountTest.iClickOnMyAccountOptionRegister(String)"
});
formatter.result({
  "duration": 810937600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 29
    }
  ],
  "location": "MyAccountTest.iVerifyTheLogoutMessage(String)"
});
formatter.result({
  "duration": 33624500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountTest.iClickOnContinueButtonOnLogout()"
});
formatter.result({
  "duration": 442576700,
  "status": "passed"
});
formatter.after({
  "duration": 36500,
  "status": "passed"
});
formatter.before({
  "duration": 4200284100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 43,
  "name": "I Should verify Login and Logout successfully",
  "description": "",
  "id": "my-accounts-test;i-should-verify-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I click on my account",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I click on my account option register \"Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I enter Email Address",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter password Field \"Password987\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify my account text \"My Account\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on my account",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on my account option register \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I verify the Logout message \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on continue button on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountTest.iClickOnMyAccount()"
});
formatter.result({
  "duration": 668903200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 39
    }
  ],
  "location": "MyAccountTest.iClickOnMyAccountOptionRegister(String)"
});
formatter.result({
  "duration": 401595600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountTest.iEnterEmailAddress()"
});
formatter.result({
  "duration": 117543500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password987",
      "offset": 24
    }
  ],
  "location": "MyAccountTest.iEnterPasswordField(String)"
});
formatter.result({
  "duration": 52877600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 428360800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 26
    }
  ],
  "location": "MyAccountTest.iVerifyMyAccountText(String)"
});
formatter.result({
  "duration": 5660165500,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //h2[text()\u003d\u0027My Account\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat com.tutoralsninja.utility.Utility.getTextFromElement(Utility.java:40)\r\n\tat com.tutoralsninja.utility.Utility.verifyElements(Utility.java:313)\r\n\tat com.tutoralsninja.pages.MyAccountPage.verifyMyAccountText(MyAccountPage.java:102)\r\n\tat com.tutoralsninja.steps.MyAccountTest.iVerifyMyAccountText(MyAccountTest.java:131)\r\n\tat ✽.And I verify my account text \"My Account\"(myaccountstest.feature:49)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountTest.iClickOnMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 39
    }
  ],
  "location": "MyAccountTest.iClickOnMyAccountOptionRegister(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 29
    }
  ],
  "location": "MyAccountTest.iVerifyTheLogoutMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountTest.iClickOnContinueButtonOnLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30262700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f1c107376168d1d04ff63392da781a08, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62515}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62515/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f1c107376168d1d04ff63392da781a08\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.tutoralsninja.utility.Utility.getScreenshot(Utility.java:320)\r\n\tat com.tutoralsninja.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.uri("topmenutest.feature");
formatter.feature({
  "line": 2,
  "name": "Top Menu Test",
  "description": "\r\nAs a user I should able to navigate to Desktops, laptops \u0026 Notebooks and Components page",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3500581400,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: unknown error: Chrome failed to start: exited normally.\n  (chrome not reachable)\n  (The process started from chrome location C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe is no longer running, so ChromeDriver is assuming that Chrome has crashed.) \nHost info: host: \u0027DESKTOP-2VK50OM\u0027, ip: \u002710.10.10.105\u0027\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {browserName: chrome, goog:chromeOptions: {args: [--remote-allow-origins\u003d*], extensions: []}}]}]\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:94)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:68)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:165)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:229)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:157)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:101)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:84)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:52)\r\n\tat com.tutoralsninja.browserfactory.ManageBrowser.selectBrowser(ManageBrowser.java:28)\r\n\tat com.tutoralsninja.Hooks.steUp(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 9,
  "name": "Verify user should navigate to desktops page successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I mouse hover and click on desktop",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I select Menu \"Show AllDesktops\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify Desktop page title \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTest.iMouseHoverAndClickOnDesktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 15
    }
  ],
  "location": "TopMenuTest.iSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 29
    }
  ],
  "location": "TopMenuTest.iVerifyDesktopPageTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4244100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f1c107376168d1d04ff63392da781a08, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62515}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62515/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f1c107376168d1d04ff63392da781a08\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.tutoralsninja.utility.Utility.getScreenshot(Utility.java:320)\r\n\tat com.tutoralsninja.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 2802120600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user should navigate to laptops and notebook page successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-laptops-and-notebook-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I mouse hover and on laptop and notebook",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I select Menu \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify Laptops and Notebooks page title \"Laptops \u0026 Notebooks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTest.iMouseHoverAndOnLaptopAndNotebook()"
});
formatter.result({
  "duration": 8122100,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8654188745fced1418cf842311ba3688, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@78e387d6]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62554}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62554/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8654188745fced1418cf842311ba3688\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.tutoralsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:125)\r\n\tat com.tutoralsninja.pages.HomePage.mouseHoverAndClickOnLaptopsAndNotebooks(HomePage.java:60)\r\n\tat com.tutoralsninja.steps.TopMenuTest.iMouseHoverAndOnLaptopAndNotebook(TopMenuTest.java:30)\r\n\tat ✽.Given I mouse hover and on laptop and notebook(topmenutest.feature:15)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\t\tat com.tutoralsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:125)\r\n\t\tat com.tutoralsninja.pages.HomePage.mouseHoverAndClickOnLaptopsAndNotebooks(HomePage.java:60)\r\n\t\tat com.tutoralsninja.steps.TopMenuTest.iMouseHoverAndOnLaptopAndNotebook(TopMenuTest.java:30)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.tutoralsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:125)\r\n\tat com.tutoralsninja.pages.HomePage.mouseHoverAndClickOnLaptopsAndNotebooks(HomePage.java:60)\r\n\tat com.tutoralsninja.steps.TopMenuTest.iMouseHoverAndOnLaptopAndNotebook(TopMenuTest.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8654188745fced1418cf842311ba3688, findElement {using\u003dxpath, value\u003d//a[text()\u003d\u0027Laptops \u0026 Notebooks\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62554}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62554/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8654188745fced1418cf842311ba3688\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:269)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:218)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 80 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "TopMenuTest.iSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops \u0026 Notebooks",
      "offset": 43
    }
  ],
  "location": "TopMenuTest.iVerifyLaptopsAndNotebooksPageTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4659600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8654188745fced1418cf842311ba3688, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62554}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62554/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8654188745fced1418cf842311ba3688\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.tutoralsninja.utility.Utility.getScreenshot(Utility.java:320)\r\n\tat com.tutoralsninja.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 4082275400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Verify user should navigate to Components page successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I mouse hover on and click on components",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I select Menu \"Show AllComponents\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify Components page title \"Components\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTest.iMouseHoverOnAndClickOnComponents()"
});
formatter.result({
  "duration": 5801400,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a725ca7787c42a923029497b6227fd40, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@6cd66f6a]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62573}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62573/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a725ca7787c42a923029497b6227fd40\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.tutoralsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:125)\r\n\tat com.tutoralsninja.pages.HomePage.mouseHoverOnComponantsAndClick(HomePage.java:66)\r\n\tat com.tutoralsninja.steps.TopMenuTest.iMouseHoverOnAndClickOnComponents(TopMenuTest.java:41)\r\n\tat ✽.Given I mouse hover on and click on components(topmenutest.feature:20)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\t\tat com.tutoralsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:125)\r\n\t\tat com.tutoralsninja.pages.HomePage.mouseHoverOnComponantsAndClick(HomePage.java:66)\r\n\t\tat com.tutoralsninja.steps.TopMenuTest.iMouseHoverOnAndClickOnComponents(TopMenuTest.java:41)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:258)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:122)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:611)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.tutoralsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:125)\r\n\tat com.tutoralsninja.pages.HomePage.mouseHoverOnComponantsAndClick(HomePage.java:66)\r\n\tat com.tutoralsninja.steps.TopMenuTest.iMouseHoverOnAndClickOnComponents(TopMenuTest.java:41)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a725ca7787c42a923029497b6227fd40, findElement {using\u003dxpath, value\u003d//a[text()\u003d\u0027Components\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62573}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62573/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a725ca7787c42a923029497b6227fd40\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:269)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:218)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 80 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllComponents",
      "offset": 15
    }
  ],
  "location": "TopMenuTest.iSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Components",
      "offset": 32
    }
  ],
  "location": "TopMenuTest.iVerifyComponentsPageTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6217800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a725ca7787c42a923029497b6227fd40, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62573}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62573/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a725ca7787c42a923029497b6227fd40\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.tutoralsninja.utility.Utility.getScreenshot(Utility.java:320)\r\n\tat com.tutoralsninja.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});