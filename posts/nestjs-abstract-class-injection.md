A seemingly common complaint regarding NestJS and TypeScript is the absence of interfaces in runtime code (since interfaces are removed during transpilation). This limitation prevents the use of constructor-based dependency injection and instead necessitates use of the `@Inject` decorator. That decorator requires us to associate some "real" JavaScript token with the interface to resolve the dependency - often just a string of the interface name:

```typescript
/* IAnimal.ts */
export interface IAnimal {
  speak(): string;
}

/* animal.service.ts */
export class Dog implements IAnimal {
  speak() {
    return "Woof";
  }
}

/* animal.module.ts */
@Module({
  providers: [{
    provide: "IAnimal",
    useClass: Dog,
  }]
})
export class AnimalModule

/* client.ts */
export class Client {
  constructor(@Inject("IAnimal") private animal: IAnimal) {}

  // Later...
  this.animal.speak();
}
```

This approach is adequate, but the "IAnimal" magic string is a little fragile and not actually associated with the interface. A modest improvement can be made by exporting a token with the interface:

```typescript
/* IAnimal.ts */
export interface IAnimal {
  speak(): string;
}

export const IAnimalToken = "IAnimal";
// or slightly better...
export const IAnimalToken = Symbol("IAnimal");

/* animal.module.ts */
@Module({
  providers: [{
    provide: IAnimalToken,
    useClass: Dog,
  }]
})
export class AnimalModule

/* client.ts */
export class Client {
  constructor(@Inject(IAnimalToken) private animal: IAnimal) {}

  // Later...
  this.animal.speak();
}
```

At least now the token reference is consistent. Still, manually injecting tokens like this can be cumbersome and conceptually unsatisfying. What we would really like is a true JavaScript object in the place of the interface, which we can reference universally at runtime. What we would really like is...an abstract class!

```typescript
/* IAnimal.ts */
export abstract class IAnimal {
    abstract speak(): string;
}

/* animal.service.ts */
// You can implement an abstract class without extending it!
export class Dog implements IAnimal {
  speak() {
    return "Woof";
  }
}

/* animal.module.ts */
@Module({
  providers: [{
    provide: IAnimal,
    useClass: Dog,
  }]
})
export class AnimalModule

/* client.ts */
export class Client {
  constructor(private animal: IAnimal) {}

  // Later...
  this.animal.speak();
}
```

Now a single, "real" JavaScript reference is used throughout the application to resolve the dependency. Whether or not the minor inconvenience of token-based dependency injection justifies this usage of abstract classes is a separate question. If you're feeling lazy, though, this is a convenient option!