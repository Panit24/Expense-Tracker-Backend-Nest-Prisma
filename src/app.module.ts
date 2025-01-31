import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { PrismaService } from './prisma/prisma.service';

// @Module({
//   imports: [ExpensesModule],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [ExpensesModule],
  providers: [PrismaService],
})
export class AppModule {}
