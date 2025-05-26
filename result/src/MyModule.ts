import { Module } from "@nestjs/common";

import { BbsArticlesController } from "./controllers/bbs/articles/BbsArticlesController";
import { BbsArticlesSnapshotsController } from "./controllers/bbs/articles/snapshots/BbsArticlesSnapshotsController";
import { BbsArticlesSnapshotsFilesController } from "./controllers/bbs/articles/snapshots/files/BbsArticlesSnapshotsFilesController";
import { BbsArticlesCommentsController } from "./controllers/bbs/articles/comments/BbsArticlesCommentsController";
import { BbsArticlesCommentsSnapshotsController } from "./controllers/bbs/articles/comments/snapshots/BbsArticlesCommentsSnapshotsController";
import { BbsArticlesCommentsSnapshotsFilesController } from "./controllers/bbs/articles/comments/snapshots/files/BbsArticlesCommentsSnapshotsFilesController";
import { AttachmentfilesController } from "./controllers/attachmentFiles/AttachmentfilesController";

@Module({
  controllers: [
    BbsArticlesController,
    BbsArticlesSnapshotsController,
    BbsArticlesSnapshotsFilesController,
    BbsArticlesCommentsController,
    BbsArticlesCommentsSnapshotsController,
    BbsArticlesCommentsSnapshotsFilesController,
    AttachmentfilesController,
  ],
})
export class MyModule {}
