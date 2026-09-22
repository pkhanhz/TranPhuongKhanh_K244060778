import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productsImage = [
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "https://tse2.mm.bing.net/th/id/OIP.qVe5KS6Wn_ScpohHYI__2gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "https://tse1.mm.bing.net/th/id/OIP.WUirQURVjmngl22cFqvDNQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "https://tse2.mm.bing.net/th/id/OIP.yCER61gtgbtFRFal082NGgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ]
    constructor() { }
    getProductsWithImages() {
        return this.productsImage
    }
    getProductDetail(id: any) {

        return this.productsImage.find(x => x.ProductId == id)
    }
} 
