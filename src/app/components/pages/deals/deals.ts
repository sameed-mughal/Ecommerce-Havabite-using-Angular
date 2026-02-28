import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deals',
  imports: [CommonModule, FormsModule],
  templateUrl: './deals.html',
  styleUrl: './deals.css',
})
export class Deals {


searchtext : string = ''

 deals = [
  {
    id: 1,
    image: "https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png",
    title: "Deals One",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 2600
  },
  {
    id: 2,
    image: "https://www.kfcpakistan.com/images/65428500-ea56-11ef-bf82-75f537a23a2b-Mighty_variant_0-2025-02-13220345.png",
    title: "Mighty Zinger",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 800
  },
  {
    id: 3,
    image: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
    title: "Krunch Burger",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 310
  },
  {
    id: 4,
    image: "https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png",
    title: "Deals One",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 2600
  },
  {
    id: 5,
    image: "https://www.kfcpakistan.com/images/65428500-ea56-11ef-bf82-75f537a23a2b-Mighty_variant_0-2025-02-13220345.png",
    title: "Mighty Zinger",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 800
  },
  {
    id: 6,
    image: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
    title: "Krunch Burger",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 310
  },
  {
    id: 7,
    image: "https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png",
    title: "Deals One",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 2600
  },
  {
    id: 8,
    image: "https://www.kfcpakistan.com/images/65428500-ea56-11ef-bf82-75f537a23a2b-Mighty_variant_0-2025-02-13220345.png",
    title: "Mighty Zinger",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 800
  },
  {
    id: 9,
    image: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
    title: "Krunch Burger",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 310
  },{
    id: 10,
    image: "https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png",
    title: "Deals One",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 2600
  },
  {
    id: 11,
    image: "https://www.kfcpakistan.com/images/65428500-ea56-11ef-bf82-75f537a23a2b-Mighty_variant_0-2025-02-13220345.png",
    title: "Mighty Zinger",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 800
  },
  {
    id: 12,
    image: "https://www.kfcpakistan.com/images/29700d60-f1a2-11ef-9e56-b384176afb2a-Krunchburger_variant_0-2025-02-23045345.png",
    title: "Krunch Burger",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 310
  },
 
]

get filteredCard(){
if(!this.searchtext) return this.deals;
  const txt = this.searchtext.toLowerCase()


  return this.deals.filter(abc =>
  (abc.title || '').toLowerCase().includes(txt) ||
    (abc.description || '').toLowerCase().includes(txt)


  )

}



}
