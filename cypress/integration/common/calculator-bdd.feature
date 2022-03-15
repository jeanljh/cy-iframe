Feature: Test online calculator scenarios
	Scenario Outline: Test addition, subtraction, division and CE functionalities
		Given I navigate to the url
		When I press "<value>"
		Then I validate that actual result is matched with expected result
		Examples:
		|value  		                |
        |1+2=		                    |
        |4-3=		                    |
        |10/5=			                |
        |1.2+3.4=		                |
        |7.8-5.6=			            |
        |9.9/1.1=		                |
        |1-1+2/2=		                |
        |1.1-1.1+2.22/2.22=             |
