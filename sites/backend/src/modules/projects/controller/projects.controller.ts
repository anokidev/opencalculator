import { Controller, Post } from '@nestjs/common';

import { ProjectsService } from '../service/projects.service';

@Controller('projects')
export class ProjectsController {
  
  constructor(private readonly ProjectsService: ProjectsService) {};

  @Post('new')
  newProject() {};

  @Post('delete')
  deleteProject() {};

  @Post('update')
  saveProject() {};

};
