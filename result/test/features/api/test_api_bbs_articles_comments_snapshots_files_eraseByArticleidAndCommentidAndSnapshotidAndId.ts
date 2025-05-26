import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

export async function test_api_bbs_articles_comments_snapshots_files_eraseByArticleidAndCommentidAndSnapshotidAndId(
  connection: api.IConnection,
) {
  const output =
    await api.functional.bbs.articles.comments.snapshots.files.eraseByArticleidAndCommentidAndSnapshotidAndId(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
    );
  typia.assert(output);
}
