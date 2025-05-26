import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleComment";

export async function test_api_bbs_articles_comments_postByArticleid(
  connection: api.IConnection,
) {
  const output: IBbsArticleComment =
    await api.functional.bbs.articles.comments.postByArticleid(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleComment.ICreate>(),
    );
  typia.assert(output);
}
