package io.ahenteti.blog.service.converter;

import io.ahenteti.blog.model.api.post.ValidPageApiRequest;
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
