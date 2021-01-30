import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task as TaskModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly taskService: TaskService,
  ) {}

  //Task Endpoint
  @Get('tasks/')
  async getTasks(): Promise<TaskModel[]> {
    return this.taskService.tasks({
        where: { id: { not: 0 },
      },
    });
  }

  @Get('tasks/:id')
  async getTaskById(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.task({ id: Number(id) });
  }

  @Post('tasks')
  async addTask(@Body() contentData: { content?: string; status: string;},
  ): Promise<TaskModel> {
    const { content, status } = contentData;
    return this.taskService.createTask({
      content,
      status,
    });
  }

  @Put('tasks/:id')
  async editTask(@Param('id') id: string, @Body()  contentData: {
    content?: string; status: string;}):
    Promise<TaskModel> {
    const { content, status } = contentData;
    return this.taskService.updateTask({
      where: { id: Number(id) },
      data: {
        content,
        status
      },
    });
  }

  @Delete('tasks/:id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.deleteTask({ id: Number(id) });
  }
}