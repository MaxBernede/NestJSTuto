import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabasesService } from './database.service';
import { DatabasesController } from './database.controller';
import { Database } from './database.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Database])],
	providers: [DatabasesService],
	controllers: [DatabasesController],
})
export class DatabasesModule {}
