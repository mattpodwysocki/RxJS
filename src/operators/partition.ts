import {not} from '../util/not';
import {filter} from './filter';
import {Observable} from '../Observable';

export function partition<T>(predicate: (x: any, i?: any, a?: any) => boolean, thisArg?: any): Observable<T>[] {
  return [
    filter.call(this, predicate),
    filter.call(this, not(predicate, thisArg))
  ];
}

Observable.prototype.partition = partition;