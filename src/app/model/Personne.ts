export class Personne {
  id: number;
  name: string;
  // tslint:disable-next-line:variable-name
  firstname: string;
  age: number;
  path: string;
  cin: number;
  job: string;

  constructor(id: number, name: string, first: string, age: number, path: string, cin: number, job: string) {
    this.id = id;
    this.name = name;
    this.firstname = first;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
}
