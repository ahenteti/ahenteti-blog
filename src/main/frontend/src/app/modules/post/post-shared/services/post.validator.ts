import { Injectable } from "@angular/core";
import { Post } from "../models/post.internal.models";
import { AlertService } from "src/app/modules/alert/alert.service";
import { StringUtils } from "src/app/modules/shared/services/string.utils";
import { ValidationError } from "src/app/modules/shared/models/validation.error";

@Injectable({ providedIn: "root" })
export class PostValidator {
  constructor(private alertService: AlertService) {}

  validateCreatePost(post: Post) {
    const errors = this.createPostErrors(post);
    this.throwValidationErrorIfNotEmpty(errors);
  }

  validateUpdatePost(post: Post) {
    const errors = this.createPostErrors(post);
    if (!post.createdAt) {
      errors.push("Post createAt is mandatory");
    }
    this.throwValidationErrorIfNotEmpty(errors);
  }

  private createPostErrors(post: Post) {
    const errors = [];
    if (StringUtils.isBlank(post.title)) {
      errors.push("Post title is mandatory");
    }
    if (StringUtils.isBlank(post.category)) {
      errors.push("Post category is mandatory");
    }
    if (!post.tags || post.tags.length === 0) {
      errors.push("Post tags are mandatory");
    }
    if (StringUtils.isBlank(post.bodyMarkdown)) {
      errors.push("Post body is mandatory");
    }
    return errors;
  }

  private throwValidationErrorIfNotEmpty(errors: any[]) {
    if (errors.length > 0) {
      throw new ValidationError(errors.join("<br />"));
    }
  }
}
