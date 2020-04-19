import { IArticleSummary } from "src/models/internal/article-summary.model";
import { Observable } from "rxjs";
import { IArticleService } from "./article.service";
import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { ArticleSummaryConverter } from "src/converters/article-summary.converter";

@Injectable()
export class ArticleServiceMock extends IArticleService {
  constructor(private articleSummaryConverter: ArticleSummaryConverter) {
    super();
  }

  getArticlesSummary(): Observable<IArticleSummary[]> {
    return from([ARTICLES_SUMMARY]).pipe(
      map((articlesSummary) => {
        let data: IArticleSummary[] = [];
        articlesSummary.forEach((article) =>
          data.push(this.articleSummaryConverter.from(article))
        );
        return data;
      })
    );
  }
}

const ARTICLES_SUMMARY = [
  {
    id: 1,
    title: "Bash quick tips",
    tags: ["bash", "quick-tips"],
    category: "bash",
    publishDateIso8601: "2019-07-21T09:50:00Z",
  },
  {
    id: 2,
    title: "How to add Ellipsis to text when overflow in css",
    tags: ["frontend", "css", "overflow"],
    category: "frontend",
    publishDateIso8601: "2019-12-29T19:33:00Z",
  },
  {
    id: 3,
    title: "How to center horizontally an anchor element",
    tags: ["frontend", "css"],
    category: "frontend",
    publishDateIso8601: "2019-12-28T19:33:00Z",
  },
  {
    id: 4,
    title: "How to create tooltips with CSS",
    tags: ["css", "frontend"],
    category: "frontend",
    publishDateIso8601: "2019-12-30T16:33:00Z",
  },
  {
    id: 5,
    title: "How to draw a triangle with CSS",
    tags: ["css", "frontend"],
    category: "frontend",
    publishDateIso8601: "2019-12-30T13:43:00Z",
  },
  {
    id: 6,
    title: "Convert PDF to PNG using Mozilla PDF.js library",
    tags: ["javascript", "pdf", "png"],
    category: "javascript",
    publishDateIso8601: "2019-12-27T19:33:00Z",
  },
  {
    id: 7,
    title: "Html2canvas script demo",
    tags: ["javascript", "demo", "html2canvas"],
    category: "javascript",
    publishDateIso8601: "2019-07-23T09:33:00Z",
  },
  {
    id: 8,
    title: "Javascript classes",
    tags: ["javascript"],
    category: "javascript",
    publishDateIso8601: "2020-01-04T08:19:00Z",
  },
  {
    id: 9,
    title: "Closure functions in Javascript",
    tags: ["javascript", "closure"],
    category: "javascript",
    publishDateIso8601: "2019-06-23T18:49:00Z",
  },
  {
    id: 10,
    title: "What I have done to add react to my website",
    tags: ["frontend", "react"],
    category: "react",
    publishDateIso8601: "2020-01-02T15:27:00Z",
  },
  {
    id: 11,
    title: "Slide-in as you scroll down cards",
    tags: ["frontend", "css", "javascript"],
    category: "frontend",
    publishDateIso8601: "2019-10-17T22:16:00Z",
  },
  {
    id: 12,
    title: "Tabs widget demo",
    tags: ["frontend"],
    category: "frontend",
    publishDateIso8601: "2019-09-01T07:34:00Z",
  },
  {
    id: 13,
    title: "Git quick tips",
    tags: ["git", "quick-tips"],
    category: "git",
    publishDateIso8601: "2019-08-20T14:02:00Z",
  },
  {
    id: 14,
    title: "OpenSSL quick tips",
    tags: ["https", "quick-tips", "ssl"],
    category: "https",
    publishDateIso8601: "2019-09-29T11:54:00Z",
  },
  {
    id: 15,
    title: "Secure connections with SSL",
    tags: ["https", "ssl"],
    category: "https",
    publishDateIso8601: "2019-09-29T12:07:00Z",
  },
  {
    id: 16,
    title: "Array Manipulation Hacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-01-24T08:34:00Z",
  },
  {
    id: 17,
    title: "Duplicate Words Hacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-01-27T16:22:00Z",
  },
  {
    id: 18,
    title: "Java 1D Array (Part 2) Hacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-02-01T09:45:00Z",
  },
  {
    id: 19,
    title: "Java ArrayList CHacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-01-26T17:14:00Z",
  },
  {
    id: 20,
    title: "How to stop a process listening on a certain port in windows",
    tags: ["windows", "process"],
    category: "windows",
    publishDateIso8601: "2019-08-28T19:25:00Z",
  },
  {
    id: 21,
    title: "Java Dequeue Hacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-01-26T18:14:00Z",
  },
  {
    id: 22,
    title: "Java SHA-256 Hacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-01-26T10:15:00Z",
  },
  {
    id: 23,
    title: "Java Stack Hacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-01-27T07:14:00Z",
  },
  {
    id: 24,
    title: "New Year Chaos Hacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-01-25T10:49:00Z",
  },
  {
    id: 25,
    title: "Strong Password Hacker Rank Problem",
    tags: ["challenges", "java"],
    category: "challenges",
    publishDateIso8601: "2020-01-25T17:14:00Z",
  },
  {
    id: 26,
    title: "Builder Design Pattern",
    tags: ["design-pattern", "java"],
    category: "design-pattern",
    publishDateIso8601: "2020-02-15T13:18:00Z",
  },
  {
    id: 27,
    title: "Factory Design Pattern",
    tags: ["design-pattern", "java"],
    category: "design-pattern",
    publishDateIso8601: "2020-02-16T14:44:00Z",
  },
  {
    id: 28,
    title: "Singleton Design Pattern",
    tags: ["design-pattern", "java"],
    category: "design-pattern",
    publishDateIso8601: "2020-02-17T18:20:00Z",
  },
  {
    id: 29,
    title: "How to build Graph structure in java",
    tags: ["java", "graph"],
    category: "java",
    publishDateIso8601: "2020-02-02T15:30:00Z",
  },
  {
    id: 30,
    title: "How to show line numbers in VIM",
    tags: ["vim", "quick-tips"],
    category: "vim",
    publishDateIso8601: "2019-07-27T07:29:00Z",
  },
  {
    id: 31,
    title: "How to create a postgres JDBC connection in Java SE",
    tags: ["java", "jdbc"],
    category: "java",
    publishDateIso8601: "2019-08-25T10:15:00Z",
  },
  {
    id: 32,
    title: "How to create executable jar file using maven",
    tags: ["executable-jar", "java", "maven"],
    category: "java",
    publishDateIso8601: "2019-12-23T10:44:00Z",
  },
  {
    id: 33,
    title: "How to find local non-loopback address in java",
    tags: ["java", "network"],
    category: "java",
    publishDateIso8601: "2019-08-21T10:03:00Z",
  },
  {
    id: 34,
    title: "How to reverse a string in java",
    tags: ["java", "string"],
    category: "java",
    publishDateIso8601: "2019-08-24T14:14:00Z",
  },
  {
    id: 35,
    title: "How to run a jar file from command line",
    tags: ["jar", "java"],
    category: "java",
    publishDateIso8601: "2019-12-23T10:23:00Z",
  },
  {
    id: 36,
    title: "Jackson custom deserialization overview",
    tags: ["jackson", "java"],
    category: "jackson",
    publishDateIso8601: "2020-01-15T18:53:00Z",
  },
  {
    id: 37,
    title: "JDBC with and without JPA",
    tags: ["java", "jdbc", "jpa"],
    category: "java",
    publishDateIso8601: "2019-08-31T18:00:00Z",
  },
  {
    id: 38,
    title: "How to create your first maven plugin",
    tags: ["java", "maven"],
    category: "maven",
    publishDateIso8601: "2019-12-24T14:44:00Z",
  },
  {
    id: 39,
    title: "Producer Consumer demo",
    tags: ["java", "concurrency"],
    category: "java",
    publishDateIso8601: "2020-01-18T09:55:00Z",
  },
  {
    id: 40,
    title: "Scatter Gather Pattern",
    tags: ["concurrency", "java"],
    category: "java",
    publishDateIso8601: "2020-01-20T09:15:00Z",
  },
  {
    id: 41,
    title: "SimpleDateFormat Thread Safety issues",
    tags: ["concurrency", "java"],
    category: "java",
    publishDateIso8601: "2020-01-19T17:40:00Z",
  },
  {
    id: 42,
    title: "Validate IP addresses with Java",
    tags: ["java", "regex"],
    category: "java",
    publishDateIso8601: "2020-01-19T14:59:00Z",
  },
  {
    id: 43,
    title: "Volatile keyword in java",
    tags: ["java", "concurrency"],
    category: "java",
    publishDateIso8601: "2020-02-06T08:34:00Z",
  },
  {
    id: 44,
    title: "CRUD operations with JSF and Primefaces",
    tags: ["javaee", "jsf", "primefaces"],
    category: "javaee",
    publishDateIso8601: "2019-10-10T10:29:00Z",
  },
  {
    id: 45,
    title: "Facelet composite components demo",
    tags: ["javaee", "facelet", "jsf"],
    category: "javaee",
    publishDateIso8601: "2019-09-03T14:54:00Z",
  },
  {
    id: 46,
    title: "Facelet templating system",
    tags: ["javaee", "facelet", "jsf"],
    category: "javaee",
    publishDateIso8601: "2019-09-03T10:41:00Z",
  },
  {
    id: 47,
    title: "JSF download file demo",
    tags: ["javaee", "jsf"],
    category: "javaee",
    publishDateIso8601: "2019-10-19T20:22:00Z",
  },
  {
    id: 48,
    title: "JSF helloworld demo",
    tags: ["javaee", "jsf"],
    category: "javaee",
    publishDateIso8601: "2019-09-02T19:56:00Z",
  },
  {
    id: 49,
    title: "JSF Primefaces demo",
    tags: ["javaee", "demo", "jsf", "primefaces"],
    category: "javaee",
    publishDateIso8601: "2019-10-01T10:23:00Z",
  },
  {
    id: 50,
    title: "JSF Websocket demo",
    tags: ["javaee", "jsf", "websocket"],
    category: "javaee",
    publishDateIso8601: "2019-10-15T14:13:00Z",
  },
  {
    id: 51,
    title: "Old versus new JSF scope annotations",
    tags: ["javaee", "jsf"],
    category: "javaee",
    publishDateIso8601: "2019-09-23T15:49:00Z",
  },
  {
    id: 52,
    title: "SpringBoot with React demo",
    tags: ["react", "spring", "spring-boot"],
    category: "spring",
    publishDateIso8601: "2020-01-12T17:02:00Z",
  },
];
