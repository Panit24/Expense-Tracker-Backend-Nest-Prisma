import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Expense = Awaited<ReturnType<typeof prisma.expense.findFirst>>;

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(@Body() data: Expense) {
    if (data) {
      return this.expensesService.create(data);
    } else {
      throw new Error('Data cannot be null');
    }
  }

  @Get()
  findAll() {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expensesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Expense) {
    if (data) {
      return this.expensesService.update(+id, data);
    } else {
      throw new Error('Data cannot be null');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expensesService.remove(+id);
  }
}
