import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars=['toyota', 'honda', 'audi'];
  
  @Get()
  getAllCars() {
    return this.cars;
  }
  @Get(':id')
  getCarById(@Param('id')id:number){
    console.log({id:this.cars[id]})
    return this.cars[id]
  }
}
