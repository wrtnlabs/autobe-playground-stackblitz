import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

export async function test_api_attachmentFiles_eraseById(
  connection: api.IConnection,
) {
  const output = await api.functional.attachmentFiles.eraseById(
    connection,
    typia.random<string & tags.Format<"uuid">>(),
  );
  typia.assert(output);
}
