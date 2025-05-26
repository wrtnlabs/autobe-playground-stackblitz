import { IPage } from "./IPage";
import { IBbsArticle } from "./IBbsArticle";

export namespace IPageIBbsArticle {
  /**
   * Paginated response type for BBS article summaries.
   *
   * Contains both pagination metadata and actual list of article summary
   * objects as required for efficient list display in UI, referencing the
   * standard IPage<T> approach.
   */
  export type ISummary = {
    pagination?: IPage.IPagination;

    /** Array of summarized articles for the list page. */
    data?: IBbsArticle.ISummary[];
  };
}
