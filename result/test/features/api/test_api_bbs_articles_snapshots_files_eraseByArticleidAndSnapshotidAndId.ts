import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IBbsArticleSnapshotFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleSnapshotFile";

export async function test_api_bbs_articles_snapshots_files_eraseByArticleidAndSnapshotidAndId(
  connection: api.IConnection,
) {
  const output: IBbsArticleSnapshotFile =
    await api.functional.bbs.articles.snapshots.files.eraseByArticleidAndSnapshotidAndId(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
    );
  typia.assert(output);
}
