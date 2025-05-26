import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IPageIBbsArticleSnapshotFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIBbsArticleSnapshotFile";
import { IBbsArticleSnapshotFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleSnapshotFile";

export async function test_api_bbs_articles_snapshots_files_patchByArticleidAndSnapshotid(
  connection: api.IConnection,
) {
  const output: IPageIBbsArticleSnapshotFile =
    await api.functional.bbs.articles.snapshots.files.patchByArticleidAndSnapshotid(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleSnapshotFile.IRequest>(),
    );
  typia.assert(output);
}
