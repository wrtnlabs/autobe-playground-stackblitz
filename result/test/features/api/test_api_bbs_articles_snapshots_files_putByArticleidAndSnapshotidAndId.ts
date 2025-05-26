import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IBbsArticleSnapshotFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleSnapshotFile";

export async function test_api_bbs_articles_snapshots_files_putByArticleidAndSnapshotidAndId(
  connection: api.IConnection,
) {
  const output: IBbsArticleSnapshotFile =
    await api.functional.bbs.articles.snapshots.files.putByArticleidAndSnapshotidAndId(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleSnapshotFile.IUpdate>(),
    );
  typia.assert(output);
}
