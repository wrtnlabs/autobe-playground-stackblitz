import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleComment";

export async function test_api_bbs_articles_comments_getByArticleidAndId(
  connection: api.IConnection,
) {
  const output: IBbsArticleComment =
    await api.functional.bbs.articles.comments.getByArticleidAndId(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
    );
  typia.assert(output);
}
