Feature: Test Search functionality for HealthDirect
  
  In order to test searchbox
  As a healthdirect user
  I want to enter some search critera and validate

  @Search
  Scenario Outline: Validation of search results
    Given I navigate to HealthDirect on "<browser>"
    And I enter "<searchkeyword>" in searchbox
    And I click on searchicon
    Then The search results are "<expectedResult>"

    Examples: 
      | browser | searchkeyword | expectedResult |
      | Chrome  | Diabetes      | Successful     |
      | Chrome  | xxxxxxxxxx    | Failed         |
      | Mozilla | Autism        | Successful     |
      | Mozilla | AB1@D23       | Failed         |
