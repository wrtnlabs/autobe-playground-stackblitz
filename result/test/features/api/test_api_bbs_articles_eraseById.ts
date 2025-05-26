import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IBbsArticle } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticle";

export async function test_api_bbs_articles_eraseById(
  connection: api.IConnection,
) {
  const output: IBbsArticle = await api.functional.bbs.articles.eraseById(
    connection,
    typia.random<string & tags.Format<"uuid">>(),
    typia.random<IBbsArticle.IDelete>(),
  );
  typia.assert(output);
}
