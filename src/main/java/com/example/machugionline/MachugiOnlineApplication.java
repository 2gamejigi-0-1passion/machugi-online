package com.example.machugionline;

import com.example.machugionline.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
//이거해야 config에 AppProperties쓸수있다
public class MachugiOnlineApplication {

    public static void main(String[] args) {
        SpringApplication.run(MachugiOnlineApplication.class, args);
    }

}
