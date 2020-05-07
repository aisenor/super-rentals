import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
        query = query.toUpperCase();
      rentals = rentals.filter(rental => {
          if(rental.title.toUpperCase().includes(query)){return true}
          if(rental.city.toUpperCase().includes(query)){return true}
          if(rental.owner.toUpperCase().includes(query)){return true}
          if(rental.type.toUpperCase().includes(query)){return true}
          if(rental.category.toUpperCase().includes(query)){return true}
          if(rental.description.toUpperCase().includes(query)){return true}
      }) 
    }
    
    return rentals;
  }
}