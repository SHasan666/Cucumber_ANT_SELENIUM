package com.van.stepDefination;



import org.junit.Assert;




import com.van.runner.WebConnector;

import cucumber.api.java.en.Then;

public class HomePage_Step {

	WebConnector selenium = WebConnector.getInstance();
	
	//All the methods are in Common Util
	
	@Then("^title should be \"(.*?)\"$")
	public void title_should_be(String title) throws Throwable {

		Assert.assertEquals(title, selenium.verifyTitle());
		
	}
}
