package io.ahenteti.blog.shared.service;

import io.ahenteti.blog.shared.exception.InvalidRequirementException;
import io.ahenteti.blog.shared.model.api.PageApiRequest;
import io.ahenteti.blog.shared.model.api.ValidPageApiRequest;
import io.ahenteti.blog.shared.model.core.ESortDirection;
import io.ahenteti.blog.shared.model.core.ISortBy;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@Service
public class PageApiRequestValidator {

    public void validate(PageApiRequest request) {
        validatePage(request);
        validateSize(request);
        validateSortBy(request);
        validateSortDirection(request);
    }

    private void validateSortDirection(PageApiRequest request) {
        if (request.getSortDirection() == null) {
            throw new InvalidRequirementException("sortDirection query param is mandatory");
        }
        if (ESortDirection.getByValue(request.getSortDirection()) == null) {
            StringBuilder sb = new StringBuilder();
            sb.append("Unknown sortDirection query param value: ");
            sb.append(request.getSortDirection());
            sb.append(". Accepted values: ");
            sb.append(StringUtils.join(ESortDirection.values(), ", "));
            throw new InvalidRequirementException(sb.toString());
        }
    }

    private void validateSortBy(PageApiRequest request) {
        if (request.getSortBy() == null) {
            throw new InvalidRequirementException("sortBy query param is mandatory");
        }
        if (!request.getSortByAcceptedValues().contains(request.getSortBy())) {
            StringBuilder sb = new StringBuilder();
            sb.append("Unknown sortBy query param value: ");
            sb.append(request.getSortBy());
            sb.append(". Accepted values: ");
            sb.append(StringUtils.join(request.getSortByAcceptedValues(), ", "));
            throw new InvalidRequirementException(sb.toString());
        }
    }

    private void validateSize(PageApiRequest request) {
        if (request.getSize() == null) {
            throw new InvalidRequirementException("size query param is mandatory");
        }
    }

    private void validatePage(PageApiRequest request) {
        if (request.getPage() == null) {
            throw new InvalidRequirementException("page query param is mandatory");
        }
    }
}
