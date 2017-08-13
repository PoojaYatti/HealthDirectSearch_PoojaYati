package com.healthdirect.search;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="features",glue={"com.healthdirect.search"},plugin={"html:target/search-html-report"})
public class Runner {

}
