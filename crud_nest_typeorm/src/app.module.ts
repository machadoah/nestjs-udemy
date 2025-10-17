import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemosModule } from './memos/memos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MemosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5400,
      username: 'user',
      database: 'memos',
      password: 'password',
      autoLoadEntities: true, // loads entities without having to specify them
      synchronize: true, // 🚨 synchronizes actions with the database (for development only)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
