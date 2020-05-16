import { Injectable } from "@angular/core";
import { IPost } from "../models/post.internal.models";
import { AlertService } from "src/app/modules/alert/alert.service";
import { StringUtils } from "src/app/modules/shared/utils/string.utils";
import { ValidationError } from "src/app/modules/error/validation.error";

@Injectable({ providedIn: "root" })
export class PostValidator {
  constructor(private alertService: AlertService) {}

  validate(post: IPost) {
    const errors = [];
    if (StringUtils.isBlank(post.title)) {
      errors.push("Post title is mandatory");
    }
    if (StringUtils.isBlank(post.category)) {
      errors.push("Post category is mandatory");
    }
    if (post.tags.length === 0) {
      errors.push("Post tags are mandatory");
    }
    if (StringUtils.isBlank(post.bodyMarkdown)) {
      errors.push("Post body is mandatory");
    }
    if (errors.length > 0) {
      throw new ValidationError(errors.join("<br />"));
    }
  }
}
