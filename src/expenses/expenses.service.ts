import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

// Extract Expense type from Prisma Client
type Expense = Awaited<ReturnType<typeof prisma.expense.findFirst>>;

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ExpenseCreateInput): Promise<Expense> {
    return this.prisma.expense.create({ data });
  }

  async findAll(): Promise<Expense[]> {
    return this.prisma.expense.findMany();
  }

  async findOne(id: number): Promise<Expense | null> {
    return this.prisma.expense.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.ExpenseUpdateInput): Promise<Expense> {
    return this.prisma.expense.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Expense> {
    return this.prisma.expense.delete({ where: { id } });
  }
}
