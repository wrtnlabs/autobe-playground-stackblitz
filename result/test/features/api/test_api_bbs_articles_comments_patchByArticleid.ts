import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IPageBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageBbsArticleComment";
import { IBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleComment";

export async function test_api_bbs_articles_comments_patchByArticleid(
  connection: api.IConnection,
) {
  const output: IPageBbsArticleComment =
    await api.functional.bbs.articles.comments.patchByArticleid(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleComment.IRequest>(),
    );
  typia.assert(output);
}
