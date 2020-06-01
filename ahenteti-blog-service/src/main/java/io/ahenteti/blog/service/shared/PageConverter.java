package io.ahenteti.blog.service.shared;

import io.ahenteti.blog.core.model.shared.api.ValidPageApiRequest;
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
