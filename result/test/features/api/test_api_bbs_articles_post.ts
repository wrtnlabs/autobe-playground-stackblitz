import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IBbsArticle } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticle";

export async function test_api_bbs_articles_post(connection: api.IConnection) {
  const output: IBbsArticle = await api.functional.bbs.articles.post(
    connection,
    typia.random<IBbsArticle.ICreate>(),
  );
  typia.assert(output);
}
