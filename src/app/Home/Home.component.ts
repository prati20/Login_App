
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.css']
})
export class HomeComponent {

    shoppingCart=[];

    totalOrange: number = 10;
    totalApple: number = 10;
    totalGrapes: number = 10;

    initialOranges: number = 10;
    initialApple: number = 10;
    initialGrapes: number = 10;


    addItem(itemType) {
        // alert(itemType + " added.");
        
        this.shoppingCart.push(itemType);
        switch (itemType) {
            case 'orange':
                this.totalOrange = (this.totalOrange>0) ? this.totalOrange-1: 0;
                break;
            case 'apple':
                this.totalApple = (this.totalApple>0)? this.totalApple-1: 0;
                break;
            case 'grapes':
                this.totalGrapes = (this.totalGrapes>0) ? this.totalGrapes-1:0;
                break;
        }
    }
    removeItem(itemType) {
        this.shoppingCart.pop();
        // alert(itemType + " removed.");
        switch (itemType) {
            case 'orange':
                this.totalOrange = (this.totalOrange < this.initialOranges) ? this.totalOrange+1 : this.initialOranges;
                break;
            case 'apple':
                this.totalApple = (this.totalApple< this.initialApple ) ? this.totalApple+1 : this.initialApple;
                break;
            case 'grapes':
                this.totalGrapes = (this.totalGrapes < this.initialGrapes) ? this.totalGrapes+1: this.initialGrapes;
                break;
        }
    }

}
