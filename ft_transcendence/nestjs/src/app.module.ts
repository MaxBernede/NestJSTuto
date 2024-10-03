import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './database/ormconfig';
import { DatabasesModule } from './database/database.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(typeOrmConfig),
		DatabasesModule,
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
