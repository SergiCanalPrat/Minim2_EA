export class Bikes {
    _id: string;
    bike: string;
    km: string;
    descripcion: string;

    constructor(_id = '', bike = '', km ='', descripcion =''){
        this._id = _id;
       this.bike = bike;
       this.km = km;
       this.descripcion = descripcion;
    }

}
