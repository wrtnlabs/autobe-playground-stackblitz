import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIBbsArticle } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIBbsArticle";
import { IBbsArticle } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticle";

export async function test_api_bbs_articles_patch(connection: api.IConnection) {
  const output: IPageIBbsArticle.ISummary =
    await api.functional.bbs.articles.patch(
      connection,
      typia.random<IBbsArticle.IRequest>(),
    );
  typia.assert(output);
}
