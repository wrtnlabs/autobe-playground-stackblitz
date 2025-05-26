import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

export async function test_api_bbs_articles_comments_snapshots_eraseByArticleidAndCommentidAndId(
  connection: api.IConnection,
) {
  const output =
    await api.functional.bbs.articles.comments.snapshots.eraseByArticleidAndCommentidAndId(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
    );
  typia.assert(output);
}
