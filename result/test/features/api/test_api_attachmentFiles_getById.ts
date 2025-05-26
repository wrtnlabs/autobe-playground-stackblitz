import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IAttachmentFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IAttachmentFile";

export async function test_api_attachmentFiles_getById(
  connection: api.IConnection,
) {
  const output: IAttachmentFile = await api.functional.attachmentFiles.getById(
    connection,
    typia.random<string & tags.Format<"uuid">>(),
  );
  typia.assert(output);
}
