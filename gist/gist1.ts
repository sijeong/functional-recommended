interface Ring {
  radius: {
    inner: number;
    outer: number;
  };
}

interface Square {
  side: number;
}

const ring1: Ring = {
  radius: {
    inner: 3,
    outer: 4
  }
};

const square1: Square = {
  side: 3
};

const innerCurcumference = (figure): number =>
  2 * Math.PI * figure.radius.inner;

import { of, from, BehaviorSubject } from "rxjs";
import { map, delay, mergeAll, mergeMap, switchAll, switchMap, concatMap } from "rxjs/operators";

const data = of([
  {
    brand: "porsche",
    model: "911"
  },
  {
    brand: "porsche",
    model: "macan"
  },
  {
    brand: "ferarri",
    model: "458"
  }
]);

data
  .pipe(map(cars => cars.map(car => `${car.brand} & ${car.model}`)))
  .subscribe(cars => console.log(cars));

data.pipe(
    map(cars => cars.filter(car => car.brand === 'porsche'))
).subscribe(cars => console.log(cars))

const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
    )
}

// mergeMap == flatMap
from([1, 2, 3, 4]).pipe(
    map(param => getData(param))
).subscribe(val => console.log(val))

from([1, 2, 3, 4]).pipe(
  map(param => getData(param)),
  mergeAll()
).subscribe(val => console.log(val))

from([1, 2, 3, 4]).pipe(
  mergeMap(param => getData(param))
).subscribe(val => console.log(val))

from([1, 2, 3, 4  ]).pipe(
  map(param => getData(param)),
  switchAll()
).subscribe(val => console.log(val))

from([1, 2, 3, 4]).pipe(
  switchMap(param => getData(param))
).subscribe(val => console.log(val))

const filters = ['brand=porsche', 'model=911', 'horsepower=389', 'color=red']
const activeFilters = new BehaviorSubject('')

const getData_ = (params) => {
  return of(`retrieved new data with params ${params}`).pipe(
    delay(1000)
  )
}

const applyFilters = () => {
  filters.forEach((filter, index) => {
    let newfilters = activeFilters.value;

    if(index === 0){
      newfilters = `?${filter}`
    }else{
      newfilters = `${newfilters}&${filter}`
    }

    activeFilters.next(newfilters)
  })
}

activeFilters.pipe(
  switchMap(param => getData_(param))
).subscribe(val => console.log(val))

applyFilters()

const getData__ = (param) => {
  const delayTime = Math.floor(Math.random() * 10_000) + 1;
  return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
    delay(delayTime)
  )
}

from([1, 2, 3, 4]).pipe(
  map(param => getData__(param))
).subscribe(val => val.subscribe(data => console.log('map:', data)))

from([1, 2, 3, 4]).pipe(
  mergeMap(param => getData__(param))
).subscribe(val => console.log('mergeMap:', val))

from([1, 2, 3, 4]).pipe(
  switchMap(param => getData__(param))
).subscribe(val => console.log('switchMap:', val))

from([1, 2, 3, 4]).pipe(
  concatMap(param => getData__(param))
).subscribe(val => console.log('concatMap:', val))