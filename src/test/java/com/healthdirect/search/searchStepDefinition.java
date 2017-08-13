package com.healthdirect.search;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class searchStepDefinition {
	WebDriver driver;
	
	@Given("^I navigate to HealthDirect on \"(.*?)\"$")
	public void i_navigate_to_HealthDirect_on(String browser) throws Throwable {
		
		if(browser.equals("Chrome")){
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe");
	    driver = new ChromeDriver();
		}
		
		else if(browser.equals("Mozilla")){
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\Drivers\\firefox.exe");
		    driver = new FirefoxDriver();
		}
		
	    driver.manage().window().maximize();
	    driver.get("http://www.healthdirect.gov.au");
	}	

	
	
	@And("^I enter \"(.*?)\" in searchbox$")
	public void i_enter_in_searchbox(String searchkeyword) throws Throwable {
		
		driver.findElement(By.xpath("//form[@id='search-form-node-desktop-mode']/input[@id='header-search']")).sendKeys(searchkeyword);
		
		}
	
	

	@When("^I click on searchicon$")
	public void i_click_on_searchicon() throws Throwable {
	   
		WebElement searchbox = driver.findElement(By.xpath("//form[@id='search-form-node-desktop-mode']/input[@id='header-search']"));
		searchbox.sendKeys(Keys.RETURN);
		
		
	}

	@Then("^The search results are \"(.*?)\"$")
	public void the_search_results_are(String expectedResult) throws Throwable {
		
		int count = driver.findElements(By.xpath("//main/div[@class='main_content-generic-text']/header/h1")).size();
		if(count==0){
			
	        int Result = driver.findElements(By.xpath("//main[@class='main_content-article-text']/header/h1/small")).size();
	        String actualResult=null;
	        if(Result>0)
	        	actualResult = "Successful";
	        Assert.assertEquals(actualResult, expectedResult);
	    }
		else{
			
			int Result = driver.findElements(By.xpath("//main/div[@class='main_content-generic-text']/header/h1")).size();
			String actualResult=null;
	        if(Result>0)
	        	actualResult = "Failed";
	        Assert.assertEquals(actualResult, expectedResult);
		}	
		
		driver.close();
			}

}
