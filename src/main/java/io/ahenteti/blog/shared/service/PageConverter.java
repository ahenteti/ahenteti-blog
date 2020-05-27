package io.ahenteti.blog.shared.service;

import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class PageConverter {

    public PageRequest toPageRequest(ValidPageApiRequest request) {
        return PageRequest.of(request.getPage(), request.getSize(), Sort
                .by(request.getDirection().getSpringDataDirection(), request.getSortByValue()));
    }

}
