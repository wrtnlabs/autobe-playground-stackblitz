import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { ICommentSnapshotFile } from "@ORGANIZATION/PROJECT-api/lib/structures/ICommentSnapshotFile";

export async function test_api_bbs_articles_comments_snapshots_files_getByArticleidAndCommentidAndSnapshotidAndId(
  connection: api.IConnection,
) {
  const output: ICommentSnapshotFile =
    await api.functional.bbs.articles.comments.snapshots.files.getByArticleidAndCommentidAndSnapshotidAndId(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
    );
  typia.assert(output);
}
