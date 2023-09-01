import { Component } from '@angular/core';
import { Review } from '../review';
import { query } from '@angular/animations';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
    
    points = [1, 2, 3, 4, 5];

    model = new Review(10, 0);
    
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    selectPoints(event: Event) {
        let value = parseInt((event.target as Element).textContent!) ;
        this.model = new Review(10, value);
    }

    stylePoints(event: Event) {
        let point = event.target as Element;
        point?.classList.add("selected-number");
    }

    removeSelectedPointStyles() {
        let points = document.querySelectorAll(".number-item");
        points.forEach(point => point.classList.remove("selected-number"));
    }


}
