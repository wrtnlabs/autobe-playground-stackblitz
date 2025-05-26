import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IPageIBbsArticleSnapshotFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIBbsArticleSnapshotFile";
import { IBbsArticleSnapshotFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleSnapshotFile";

export async function test_api_bbs_articles_snapshots_files_postByArticleidAndSnapshotid(
  connection: api.IConnection,
) {
  const output: IPageIBbsArticleSnapshotFile =
    await api.functional.bbs.articles.snapshots.files.postByArticleidAndSnapshotid(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleSnapshotFile.ICreate>(),
    );
  typia.assert(output);
}
