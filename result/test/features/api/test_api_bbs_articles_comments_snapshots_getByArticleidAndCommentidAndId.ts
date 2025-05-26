import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IBbsArticleCommentSnapshot } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleCommentSnapshot";

export async function test_api_bbs_articles_comments_snapshots_getByArticleidAndCommentidAndId(
  connection: api.IConnection,
) {
  const output: IBbsArticleCommentSnapshot =
    await api.functional.bbs.articles.comments.snapshots.getByArticleidAndCommentidAndId(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
    );
  typia.assert(output);
}
