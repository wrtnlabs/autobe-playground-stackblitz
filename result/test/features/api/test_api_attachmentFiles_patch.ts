import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IPageIAttachmentFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IPageIAttachmentFile";
import { IAttachmentFile } from "@ORGANIZATION/PROJECT-api/lib/structures/IAttachmentFile";

export async function test_api_attachmentFiles_patch(
  connection: api.IConnection,
) {
  const output: IPageIAttachmentFile =
    await api.functional.attachmentFiles.patch(
      connection,
      typia.random<IAttachmentFile.IRequest>(),
    );
  typia.assert(output);
}
