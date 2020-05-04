package io.ahenteti.blog.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Spring Security Configuration
 * <p>
 * Code inspiration:
 * https://github.com/wlesniak/effective-oauth2-with-spring-security-and-spring-boot/blob/master/module_2/mod2_crypto_portfolio_mvc/src/main/java/com/pluralsight/security/configuration/SecurityConfiguration.java
 * https://stackoverflow.com/questions/56388865/spring-security-configuration-httpsecurity-vs-websecurity
 * org.springframework.boot.autoconfigure.security.oauth2.client.servlet.OAuth2WebSecurityConfiguration.OAuth2WebSecurityConfigurerAdapter#configure(org.springframework.security.config.annotation.web.builders.HttpSecurity)
 */
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    
    @Autowired
    private BlogAuthenticationSuccessHandler authenticationSuccessHandler;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/resources/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/secure-api/**").authenticated();
        http.authorizeRequests().antMatchers("/**").permitAll();
        http.oauth2Login().successHandler(authenticationSuccessHandler);
        http.oauth2Client();
    }
}
