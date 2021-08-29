Feature: Home Screen

  Scenario: See Monster Levels Button
    Given I am at Home Screen
    Then I should see Monster Levels button

  Scenario: Press Monster Levels Button
    Given I am at Home Screen
    When I press Monster Levels Button
    Then I should see Monster Levels Screen
