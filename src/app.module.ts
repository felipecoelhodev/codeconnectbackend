import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, PostsModule, CommentsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
