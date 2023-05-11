import { Injectable, NotFoundException, Post } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars=[{
        id:0,
        brand:'Toyota',
        model:'Corolla'
    },{
        id:1,
        brand:'Honda',
        model:'Civic'
    },{
        id:2,
        brand:'jeep',
        model:'Cherokee'
    }
];
findAll(){
    return this.cars;
}
findOneById(id:number){
    const car= this.cars.find(car=>car.id===id)

    if(!car) throw new NotFoundException(`car with id '${ id }' not found`);
    
   return car;
   
}

    
}

