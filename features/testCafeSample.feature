@tcpractice
Feature: Settingup TestCafe for PageObject Model
Scenario: Setup and run one e2e test
    Given I am on google search page
    When I enter search value
    Then Search results should be displayed