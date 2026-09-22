import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {

    datas = [
        {
            Cateid: 'cate1',
            CateName: 'Nuoc ngot',
            Products: [
                {
                    ProductId: 'p1',
                    ProductName: 'Coca',
                    Price: 100,
                    Image: 'assets/coca.png'
                },
                {
                    ProductId: 'p2',
                    ProductName: 'Pepsi',
                    Price: 300,
                    Image: 'assets/pepsi.png'
                },
                {
                    ProductId: 'p3',
                    ProductName: 'Sting',
                    Price: 200,
                    Image: 'assets/sting.jpg'
                }
            ]
        },

        {
            Cateid: 'cate2',
            CateName: 'Bia',
            Products: [
                {
                    ProductId: 'p4',
                    ProductName: 'Heleiken',
                    Price: 500,
                    Image: 'assets/heineken.jpg'
                },
                {
                    ProductId: 'p5',
                    ProductName: '333',
                    Price: 400,
                    Image: 'assets/333.jpg'
                },
                {
                    ProductId: 'p6',
                    ProductName: 'Sai Gon',
                    Price: 600,
                    Image: 'assets/saigon.jpg'
                }
            ]
        }
    ];

    constructor() { }

    getCategories() {
        return this.datas;
    }
}