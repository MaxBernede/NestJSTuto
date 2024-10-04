import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './database/ormconfig';
import { DatabasesModule } from './database/database.module';
import { UsersModule } from './user/user.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(typeOrmConfig),
		DatabasesModule,
		UsersModule,
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
