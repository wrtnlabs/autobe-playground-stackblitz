import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IPageIBbsArticleSnapshot } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIBbsArticleSnapshot";
import { IBbsArticleSnapshot } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleSnapshot";

export async function test_api_bbs_articles_snapshots_patchByArticleid(
  connection: api.IConnection,
) {
  const output: IPageIBbsArticleSnapshot =
    await api.functional.bbs.articles.snapshots.patchByArticleid(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleSnapshot.IRequest>(),
    );
  typia.assert(output);
}
