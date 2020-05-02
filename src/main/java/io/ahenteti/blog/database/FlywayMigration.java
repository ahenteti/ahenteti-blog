package io.ahenteti.blog.database;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class FlywayMigration implements ApplicationListener<ContextRefreshedEvent> {

    @Value("${spring.datasource.url}")
    private String databaseUrl;

    @Value("${spring.datasource.username}")
    private String databaseUsername;

    @Value("${spring.datasource.password}")
    private String databasePassword;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        // code inspiration: https://flywaydb.org/getstarted/firststeps/api
        Flyway flyway = Flyway.configure().dataSource(databaseUrl, databaseUsername, databasePassword).load();
        flyway.migrate();
    }
}
