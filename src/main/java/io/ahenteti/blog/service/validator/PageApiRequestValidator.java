package io.ahenteti.blog.service.validator;

import io.ahenteti.blog.exception.InvalidRequestAttributeException;
import io.ahenteti.blog.exception.MissingMandatoryRequestAttributeException;
import io.ahenteti.blog.model.api.PageApiRequest;
import io.ahenteti.blog.model.core.ESortDirection;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@Service
public class PageApiRequestValidator {

    public void validatePageApiRequest(PageApiRequest request) {
        validatePage(request);
        validateSize(request);
        validateSortBy(request);
        validateSortDirection(request);
    }

    private void validateSortDirection(PageApiRequest request) {
        if (request.getSortDirection() == null) {
            throw new MissingMandatoryRequestAttributeException("sortDirection query param is mandatory");
        }
        if (ESortDirection.getByValue(request.getSortDirection()) == null) {
            StringBuilder sb = new StringBuilder();
            sb.append("Unknown sortDirection query param value: ");
            sb.append(request.getSortBy());
            sb.append(". Accepted values: ");
            sb.append(StringUtils.join(ESortDirection.values(), ", "));
            throw new InvalidRequestAttributeException(sb.toString());
        }
    }

    private void validateSortBy(PageApiRequest request) {
        if (request.getSortBy() == null) {
            throw new MissingMandatoryRequestAttributeException("sortBy query param is mandatory");
        }
        if (!request.getSortByAcceptedValues().contains(request.getSortBy())) {
            StringBuilder sb = new StringBuilder();
            sb.append("Unknown sortBy query param value: ");
            sb.append(request.getSortBy());
            sb.append(". Accepted values: ");
            sb.append(StringUtils.join(request.getSortByAcceptedValues(), ", "));
            throw new InvalidRequestAttributeException(sb.toString());
        }
    }

    private void validateSize(PageApiRequest request) {
        if (request.getSize() == null) {
            throw new MissingMandatoryRequestAttributeException("size query param is mandatory");
        }
    }

    private void validatePage(PageApiRequest request) {
        if (request.getPage() == null) {
            throw new MissingMandatoryRequestAttributeException("page query param is mandatory");
        }
    }
}
