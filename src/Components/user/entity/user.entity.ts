import { BeforeInsert, Column, Entity, ObjectIdColumn } from "typeorm";
import { hashSync, genSaltSync } from 'bcrypt';
@Entity()
export class User{

    constructor(email: string, pass:string){
        this.email = email;
        this.password = pass;
    }
@ObjectIdColumn()
id: number;

@Column({
    type:'string',
    unique: true
})
email: string;

@Column({
    type:'string'
})
password:string;

@Column({
    type: 'date'
})
createAt:any;

@Column({
    type: 'date'
})
updateAt:any;

@BeforeInsert()
async hashPassword(){
    this.password = await hashSync(this.password, genSaltSync(10));
}
}