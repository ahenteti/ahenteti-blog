package org.ahenteti.java.model.api;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class PostSummaryApiResult {
    private Long id;
    private String title;
    private String category;
    private List<String> tags = new ArrayList<>();
    private String createdAtIso8601;
    private String lastUpdatedAtIso8601;
}
