import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IBbsArticleSnapshot } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleSnapshot";

export async function test_api_bbs_articles_snapshots_putByArticleidAndId(
  connection: api.IConnection,
) {
  const output: IBbsArticleSnapshot =
    await api.functional.bbs.articles.snapshots.putByArticleidAndId(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleSnapshot.IUpdate>(),
    );
  typia.assert(output);
}
