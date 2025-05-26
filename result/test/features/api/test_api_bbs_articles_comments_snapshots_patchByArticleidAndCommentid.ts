import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IPageBbsArticleCommentSnapshot } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageBbsArticleCommentSnapshot";
import { IBbsArticleCommentSnapshot } from "@ORGANIZATION/PROJECT-api/lib/structures/IBbsArticleCommentSnapshot";

export async function test_api_bbs_articles_comments_snapshots_patchByArticleidAndCommentid(
  connection: api.IConnection,
) {
  const output: IPageBbsArticleCommentSnapshot =
    await api.functional.bbs.articles.comments.snapshots.patchByArticleidAndCommentid(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleCommentSnapshot.IRequest>(),
    );
  typia.assert(output);
}
