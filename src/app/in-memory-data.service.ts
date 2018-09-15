import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const wines = [
      { id: 1, name: 'Zinfandel', year: '2006', producer: 'USA' },
      { id: 2, name: 'Shiraz', year: '2008', producer: 'Spain' },
      { id: 3, name: 'Chardonnay', year: '2009', producer: 'France' },
      { id: 4, name: 'Pinot Grigio', year: '2010', producer: 'Italy' },
      { id: 5, name: 'Pinot Noir', year: '2011', producer: 'Italy' },
      { id: 6, name: 'Riesling', year: '2000', producer: 'Germany' }
    ];
    return {wines};
  }
}