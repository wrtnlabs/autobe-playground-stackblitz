import { tags } from "typia";

export namespace IPage {
  /**
   * Pagination metadata for paged OpenAPI results.
   *
   * Standardizes page navigation and client-side page controls per IPage<T>.
   */
  export type IPagination = {
    /**
     * Current page number.
     *
     * Helps the client understand which subset of total records is being
     * viewed.
     */
    current: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "uint32";
      }>;

    /**
     * Number of records per page (default 100).
     *
     * Assists performance tuning for UI grids and API result limits.
     */
    limit: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "uint32";
      }>;

    /**
     * Total available records in the database matching current query.
     *
     * Allows accurate pagination and total count calculations.
     */
    records: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "uint32";
      }>;

    /**
     * Total number of pages available for the data set.
     *
     * Computed as records/limit with ceiling, helps navigation controls.
     */
    pages: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "uint32";
      }>;
  };
}
