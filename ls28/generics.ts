function take<T>(a: T): string {
    console.log(a);
    return "sdg";
}

class A {}

take<A>(new A());

take<number>(1);