import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IAttachmentFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IAttachmentFile";

export async function test_api_attachmentFiles_post(
  connection: api.IConnection,
) {
  const output: IAttachmentFile = await api.functional.attachmentFiles.post(
    connection,
    typia.random<IAttachmentFile.ICreate>(),
  );
  typia.assert(output);
}
