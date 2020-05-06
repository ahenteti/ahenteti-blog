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

    public static final String SECURE_API_PREFIX = "/secure-api/";
    private static final String SECURE_API_ANT_MATCHER = SECURE_API_PREFIX + "**";
    private static final String RESOURCES_ANT_MATCHER = "/resources/**";

    @Autowired
    private BlogAuthenticationSuccessHandler authenticationSuccessHandler;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(RESOURCES_ANT_MATCHER);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
            .authorizeRequests()
                .antMatchers(SECURE_API_ANT_MATCHER).authenticated()
                .anyRequest().permitAll().and()
            .oauth2Login().successHandler(authenticationSuccessHandler);
        // @formatter:on
    }
}
