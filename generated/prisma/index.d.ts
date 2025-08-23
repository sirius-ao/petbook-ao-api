
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleItem
 * 
 */
export type SaleItem = $Result.DefaultSelection<Prisma.$SaleItemPayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>
/**
 * Model Affiliate
 * 
 */
export type Affiliate = $Result.DefaultSelection<Prisma.$AffiliatePayload>
/**
 * Model AffiliateReferral
 * 
 */
export type AffiliateReferral = $Result.DefaultSelection<Prisma.$AffiliateReferralPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  VET: 'VET',
  ATTENDANT: 'ATTENDANT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const ReferralType: {
  USER_SIGNUP: 'USER_SIGNUP',
  BUSINESS_SIGNUP: 'BUSINESS_SIGNUP',
  ORDER: 'ORDER'
};

export type ReferralType = (typeof ReferralType)[keyof typeof ReferralType]


export const ReferralStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  PAID: 'PAID'
};

export type ReferralStatus = (typeof ReferralStatus)[keyof typeof ReferralStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type ReferralType = $Enums.ReferralType

export const ReferralType: typeof $Enums.ReferralType

export type ReferralStatus = $Enums.ReferralStatus

export const ReferralStatus: typeof $Enums.ReferralStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleItem`: Exposes CRUD operations for the **SaleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleItems
    * const saleItems = await prisma.saleItem.findMany()
    * ```
    */
  get saleItem(): Prisma.SaleItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalRecord`: Exposes CRUD operations for the **MedicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecord.findMany()
    * ```
    */
  get medicalRecord(): Prisma.MedicalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.affiliate`: Exposes CRUD operations for the **Affiliate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Affiliates
    * const affiliates = await prisma.affiliate.findMany()
    * ```
    */
  get affiliate(): Prisma.AffiliateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.affiliateReferral`: Exposes CRUD operations for the **AffiliateReferral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AffiliateReferrals
    * const affiliateReferrals = await prisma.affiliateReferral.findMany()
    * ```
    */
  get affiliateReferral(): Prisma.AffiliateReferralDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Business: 'Business',
    Client: 'Client',
    Pet: 'Pet',
    Appointment: 'Appointment',
    Service: 'Service',
    Product: 'Product',
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    MedicalRecord: 'MedicalRecord',
    Affiliate: 'Affiliate',
    AffiliateReferral: 'AffiliateReferral'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "business" | "client" | "pet" | "appointment" | "service" | "product" | "sale" | "saleItem" | "medicalRecord" | "affiliate" | "affiliateReferral"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleItem: {
        payload: Prisma.$SaleItemPayload<ExtArgs>
        fields: Prisma.SaleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findFirst: {
            args: Prisma.SaleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findMany: {
            args: Prisma.SaleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          create: {
            args: Prisma.SaleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          createMany: {
            args: Prisma.SaleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          delete: {
            args: Prisma.SaleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          update: {
            args: Prisma.SaleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          upsert: {
            args: Prisma.SaleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          aggregate: {
            args: Prisma.SaleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleItem>
          }
          groupBy: {
            args: Prisma.SaleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleItemCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecord: {
        payload: Prisma.$MedicalRecordPayload<ExtArgs>
        fields: Prisma.MedicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          delete: {
            args: Prisma.MedicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          update: {
            args: Prisma.MedicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          upsert: {
            args: Prisma.MedicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecord>
          }
          groupBy: {
            args: Prisma.MedicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordCountAggregateOutputType> | number
          }
        }
      }
      Affiliate: {
        payload: Prisma.$AffiliatePayload<ExtArgs>
        fields: Prisma.AffiliateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AffiliateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AffiliateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          findFirst: {
            args: Prisma.AffiliateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AffiliateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          findMany: {
            args: Prisma.AffiliateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>[]
          }
          create: {
            args: Prisma.AffiliateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          createMany: {
            args: Prisma.AffiliateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AffiliateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>[]
          }
          delete: {
            args: Prisma.AffiliateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          update: {
            args: Prisma.AffiliateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          deleteMany: {
            args: Prisma.AffiliateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AffiliateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AffiliateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>[]
          }
          upsert: {
            args: Prisma.AffiliateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          aggregate: {
            args: Prisma.AffiliateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAffiliate>
          }
          groupBy: {
            args: Prisma.AffiliateGroupByArgs<ExtArgs>
            result: $Utils.Optional<AffiliateGroupByOutputType>[]
          }
          count: {
            args: Prisma.AffiliateCountArgs<ExtArgs>
            result: $Utils.Optional<AffiliateCountAggregateOutputType> | number
          }
        }
      }
      AffiliateReferral: {
        payload: Prisma.$AffiliateReferralPayload<ExtArgs>
        fields: Prisma.AffiliateReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AffiliateReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AffiliateReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>
          }
          findFirst: {
            args: Prisma.AffiliateReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AffiliateReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>
          }
          findMany: {
            args: Prisma.AffiliateReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>[]
          }
          create: {
            args: Prisma.AffiliateReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>
          }
          createMany: {
            args: Prisma.AffiliateReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AffiliateReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>[]
          }
          delete: {
            args: Prisma.AffiliateReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>
          }
          update: {
            args: Prisma.AffiliateReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>
          }
          deleteMany: {
            args: Prisma.AffiliateReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AffiliateReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AffiliateReferralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>[]
          }
          upsert: {
            args: Prisma.AffiliateReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateReferralPayload>
          }
          aggregate: {
            args: Prisma.AffiliateReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAffiliateReferral>
          }
          groupBy: {
            args: Prisma.AffiliateReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<AffiliateReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.AffiliateReferralCountArgs<ExtArgs>
            result: $Utils.Optional<AffiliateReferralCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    business?: BusinessOmit
    client?: ClientOmit
    pet?: PetOmit
    appointment?: AppointmentOmit
    service?: ServiceOmit
    product?: ProductOmit
    sale?: SaleOmit
    saleItem?: SaleItemOmit
    medicalRecord?: MedicalRecordOmit
    affiliate?: AffiliateOmit
    affiliateReferral?: AffiliateReferralOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Affiliate: number
    MedicalRecord: number
    AffiliateReferral: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Affiliate?: boolean | UserCountOutputTypeCountAffiliateArgs
    MedicalRecord?: boolean | UserCountOutputTypeCountMedicalRecordArgs
    AffiliateReferral?: boolean | UserCountOutputTypeCountAffiliateReferralArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAffiliateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedicalRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAffiliateReferralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateReferralWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    appointments: number
    clients: number
    products: number
    sales: number
    services: number
    users: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | BusinessCountOutputTypeCountAppointmentsArgs
    clients?: boolean | BusinessCountOutputTypeCountClientsArgs
    products?: boolean | BusinessCountOutputTypeCountProductsArgs
    sales?: boolean | BusinessCountOutputTypeCountSalesArgs
    services?: boolean | BusinessCountOutputTypeCountServicesArgs
    users?: boolean | BusinessCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    pets: number
    Sale: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | ClientCountOutputTypeCountPetsArgs
    Sale?: boolean | ClientCountOutputTypeCountSaleArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    appointments: number
    records: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PetCountOutputTypeCountAppointmentsArgs
    records?: boolean | PetCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    Appointment: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointment?: boolean | ServiceCountOutputTypeCountAppointmentArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    SaleItem: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SaleItem?: boolean | ProductCountOutputTypeCountSaleItemArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    items: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }


  /**
   * Count Type AffiliateCountOutputType
   */

  export type AffiliateCountOutputType = {
    AffiliateReferral: number
  }

  export type AffiliateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AffiliateReferral?: boolean | AffiliateCountOutputTypeCountAffiliateReferralArgs
  }

  // Custom InputTypes
  /**
   * AffiliateCountOutputType without action
   */
  export type AffiliateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateCountOutputType
     */
    select?: AffiliateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AffiliateCountOutputType without action
   */
  export type AffiliateCountOutputTypeCountAffiliateReferralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateReferralWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    businessId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    businessId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    businessId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    businessId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    businessId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    businessId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    businessId?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    businessId?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    businessId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    businessId: number | null
    createAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    Affiliate?: boolean | User$AffiliateArgs<ExtArgs>
    MedicalRecord?: boolean | User$MedicalRecordArgs<ExtArgs>
    business?: boolean | User$businessArgs<ExtArgs>
    AffiliateReferral?: boolean | User$AffiliateReferralArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | User$businessArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | User$businessArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "businessId" | "createAt" | "updateAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Affiliate?: boolean | User$AffiliateArgs<ExtArgs>
    MedicalRecord?: boolean | User$MedicalRecordArgs<ExtArgs>
    business?: boolean | User$businessArgs<ExtArgs>
    AffiliateReferral?: boolean | User$AffiliateReferralArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | User$businessArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | User$businessArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Affiliate: Prisma.$AffiliatePayload<ExtArgs>[]
      MedicalRecord: Prisma.$MedicalRecordPayload<ExtArgs>[]
      business: Prisma.$BusinessPayload<ExtArgs> | null
      AffiliateReferral: Prisma.$AffiliateReferralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      businessId: number | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Affiliate<T extends User$AffiliateArgs<ExtArgs> = {}>(args?: Subset<T, User$AffiliateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MedicalRecord<T extends User$MedicalRecordArgs<ExtArgs> = {}>(args?: Subset<T, User$MedicalRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    business<T extends User$businessArgs<ExtArgs> = {}>(args?: Subset<T, User$businessArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    AffiliateReferral<T extends User$AffiliateReferralArgs<ExtArgs> = {}>(args?: Subset<T, User$AffiliateReferralArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly businessId: FieldRef<"User", 'Int'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Affiliate
   */
  export type User$AffiliateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    where?: AffiliateWhereInput
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    cursor?: AffiliateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AffiliateScalarFieldEnum | AffiliateScalarFieldEnum[]
  }

  /**
   * User.MedicalRecord
   */
  export type User$MedicalRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * User.business
   */
  export type User$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
  }

  /**
   * User.AffiliateReferral
   */
  export type User$AffiliateReferralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    where?: AffiliateReferralWhereInput
    orderBy?: AffiliateReferralOrderByWithRelationInput | AffiliateReferralOrderByWithRelationInput[]
    cursor?: AffiliateReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AffiliateReferralScalarFieldEnum | AffiliateReferralScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    email: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createAt?: true
    updateAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createAt?: true
    updateAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: number
    name: string
    address: string
    phone: string
    email: string
    createAt: Date
    updateAt: Date
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createAt?: boolean
    updateAt?: boolean
    appointments?: boolean | Business$appointmentsArgs<ExtArgs>
    clients?: boolean | Business$clientsArgs<ExtArgs>
    products?: boolean | Business$productsArgs<ExtArgs>
    sales?: boolean | Business$salesArgs<ExtArgs>
    services?: boolean | Business$servicesArgs<ExtArgs>
    users?: boolean | Business$usersArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "email" | "createAt" | "updateAt", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Business$appointmentsArgs<ExtArgs>
    clients?: boolean | Business$clientsArgs<ExtArgs>
    products?: boolean | Business$productsArgs<ExtArgs>
    sales?: boolean | Business$salesArgs<ExtArgs>
    services?: boolean | Business$servicesArgs<ExtArgs>
    users?: boolean | Business$usersArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      phone: string
      email: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Business$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Business$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends Business$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Business$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Business$productsArgs<ExtArgs> = {}>(args?: Subset<T, Business$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Business$salesArgs<ExtArgs> = {}>(args?: Subset<T, Business$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Business$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Business$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Business$usersArgs<ExtArgs> = {}>(args?: Subset<T, Business$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'Int'>
    readonly name: FieldRef<"Business", 'String'>
    readonly address: FieldRef<"Business", 'String'>
    readonly phone: FieldRef<"Business", 'String'>
    readonly email: FieldRef<"Business", 'String'>
    readonly createAt: FieldRef<"Business", 'DateTime'>
    readonly updateAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.appointments
   */
  export type Business$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Business.clients
   */
  export type Business$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Business.products
   */
  export type Business$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Business.sales
   */
  export type Business$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Business.services
   */
  export type Business$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Business.users
   */
  export type Business$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    businessId: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    businessId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    businessId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    businessId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    businessId?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    businessId?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    businessId?: true
    createAt?: true
    updateAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    businessId?: true
    createAt?: true
    updateAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    businessId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    email: string | null
    phone: string | null
    businessId: number
    createAt: Date
    updateAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    pets?: boolean | Client$petsArgs<ExtArgs>
    Sale?: boolean | Client$SaleArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "businessId" | "createAt" | "updateAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    pets?: boolean | Client$petsArgs<ExtArgs>
    Sale?: boolean | Client$SaleArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      pets: Prisma.$PetPayload<ExtArgs>[]
      Sale: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      phone: string | null
      businessId: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pets<T extends Client$petsArgs<ExtArgs> = {}>(args?: Subset<T, Client$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sale<T extends Client$SaleArgs<ExtArgs> = {}>(args?: Subset<T, Client$SaleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly businessId: FieldRef<"Client", 'Int'>
    readonly createAt: FieldRef<"Client", 'DateTime'>
    readonly updateAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.pets
   */
  export type Client$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Client.Sale
   */
  export type Client$SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type PetSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type PetMinAggregateOutputType = {
    id: number | null
    name: string | null
    species: string | null
    breed: string | null
    birthDate: Date | null
    clientId: number | null
    nextVaccineDate: Date | null
    lastFedAt: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    species: string | null
    breed: string | null
    birthDate: Date | null
    clientId: number | null
    nextVaccineDate: Date | null
    lastFedAt: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    species: number
    breed: number
    birthDate: number
    clientId: number
    nextVaccineDate: number
    lastFedAt: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    clientId?: true
    nextVaccineDate?: true
    lastFedAt?: true
    createAt?: true
    updateAt?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    clientId?: true
    nextVaccineDate?: true
    lastFedAt?: true
    createAt?: true
    updateAt?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    clientId?: true
    nextVaccineDate?: true
    lastFedAt?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: number
    name: string
    species: string
    breed: string
    birthDate: Date | null
    clientId: number
    nextVaccineDate: Date | null
    lastFedAt: Date | null
    createAt: Date
    updateAt: Date
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    clientId?: boolean
    nextVaccineDate?: boolean
    lastFedAt?: boolean
    createAt?: boolean
    updateAt?: boolean
    appointments?: boolean | Pet$appointmentsArgs<ExtArgs>
    records?: boolean | Pet$recordsArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    clientId?: boolean
    nextVaccineDate?: boolean
    lastFedAt?: boolean
    createAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    clientId?: boolean
    nextVaccineDate?: boolean
    lastFedAt?: boolean
    createAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    clientId?: boolean
    nextVaccineDate?: boolean
    lastFedAt?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "species" | "breed" | "birthDate" | "clientId" | "nextVaccineDate" | "lastFedAt" | "createAt" | "updateAt", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Pet$appointmentsArgs<ExtArgs>
    records?: boolean | Pet$recordsArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      records: Prisma.$MedicalRecordPayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      species: string
      breed: string
      birthDate: Date | null
      clientId: number
      nextVaccineDate: Date | null
      lastFedAt: Date | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Pet$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends Pet$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'Int'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly species: FieldRef<"Pet", 'String'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly birthDate: FieldRef<"Pet", 'DateTime'>
    readonly clientId: FieldRef<"Pet", 'Int'>
    readonly nextVaccineDate: FieldRef<"Pet", 'DateTime'>
    readonly lastFedAt: FieldRef<"Pet", 'DateTime'>
    readonly createAt: FieldRef<"Pet", 'DateTime'>
    readonly updateAt: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.appointments
   */
  export type Pet$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Pet.records
   */
  export type Pet$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    petId: number | null
    serviceId: number | null
    businessId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    petId: number | null
    serviceId: number | null
    businessId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    date: Date | null
    status: $Enums.AppointmentStatus | null
    petId: number | null
    serviceId: number | null
    businessId: number | null
    notes: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    status: $Enums.AppointmentStatus | null
    petId: number | null
    serviceId: number | null
    businessId: number | null
    notes: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    date: number
    status: number
    petId: number
    serviceId: number
    businessId: number
    notes: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    petId?: true
    serviceId?: true
    businessId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    petId?: true
    serviceId?: true
    businessId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    petId?: true
    serviceId?: true
    businessId?: true
    notes?: true
    createAt?: true
    updateAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    petId?: true
    serviceId?: true
    businessId?: true
    notes?: true
    createAt?: true
    updateAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    petId?: true
    serviceId?: true
    businessId?: true
    notes?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    date: Date
    status: $Enums.AppointmentStatus
    petId: number
    serviceId: number | null
    businessId: number
    notes: string | null
    createAt: Date
    updateAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    petId?: boolean
    serviceId?: boolean
    businessId?: boolean
    notes?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | Appointment$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    petId?: boolean
    serviceId?: boolean
    businessId?: boolean
    notes?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | Appointment$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    petId?: boolean
    serviceId?: boolean
    businessId?: boolean
    notes?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | Appointment$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    petId?: boolean
    serviceId?: boolean
    businessId?: boolean
    notes?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "status" | "petId" | "serviceId" | "businessId" | "notes" | "createAt" | "updateAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | Appointment$serviceArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | Appointment$serviceArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    service?: boolean | Appointment$serviceArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      pet: Prisma.$PetPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      status: $Enums.AppointmentStatus
      petId: number
      serviceId: number | null
      businessId: number
      notes: string | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends Appointment$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly petId: FieldRef<"Appointment", 'Int'>
    readonly serviceId: FieldRef<"Appointment", 'Int'>
    readonly businessId: FieldRef<"Appointment", 'Int'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly createAt: FieldRef<"Appointment", 'DateTime'>
    readonly updateAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.service
   */
  export type Appointment$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    price: number | null
    duration: number | null
    businessId: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    price: number | null
    duration: number | null
    businessId: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    duration: number | null
    businessId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    duration: number | null
    businessId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    price: number
    duration: number
    businessId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    businessId?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    businessId?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    businessId?: true
    createAt?: true
    updateAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    businessId?: true
    createAt?: true
    updateAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    businessId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    price: number
    duration: number
    businessId: number
    createAt: Date
    updateAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    Appointment?: boolean | Service$AppointmentArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "duration" | "businessId" | "createAt" | "updateAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointment?: boolean | Service$AppointmentArgs<ExtArgs>
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      Appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      duration: number
      businessId: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Appointment<T extends Service$AppointmentArgs<ExtArgs> = {}>(args?: Subset<T, Service$AppointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly businessId: FieldRef<"Service", 'Int'>
    readonly createAt: FieldRef<"Service", 'DateTime'>
    readonly updateAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.Appointment
   */
  export type Service$AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    businessId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    businessId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
    businessId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
    businessId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    stock: number
    businessId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    businessId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    businessId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    businessId?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    businessId?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    businessId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    price: number
    stock: number
    businessId: number
    createAt: Date
    updateAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    SaleItem?: boolean | Product$SaleItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    businessId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "stock" | "businessId" | "createAt" | "updateAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    SaleItem?: boolean | Product$SaleItemArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      SaleItem: Prisma.$SaleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      stock: number
      businessId: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SaleItem<T extends Product$SaleItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$SaleItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly businessId: FieldRef<"Product", 'Int'>
    readonly createAt: FieldRef<"Product", 'DateTime'>
    readonly updateAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.SaleItem
   */
  export type Product$SaleItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    businessId: number | null
    total: number | null
  }

  export type SaleSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    businessId: number | null
    total: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    businessId: number | null
    total: number | null
    dateSale: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    businessId: number | null
    total: number | null
    dateSale: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    clientId: number
    businessId: number
    total: number
    dateSale: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    id?: true
    clientId?: true
    businessId?: true
    total?: true
  }

  export type SaleSumAggregateInputType = {
    id?: true
    clientId?: true
    businessId?: true
    total?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    clientId?: true
    businessId?: true
    total?: true
    dateSale?: true
    createAt?: true
    updateAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    clientId?: true
    businessId?: true
    total?: true
    dateSale?: true
    createAt?: true
    updateAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    clientId?: true
    businessId?: true
    total?: true
    dateSale?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: number
    clientId: number | null
    businessId: number
    total: number
    dateSale: Date
    createAt: Date
    updateAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    businessId?: boolean
    total?: boolean
    dateSale?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    client?: boolean | Sale$clientArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    businessId?: boolean
    total?: boolean
    dateSale?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    client?: boolean | Sale$clientArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    businessId?: boolean
    total?: boolean
    dateSale?: boolean
    createAt?: boolean
    updateAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    client?: boolean | Sale$clientArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    clientId?: boolean
    businessId?: boolean
    total?: boolean
    dateSale?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "businessId" | "total" | "dateSale" | "createAt" | "updateAt", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    client?: boolean | Sale$clientArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    client?: boolean | Sale$clientArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    client?: boolean | Sale$clientArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs> | null
      items: Prisma.$SaleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number | null
      businessId: number
      total: number
      dateSale: Date
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends Sale$clientArgs<ExtArgs> = {}>(args?: Subset<T, Sale$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Sale$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'Int'>
    readonly clientId: FieldRef<"Sale", 'Int'>
    readonly businessId: FieldRef<"Sale", 'Int'>
    readonly total: FieldRef<"Sale", 'Float'>
    readonly dateSale: FieldRef<"Sale", 'DateTime'>
    readonly createAt: FieldRef<"Sale", 'DateTime'>
    readonly updateAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.client
   */
  export type Sale$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Sale.items
   */
  export type Sale$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleItem
   */

  export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  export type SaleItemAvgAggregateOutputType = {
    id: number | null
    saleId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type SaleItemSumAggregateOutputType = {
    id: number | null
    saleId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type SaleItemMinAggregateOutputType = {
    id: number | null
    saleId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type SaleItemMaxAggregateOutputType = {
    id: number | null
    saleId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type SaleItemCountAggregateOutputType = {
    id: number
    saleId: number
    productId: number
    quantity: number
    price: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type SaleItemAvgAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type SaleItemSumAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type SaleItemMinAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    price?: true
    createAt?: true
    updateAt?: true
  }

  export type SaleItemMaxAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    price?: true
    createAt?: true
    updateAt?: true
  }

  export type SaleItemCountAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    price?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type SaleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItem to aggregate.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleItems
    **/
    _count?: true | SaleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleItemMaxAggregateInputType
  }

  export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleItem[P]>
      : GetScalarType<T[P], AggregateSaleItem[P]>
  }




  export type SaleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithAggregationInput | SaleItemOrderByWithAggregationInput[]
    by: SaleItemScalarFieldEnum[] | SaleItemScalarFieldEnum
    having?: SaleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleItemCountAggregateInputType | true
    _avg?: SaleItemAvgAggregateInputType
    _sum?: SaleItemSumAggregateInputType
    _min?: SaleItemMinAggregateInputType
    _max?: SaleItemMaxAggregateInputType
  }

  export type SaleItemGroupByOutputType = {
    id: number
    saleId: number
    productId: number
    quantity: number
    price: number
    createAt: Date
    updateAt: Date
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectScalar = {
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type SaleItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "productId" | "quantity" | "price" | "createAt" | "updateAt", ExtArgs["result"]["saleItem"]>
  export type SaleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }

  export type $SaleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      sale: Prisma.$SalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saleId: number
      productId: number
      quantity: number
      price: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["saleItem"]>
    composites: {}
  }

  type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = $Result.GetResult<Prisma.$SaleItemPayload, S>

  type SaleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleItemCountAggregateInputType | true
    }

  export interface SaleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'], meta: { name: 'SaleItem' } }
    /**
     * Find zero or one SaleItem that matches the filter.
     * @param {SaleItemFindUniqueArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleItemFindUniqueArgs>(args: SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleItemFindUniqueOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleItemFindFirstArgs>(args?: SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleItems
     * const saleItems = await prisma.saleItem.findMany()
     * 
     * // Get first 10 SaleItems
     * const saleItems = await prisma.saleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleItemFindManyArgs>(args?: SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleItem.
     * @param {SaleItemCreateArgs} args - Arguments to create a SaleItem.
     * @example
     * // Create one SaleItem
     * const SaleItem = await prisma.saleItem.create({
     *   data: {
     *     // ... data to create a SaleItem
     *   }
     * })
     * 
     */
    create<T extends SaleItemCreateArgs>(args: SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleItems.
     * @param {SaleItemCreateManyArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleItemCreateManyArgs>(args?: SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleItems and returns the data saved in the database.
     * @param {SaleItemCreateManyAndReturnArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleItem.
     * @param {SaleItemDeleteArgs} args - Arguments to delete one SaleItem.
     * @example
     * // Delete one SaleItem
     * const SaleItem = await prisma.saleItem.delete({
     *   where: {
     *     // ... filter to delete one SaleItem
     *   }
     * })
     * 
     */
    delete<T extends SaleItemDeleteArgs>(args: SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleItem.
     * @param {SaleItemUpdateArgs} args - Arguments to update one SaleItem.
     * @example
     * // Update one SaleItem
     * const saleItem = await prisma.saleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleItemUpdateArgs>(args: SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleItems.
     * @param {SaleItemDeleteManyArgs} args - Arguments to filter SaleItems to delete.
     * @example
     * // Delete a few SaleItems
     * const { count } = await prisma.saleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleItemUpdateManyArgs>(args: SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems and returns the data updated in the database.
     * @param {SaleItemUpdateManyAndReturnArgs} args - Arguments to update many SaleItems.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleItem.
     * @param {SaleItemUpsertArgs} args - Arguments to update or create a SaleItem.
     * @example
     * // Update or create a SaleItem
     * const saleItem = await prisma.saleItem.upsert({
     *   create: {
     *     // ... data to create a SaleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleItemUpsertArgs>(args: SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemCountArgs} args - Arguments to filter SaleItems to count.
     * @example
     * // Count the number of SaleItems
     * const count = await prisma.saleItem.count({
     *   where: {
     *     // ... the filter for the SaleItems we want to count
     *   }
     * })
    **/
    count<T extends SaleItemCountArgs>(
      args?: Subset<T, SaleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleItemAggregateArgs>(args: Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>

    /**
     * Group by SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleItem model
   */
  readonly fields: SaleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaleItem model
   */
  interface SaleItemFieldRefs {
    readonly id: FieldRef<"SaleItem", 'Int'>
    readonly saleId: FieldRef<"SaleItem", 'Int'>
    readonly productId: FieldRef<"SaleItem", 'Int'>
    readonly quantity: FieldRef<"SaleItem", 'Int'>
    readonly price: FieldRef<"SaleItem", 'Float'>
    readonly createAt: FieldRef<"SaleItem", 'DateTime'>
    readonly updateAt: FieldRef<"SaleItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SaleItem findUnique
   */
  export type SaleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findUniqueOrThrow
   */
  export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findFirst
   */
  export type SaleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findFirstOrThrow
   */
  export type SaleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findMany
   */
  export type SaleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItems to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem create
   */
  export type SaleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleItem.
     */
    data: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
  }

  /**
   * SaleItem createMany
   */
  export type SaleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleItem createManyAndReturn
   */
  export type SaleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem update
   */
  export type SaleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleItem.
     */
    data: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
    /**
     * Choose, which SaleItem to update.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem updateMany
   */
  export type SaleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
  }

  /**
   * SaleItem updateManyAndReturn
   */
  export type SaleItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem upsert
   */
  export type SaleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleItem to update in case it exists.
     */
    where: SaleItemWhereUniqueInput
    /**
     * In case the SaleItem found by the `where` argument doesn't exist, create a new SaleItem with this data.
     */
    create: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
    /**
     * In case the SaleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
  }

  /**
   * SaleItem delete
   */
  export type SaleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter which SaleItem to delete.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem deleteMany
   */
  export type SaleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItems to delete
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to delete.
     */
    limit?: number
  }

  /**
   * SaleItem without action
   */
  export type SaleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecord
   */

  export type AggregateMedicalRecord = {
    _count: MedicalRecordCountAggregateOutputType | null
    _avg: MedicalRecordAvgAggregateOutputType | null
    _sum: MedicalRecordSumAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  export type MedicalRecordAvgAggregateOutputType = {
    id: number | null
    petId: number | null
    vetId: number | null
  }

  export type MedicalRecordSumAggregateOutputType = {
    id: number | null
    petId: number | null
    vetId: number | null
  }

  export type MedicalRecordMinAggregateOutputType = {
    id: number | null
    petId: number | null
    vetId: number | null
    date: Date | null
    description: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type MedicalRecordMaxAggregateOutputType = {
    id: number | null
    petId: number | null
    vetId: number | null
    date: Date | null
    description: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type MedicalRecordCountAggregateOutputType = {
    id: number
    petId: number
    vetId: number
    date: number
    description: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type MedicalRecordAvgAggregateInputType = {
    id?: true
    petId?: true
    vetId?: true
  }

  export type MedicalRecordSumAggregateInputType = {
    id?: true
    petId?: true
    vetId?: true
  }

  export type MedicalRecordMinAggregateInputType = {
    id?: true
    petId?: true
    vetId?: true
    date?: true
    description?: true
    createAt?: true
    updateAt?: true
  }

  export type MedicalRecordMaxAggregateInputType = {
    id?: true
    petId?: true
    vetId?: true
    date?: true
    description?: true
    createAt?: true
    updateAt?: true
  }

  export type MedicalRecordCountAggregateInputType = {
    id?: true
    petId?: true
    vetId?: true
    date?: true
    description?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type MedicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecord to aggregate.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type GetMedicalRecordAggregateType<T extends MedicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecord[P]>
      : GetScalarType<T[P], AggregateMedicalRecord[P]>
  }




  export type MedicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithAggregationInput | MedicalRecordOrderByWithAggregationInput[]
    by: MedicalRecordScalarFieldEnum[] | MedicalRecordScalarFieldEnum
    having?: MedicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordCountAggregateInputType | true
    _avg?: MedicalRecordAvgAggregateInputType
    _sum?: MedicalRecordSumAggregateInputType
    _min?: MedicalRecordMinAggregateInputType
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type MedicalRecordGroupByOutputType = {
    id: number
    petId: number
    vetId: number | null
    date: Date
    description: string
    createAt: Date
    updateAt: Date
    _count: MedicalRecordCountAggregateOutputType | null
    _avg: MedicalRecordAvgAggregateOutputType | null
    _sum: MedicalRecordSumAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  type GetMedicalRecordGroupByPayload<T extends MedicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petId?: boolean
    vetId?: boolean
    date?: boolean
    description?: boolean
    createAt?: boolean
    updateAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | MedicalRecord$vetArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petId?: boolean
    vetId?: boolean
    date?: boolean
    description?: boolean
    createAt?: boolean
    updateAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | MedicalRecord$vetArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petId?: boolean
    vetId?: boolean
    date?: boolean
    description?: boolean
    createAt?: boolean
    updateAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | MedicalRecord$vetArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectScalar = {
    id?: boolean
    petId?: boolean
    vetId?: boolean
    date?: boolean
    description?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type MedicalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "petId" | "vetId" | "date" | "description" | "createAt" | "updateAt", ExtArgs["result"]["medicalRecord"]>
  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | MedicalRecord$vetArgs<ExtArgs>
  }
  export type MedicalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | MedicalRecord$vetArgs<ExtArgs>
  }
  export type MedicalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    vet?: boolean | MedicalRecord$vetArgs<ExtArgs>
  }

  export type $MedicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecord"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
      vet: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      petId: number
      vetId: number | null
      date: Date
      description: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["medicalRecord"]>
    composites: {}
  }

  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>

  type MedicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalRecordCountAggregateInputType | true
    }

  export interface MedicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecord'], meta: { name: 'MedicalRecord' } }
    /**
     * Find zero or one MedicalRecord that matches the filter.
     * @param {MedicalRecordFindUniqueArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordFindUniqueArgs>(args: SelectSubset<T, MedicalRecordFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalRecordFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordFindFirstArgs>(args?: SelectSubset<T, MedicalRecordFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalRecordFindManyArgs>(args?: SelectSubset<T, MedicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalRecord.
     * @param {MedicalRecordCreateArgs} args - Arguments to create a MedicalRecord.
     * @example
     * // Create one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.create({
     *   data: {
     *     // ... data to create a MedicalRecord
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordCreateArgs>(args: SelectSubset<T, MedicalRecordCreateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordCreateManyArgs>(args?: SelectSubset<T, MedicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalRecords and returns the data saved in the database.
     * @param {MedicalRecordCreateManyAndReturnArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalRecord.
     * @param {MedicalRecordDeleteArgs} args - Arguments to delete one MedicalRecord.
     * @example
     * // Delete one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecord
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordDeleteArgs>(args: SelectSubset<T, MedicalRecordDeleteArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalRecord.
     * @param {MedicalRecordUpdateArgs} args - Arguments to update one MedicalRecord.
     * @example
     * // Update one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordUpdateArgs>(args: SelectSubset<T, MedicalRecordUpdateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordUpdateManyArgs>(args: SelectSubset<T, MedicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords and returns the data updated in the database.
     * @param {MedicalRecordUpdateManyAndReturnArgs} args - Arguments to update many MedicalRecords.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalRecord.
     * @param {MedicalRecordUpsertArgs} args - Arguments to update or create a MedicalRecord.
     * @example
     * // Update or create a MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.upsert({
     *   create: {
     *     // ... data to create a MedicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordUpsertArgs>(args: SelectSubset<T, MedicalRecordUpsertArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecord.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordCountArgs>(
      args?: Subset<T, MedicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalRecordAggregateArgs>(args: Subset<T, MedicalRecordAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordAggregateType<T>>

    /**
     * Group by MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecord model
   */
  readonly fields: MedicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vet<T extends MedicalRecord$vetArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecord$vetArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicalRecord model
   */
  interface MedicalRecordFieldRefs {
    readonly id: FieldRef<"MedicalRecord", 'Int'>
    readonly petId: FieldRef<"MedicalRecord", 'Int'>
    readonly vetId: FieldRef<"MedicalRecord", 'Int'>
    readonly date: FieldRef<"MedicalRecord", 'DateTime'>
    readonly description: FieldRef<"MedicalRecord", 'String'>
    readonly createAt: FieldRef<"MedicalRecord", 'DateTime'>
    readonly updateAt: FieldRef<"MedicalRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecord findUnique
   */
  export type MedicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findUniqueOrThrow
   */
  export type MedicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findFirst
   */
  export type MedicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findFirstOrThrow
   */
  export type MedicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findMany
   */
  export type MedicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord create
   */
  export type MedicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecord.
     */
    data: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
  }

  /**
   * MedicalRecord createMany
   */
  export type MedicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalRecord createManyAndReturn
   */
  export type MedicalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord update
   */
  export type MedicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecord.
     */
    data: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecord to update.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord updateMany
   */
  export type MedicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
  }

  /**
   * MedicalRecord updateManyAndReturn
   */
  export type MedicalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord upsert
   */
  export type MedicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecord to update in case it exists.
     */
    where: MedicalRecordWhereUniqueInput
    /**
     * In case the MedicalRecord found by the `where` argument doesn't exist, create a new MedicalRecord with this data.
     */
    create: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
    /**
     * In case the MedicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
  }

  /**
   * MedicalRecord delete
   */
  export type MedicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecord to delete.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord deleteMany
   */
  export type MedicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to delete.
     */
    limit?: number
  }

  /**
   * MedicalRecord.vet
   */
  export type MedicalRecord$vetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
  }


  /**
   * Model Affiliate
   */

  export type AggregateAffiliate = {
    _count: AffiliateCountAggregateOutputType | null
    _avg: AffiliateAvgAggregateOutputType | null
    _sum: AffiliateSumAggregateOutputType | null
    _min: AffiliateMinAggregateOutputType | null
    _max: AffiliateMaxAggregateOutputType | null
  }

  export type AffiliateAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    earnings: number | null
  }

  export type AffiliateSumAggregateOutputType = {
    id: number | null
    userId: number | null
    earnings: number | null
  }

  export type AffiliateMinAggregateOutputType = {
    id: number | null
    userId: number | null
    code: string | null
    earnings: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AffiliateMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    code: string | null
    earnings: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AffiliateCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    earnings: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type AffiliateAvgAggregateInputType = {
    id?: true
    userId?: true
    earnings?: true
  }

  export type AffiliateSumAggregateInputType = {
    id?: true
    userId?: true
    earnings?: true
  }

  export type AffiliateMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    earnings?: true
    createAt?: true
    updateAt?: true
  }

  export type AffiliateMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    earnings?: true
    createAt?: true
    updateAt?: true
  }

  export type AffiliateCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    earnings?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type AffiliateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Affiliate to aggregate.
     */
    where?: AffiliateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliates to fetch.
     */
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AffiliateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Affiliates
    **/
    _count?: true | AffiliateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AffiliateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AffiliateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AffiliateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AffiliateMaxAggregateInputType
  }

  export type GetAffiliateAggregateType<T extends AffiliateAggregateArgs> = {
        [P in keyof T & keyof AggregateAffiliate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAffiliate[P]>
      : GetScalarType<T[P], AggregateAffiliate[P]>
  }




  export type AffiliateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateWhereInput
    orderBy?: AffiliateOrderByWithAggregationInput | AffiliateOrderByWithAggregationInput[]
    by: AffiliateScalarFieldEnum[] | AffiliateScalarFieldEnum
    having?: AffiliateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AffiliateCountAggregateInputType | true
    _avg?: AffiliateAvgAggregateInputType
    _sum?: AffiliateSumAggregateInputType
    _min?: AffiliateMinAggregateInputType
    _max?: AffiliateMaxAggregateInputType
  }

  export type AffiliateGroupByOutputType = {
    id: number
    userId: number
    code: string
    earnings: number
    createAt: Date
    updateAt: Date
    _count: AffiliateCountAggregateOutputType | null
    _avg: AffiliateAvgAggregateOutputType | null
    _sum: AffiliateSumAggregateOutputType | null
    _min: AffiliateMinAggregateOutputType | null
    _max: AffiliateMaxAggregateOutputType | null
  }

  type GetAffiliateGroupByPayload<T extends AffiliateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AffiliateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AffiliateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AffiliateGroupByOutputType[P]>
            : GetScalarType<T[P], AffiliateGroupByOutputType[P]>
        }
      >
    >


  export type AffiliateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    earnings?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    AffiliateReferral?: boolean | Affiliate$AffiliateReferralArgs<ExtArgs>
    _count?: boolean | AffiliateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["affiliate"]>

  export type AffiliateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    earnings?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["affiliate"]>

  export type AffiliateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    earnings?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["affiliate"]>

  export type AffiliateSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    earnings?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type AffiliateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "earnings" | "createAt" | "updateAt", ExtArgs["result"]["affiliate"]>
  export type AffiliateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    AffiliateReferral?: boolean | Affiliate$AffiliateReferralArgs<ExtArgs>
    _count?: boolean | AffiliateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AffiliateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AffiliateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AffiliatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Affiliate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      AffiliateReferral: Prisma.$AffiliateReferralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      code: string
      earnings: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["affiliate"]>
    composites: {}
  }

  type AffiliateGetPayload<S extends boolean | null | undefined | AffiliateDefaultArgs> = $Result.GetResult<Prisma.$AffiliatePayload, S>

  type AffiliateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AffiliateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AffiliateCountAggregateInputType | true
    }

  export interface AffiliateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Affiliate'], meta: { name: 'Affiliate' } }
    /**
     * Find zero or one Affiliate that matches the filter.
     * @param {AffiliateFindUniqueArgs} args - Arguments to find a Affiliate
     * @example
     * // Get one Affiliate
     * const affiliate = await prisma.affiliate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AffiliateFindUniqueArgs>(args: SelectSubset<T, AffiliateFindUniqueArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Affiliate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AffiliateFindUniqueOrThrowArgs} args - Arguments to find a Affiliate
     * @example
     * // Get one Affiliate
     * const affiliate = await prisma.affiliate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AffiliateFindUniqueOrThrowArgs>(args: SelectSubset<T, AffiliateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Affiliate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateFindFirstArgs} args - Arguments to find a Affiliate
     * @example
     * // Get one Affiliate
     * const affiliate = await prisma.affiliate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AffiliateFindFirstArgs>(args?: SelectSubset<T, AffiliateFindFirstArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Affiliate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateFindFirstOrThrowArgs} args - Arguments to find a Affiliate
     * @example
     * // Get one Affiliate
     * const affiliate = await prisma.affiliate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AffiliateFindFirstOrThrowArgs>(args?: SelectSubset<T, AffiliateFindFirstOrThrowArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Affiliates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Affiliates
     * const affiliates = await prisma.affiliate.findMany()
     * 
     * // Get first 10 Affiliates
     * const affiliates = await prisma.affiliate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const affiliateWithIdOnly = await prisma.affiliate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AffiliateFindManyArgs>(args?: SelectSubset<T, AffiliateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Affiliate.
     * @param {AffiliateCreateArgs} args - Arguments to create a Affiliate.
     * @example
     * // Create one Affiliate
     * const Affiliate = await prisma.affiliate.create({
     *   data: {
     *     // ... data to create a Affiliate
     *   }
     * })
     * 
     */
    create<T extends AffiliateCreateArgs>(args: SelectSubset<T, AffiliateCreateArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Affiliates.
     * @param {AffiliateCreateManyArgs} args - Arguments to create many Affiliates.
     * @example
     * // Create many Affiliates
     * const affiliate = await prisma.affiliate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AffiliateCreateManyArgs>(args?: SelectSubset<T, AffiliateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Affiliates and returns the data saved in the database.
     * @param {AffiliateCreateManyAndReturnArgs} args - Arguments to create many Affiliates.
     * @example
     * // Create many Affiliates
     * const affiliate = await prisma.affiliate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Affiliates and only return the `id`
     * const affiliateWithIdOnly = await prisma.affiliate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AffiliateCreateManyAndReturnArgs>(args?: SelectSubset<T, AffiliateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Affiliate.
     * @param {AffiliateDeleteArgs} args - Arguments to delete one Affiliate.
     * @example
     * // Delete one Affiliate
     * const Affiliate = await prisma.affiliate.delete({
     *   where: {
     *     // ... filter to delete one Affiliate
     *   }
     * })
     * 
     */
    delete<T extends AffiliateDeleteArgs>(args: SelectSubset<T, AffiliateDeleteArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Affiliate.
     * @param {AffiliateUpdateArgs} args - Arguments to update one Affiliate.
     * @example
     * // Update one Affiliate
     * const affiliate = await prisma.affiliate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AffiliateUpdateArgs>(args: SelectSubset<T, AffiliateUpdateArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Affiliates.
     * @param {AffiliateDeleteManyArgs} args - Arguments to filter Affiliates to delete.
     * @example
     * // Delete a few Affiliates
     * const { count } = await prisma.affiliate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AffiliateDeleteManyArgs>(args?: SelectSubset<T, AffiliateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Affiliates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Affiliates
     * const affiliate = await prisma.affiliate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AffiliateUpdateManyArgs>(args: SelectSubset<T, AffiliateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Affiliates and returns the data updated in the database.
     * @param {AffiliateUpdateManyAndReturnArgs} args - Arguments to update many Affiliates.
     * @example
     * // Update many Affiliates
     * const affiliate = await prisma.affiliate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Affiliates and only return the `id`
     * const affiliateWithIdOnly = await prisma.affiliate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AffiliateUpdateManyAndReturnArgs>(args: SelectSubset<T, AffiliateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Affiliate.
     * @param {AffiliateUpsertArgs} args - Arguments to update or create a Affiliate.
     * @example
     * // Update or create a Affiliate
     * const affiliate = await prisma.affiliate.upsert({
     *   create: {
     *     // ... data to create a Affiliate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Affiliate we want to update
     *   }
     * })
     */
    upsert<T extends AffiliateUpsertArgs>(args: SelectSubset<T, AffiliateUpsertArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Affiliates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateCountArgs} args - Arguments to filter Affiliates to count.
     * @example
     * // Count the number of Affiliates
     * const count = await prisma.affiliate.count({
     *   where: {
     *     // ... the filter for the Affiliates we want to count
     *   }
     * })
    **/
    count<T extends AffiliateCountArgs>(
      args?: Subset<T, AffiliateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AffiliateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Affiliate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AffiliateAggregateArgs>(args: Subset<T, AffiliateAggregateArgs>): Prisma.PrismaPromise<GetAffiliateAggregateType<T>>

    /**
     * Group by Affiliate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AffiliateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AffiliateGroupByArgs['orderBy'] }
        : { orderBy?: AffiliateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AffiliateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffiliateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Affiliate model
   */
  readonly fields: AffiliateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Affiliate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AffiliateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AffiliateReferral<T extends Affiliate$AffiliateReferralArgs<ExtArgs> = {}>(args?: Subset<T, Affiliate$AffiliateReferralArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Affiliate model
   */
  interface AffiliateFieldRefs {
    readonly id: FieldRef<"Affiliate", 'Int'>
    readonly userId: FieldRef<"Affiliate", 'Int'>
    readonly code: FieldRef<"Affiliate", 'String'>
    readonly earnings: FieldRef<"Affiliate", 'Float'>
    readonly createAt: FieldRef<"Affiliate", 'DateTime'>
    readonly updateAt: FieldRef<"Affiliate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Affiliate findUnique
   */
  export type AffiliateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliate to fetch.
     */
    where: AffiliateWhereUniqueInput
  }

  /**
   * Affiliate findUniqueOrThrow
   */
  export type AffiliateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliate to fetch.
     */
    where: AffiliateWhereUniqueInput
  }

  /**
   * Affiliate findFirst
   */
  export type AffiliateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliate to fetch.
     */
    where?: AffiliateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliates to fetch.
     */
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Affiliates.
     */
    cursor?: AffiliateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Affiliates.
     */
    distinct?: AffiliateScalarFieldEnum | AffiliateScalarFieldEnum[]
  }

  /**
   * Affiliate findFirstOrThrow
   */
  export type AffiliateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliate to fetch.
     */
    where?: AffiliateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliates to fetch.
     */
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Affiliates.
     */
    cursor?: AffiliateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Affiliates.
     */
    distinct?: AffiliateScalarFieldEnum | AffiliateScalarFieldEnum[]
  }

  /**
   * Affiliate findMany
   */
  export type AffiliateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliates to fetch.
     */
    where?: AffiliateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliates to fetch.
     */
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Affiliates.
     */
    cursor?: AffiliateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliates.
     */
    skip?: number
    distinct?: AffiliateScalarFieldEnum | AffiliateScalarFieldEnum[]
  }

  /**
   * Affiliate create
   */
  export type AffiliateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * The data needed to create a Affiliate.
     */
    data: XOR<AffiliateCreateInput, AffiliateUncheckedCreateInput>
  }

  /**
   * Affiliate createMany
   */
  export type AffiliateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Affiliates.
     */
    data: AffiliateCreateManyInput | AffiliateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Affiliate createManyAndReturn
   */
  export type AffiliateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * The data used to create many Affiliates.
     */
    data: AffiliateCreateManyInput | AffiliateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Affiliate update
   */
  export type AffiliateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * The data needed to update a Affiliate.
     */
    data: XOR<AffiliateUpdateInput, AffiliateUncheckedUpdateInput>
    /**
     * Choose, which Affiliate to update.
     */
    where: AffiliateWhereUniqueInput
  }

  /**
   * Affiliate updateMany
   */
  export type AffiliateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Affiliates.
     */
    data: XOR<AffiliateUpdateManyMutationInput, AffiliateUncheckedUpdateManyInput>
    /**
     * Filter which Affiliates to update
     */
    where?: AffiliateWhereInput
    /**
     * Limit how many Affiliates to update.
     */
    limit?: number
  }

  /**
   * Affiliate updateManyAndReturn
   */
  export type AffiliateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * The data used to update Affiliates.
     */
    data: XOR<AffiliateUpdateManyMutationInput, AffiliateUncheckedUpdateManyInput>
    /**
     * Filter which Affiliates to update
     */
    where?: AffiliateWhereInput
    /**
     * Limit how many Affiliates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Affiliate upsert
   */
  export type AffiliateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * The filter to search for the Affiliate to update in case it exists.
     */
    where: AffiliateWhereUniqueInput
    /**
     * In case the Affiliate found by the `where` argument doesn't exist, create a new Affiliate with this data.
     */
    create: XOR<AffiliateCreateInput, AffiliateUncheckedCreateInput>
    /**
     * In case the Affiliate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AffiliateUpdateInput, AffiliateUncheckedUpdateInput>
  }

  /**
   * Affiliate delete
   */
  export type AffiliateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter which Affiliate to delete.
     */
    where: AffiliateWhereUniqueInput
  }

  /**
   * Affiliate deleteMany
   */
  export type AffiliateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Affiliates to delete
     */
    where?: AffiliateWhereInput
    /**
     * Limit how many Affiliates to delete.
     */
    limit?: number
  }

  /**
   * Affiliate.AffiliateReferral
   */
  export type Affiliate$AffiliateReferralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    where?: AffiliateReferralWhereInput
    orderBy?: AffiliateReferralOrderByWithRelationInput | AffiliateReferralOrderByWithRelationInput[]
    cursor?: AffiliateReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AffiliateReferralScalarFieldEnum | AffiliateReferralScalarFieldEnum[]
  }

  /**
   * Affiliate without action
   */
  export type AffiliateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
  }


  /**
   * Model AffiliateReferral
   */

  export type AggregateAffiliateReferral = {
    _count: AffiliateReferralCountAggregateOutputType | null
    _avg: AffiliateReferralAvgAggregateOutputType | null
    _sum: AffiliateReferralSumAggregateOutputType | null
    _min: AffiliateReferralMinAggregateOutputType | null
    _max: AffiliateReferralMaxAggregateOutputType | null
  }

  export type AffiliateReferralAvgAggregateOutputType = {
    id: number | null
    affiliateId: number | null
    referredUserId: number | null
    value: number | null
  }

  export type AffiliateReferralSumAggregateOutputType = {
    id: number | null
    affiliateId: number | null
    referredUserId: number | null
    value: number | null
  }

  export type AffiliateReferralMinAggregateOutputType = {
    id: number | null
    affiliateId: number | null
    referredUserId: number | null
    type: $Enums.ReferralType | null
    value: number | null
    status: $Enums.ReferralStatus | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AffiliateReferralMaxAggregateOutputType = {
    id: number | null
    affiliateId: number | null
    referredUserId: number | null
    type: $Enums.ReferralType | null
    value: number | null
    status: $Enums.ReferralStatus | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AffiliateReferralCountAggregateOutputType = {
    id: number
    affiliateId: number
    referredUserId: number
    type: number
    value: number
    status: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type AffiliateReferralAvgAggregateInputType = {
    id?: true
    affiliateId?: true
    referredUserId?: true
    value?: true
  }

  export type AffiliateReferralSumAggregateInputType = {
    id?: true
    affiliateId?: true
    referredUserId?: true
    value?: true
  }

  export type AffiliateReferralMinAggregateInputType = {
    id?: true
    affiliateId?: true
    referredUserId?: true
    type?: true
    value?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type AffiliateReferralMaxAggregateInputType = {
    id?: true
    affiliateId?: true
    referredUserId?: true
    type?: true
    value?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type AffiliateReferralCountAggregateInputType = {
    id?: true
    affiliateId?: true
    referredUserId?: true
    type?: true
    value?: true
    status?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type AffiliateReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AffiliateReferral to aggregate.
     */
    where?: AffiliateReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateReferrals to fetch.
     */
    orderBy?: AffiliateReferralOrderByWithRelationInput | AffiliateReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AffiliateReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateReferrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateReferrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AffiliateReferrals
    **/
    _count?: true | AffiliateReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AffiliateReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AffiliateReferralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AffiliateReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AffiliateReferralMaxAggregateInputType
  }

  export type GetAffiliateReferralAggregateType<T extends AffiliateReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateAffiliateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAffiliateReferral[P]>
      : GetScalarType<T[P], AggregateAffiliateReferral[P]>
  }




  export type AffiliateReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateReferralWhereInput
    orderBy?: AffiliateReferralOrderByWithAggregationInput | AffiliateReferralOrderByWithAggregationInput[]
    by: AffiliateReferralScalarFieldEnum[] | AffiliateReferralScalarFieldEnum
    having?: AffiliateReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AffiliateReferralCountAggregateInputType | true
    _avg?: AffiliateReferralAvgAggregateInputType
    _sum?: AffiliateReferralSumAggregateInputType
    _min?: AffiliateReferralMinAggregateInputType
    _max?: AffiliateReferralMaxAggregateInputType
  }

  export type AffiliateReferralGroupByOutputType = {
    id: number
    affiliateId: number
    referredUserId: number | null
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt: Date
    updateAt: Date
    _count: AffiliateReferralCountAggregateOutputType | null
    _avg: AffiliateReferralAvgAggregateOutputType | null
    _sum: AffiliateReferralSumAggregateOutputType | null
    _min: AffiliateReferralMinAggregateOutputType | null
    _max: AffiliateReferralMaxAggregateOutputType | null
  }

  type GetAffiliateReferralGroupByPayload<T extends AffiliateReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AffiliateReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AffiliateReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AffiliateReferralGroupByOutputType[P]>
            : GetScalarType<T[P], AffiliateReferralGroupByOutputType[P]>
        }
      >
    >


  export type AffiliateReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    affiliateId?: boolean
    referredUserId?: boolean
    type?: boolean
    value?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
    referredUser?: boolean | AffiliateReferral$referredUserArgs<ExtArgs>
  }, ExtArgs["result"]["affiliateReferral"]>

  export type AffiliateReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    affiliateId?: boolean
    referredUserId?: boolean
    type?: boolean
    value?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
    referredUser?: boolean | AffiliateReferral$referredUserArgs<ExtArgs>
  }, ExtArgs["result"]["affiliateReferral"]>

  export type AffiliateReferralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    affiliateId?: boolean
    referredUserId?: boolean
    type?: boolean
    value?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
    referredUser?: boolean | AffiliateReferral$referredUserArgs<ExtArgs>
  }, ExtArgs["result"]["affiliateReferral"]>

  export type AffiliateReferralSelectScalar = {
    id?: boolean
    affiliateId?: boolean
    referredUserId?: boolean
    type?: boolean
    value?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type AffiliateReferralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "affiliateId" | "referredUserId" | "type" | "value" | "status" | "createAt" | "updateAt", ExtArgs["result"]["affiliateReferral"]>
  export type AffiliateReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
    referredUser?: boolean | AffiliateReferral$referredUserArgs<ExtArgs>
  }
  export type AffiliateReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
    referredUser?: boolean | AffiliateReferral$referredUserArgs<ExtArgs>
  }
  export type AffiliateReferralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
    referredUser?: boolean | AffiliateReferral$referredUserArgs<ExtArgs>
  }

  export type $AffiliateReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AffiliateReferral"
    objects: {
      affiliate: Prisma.$AffiliatePayload<ExtArgs>
      referredUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      affiliateId: number
      referredUserId: number | null
      type: $Enums.ReferralType
      value: number
      status: $Enums.ReferralStatus
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["affiliateReferral"]>
    composites: {}
  }

  type AffiliateReferralGetPayload<S extends boolean | null | undefined | AffiliateReferralDefaultArgs> = $Result.GetResult<Prisma.$AffiliateReferralPayload, S>

  type AffiliateReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AffiliateReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AffiliateReferralCountAggregateInputType | true
    }

  export interface AffiliateReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AffiliateReferral'], meta: { name: 'AffiliateReferral' } }
    /**
     * Find zero or one AffiliateReferral that matches the filter.
     * @param {AffiliateReferralFindUniqueArgs} args - Arguments to find a AffiliateReferral
     * @example
     * // Get one AffiliateReferral
     * const affiliateReferral = await prisma.affiliateReferral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AffiliateReferralFindUniqueArgs>(args: SelectSubset<T, AffiliateReferralFindUniqueArgs<ExtArgs>>): Prisma__AffiliateReferralClient<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AffiliateReferral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AffiliateReferralFindUniqueOrThrowArgs} args - Arguments to find a AffiliateReferral
     * @example
     * // Get one AffiliateReferral
     * const affiliateReferral = await prisma.affiliateReferral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AffiliateReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, AffiliateReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AffiliateReferralClient<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AffiliateReferral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateReferralFindFirstArgs} args - Arguments to find a AffiliateReferral
     * @example
     * // Get one AffiliateReferral
     * const affiliateReferral = await prisma.affiliateReferral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AffiliateReferralFindFirstArgs>(args?: SelectSubset<T, AffiliateReferralFindFirstArgs<ExtArgs>>): Prisma__AffiliateReferralClient<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AffiliateReferral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateReferralFindFirstOrThrowArgs} args - Arguments to find a AffiliateReferral
     * @example
     * // Get one AffiliateReferral
     * const affiliateReferral = await prisma.affiliateReferral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AffiliateReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, AffiliateReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__AffiliateReferralClient<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AffiliateReferrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AffiliateReferrals
     * const affiliateReferrals = await prisma.affiliateReferral.findMany()
     * 
     * // Get first 10 AffiliateReferrals
     * const affiliateReferrals = await prisma.affiliateReferral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const affiliateReferralWithIdOnly = await prisma.affiliateReferral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AffiliateReferralFindManyArgs>(args?: SelectSubset<T, AffiliateReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AffiliateReferral.
     * @param {AffiliateReferralCreateArgs} args - Arguments to create a AffiliateReferral.
     * @example
     * // Create one AffiliateReferral
     * const AffiliateReferral = await prisma.affiliateReferral.create({
     *   data: {
     *     // ... data to create a AffiliateReferral
     *   }
     * })
     * 
     */
    create<T extends AffiliateReferralCreateArgs>(args: SelectSubset<T, AffiliateReferralCreateArgs<ExtArgs>>): Prisma__AffiliateReferralClient<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AffiliateReferrals.
     * @param {AffiliateReferralCreateManyArgs} args - Arguments to create many AffiliateReferrals.
     * @example
     * // Create many AffiliateReferrals
     * const affiliateReferral = await prisma.affiliateReferral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AffiliateReferralCreateManyArgs>(args?: SelectSubset<T, AffiliateReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AffiliateReferrals and returns the data saved in the database.
     * @param {AffiliateReferralCreateManyAndReturnArgs} args - Arguments to create many AffiliateReferrals.
     * @example
     * // Create many AffiliateReferrals
     * const affiliateReferral = await prisma.affiliateReferral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AffiliateReferrals and only return the `id`
     * const affiliateReferralWithIdOnly = await prisma.affiliateReferral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AffiliateReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, AffiliateReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AffiliateReferral.
     * @param {AffiliateReferralDeleteArgs} args - Arguments to delete one AffiliateReferral.
     * @example
     * // Delete one AffiliateReferral
     * const AffiliateReferral = await prisma.affiliateReferral.delete({
     *   where: {
     *     // ... filter to delete one AffiliateReferral
     *   }
     * })
     * 
     */
    delete<T extends AffiliateReferralDeleteArgs>(args: SelectSubset<T, AffiliateReferralDeleteArgs<ExtArgs>>): Prisma__AffiliateReferralClient<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AffiliateReferral.
     * @param {AffiliateReferralUpdateArgs} args - Arguments to update one AffiliateReferral.
     * @example
     * // Update one AffiliateReferral
     * const affiliateReferral = await prisma.affiliateReferral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AffiliateReferralUpdateArgs>(args: SelectSubset<T, AffiliateReferralUpdateArgs<ExtArgs>>): Prisma__AffiliateReferralClient<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AffiliateReferrals.
     * @param {AffiliateReferralDeleteManyArgs} args - Arguments to filter AffiliateReferrals to delete.
     * @example
     * // Delete a few AffiliateReferrals
     * const { count } = await prisma.affiliateReferral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AffiliateReferralDeleteManyArgs>(args?: SelectSubset<T, AffiliateReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AffiliateReferrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AffiliateReferrals
     * const affiliateReferral = await prisma.affiliateReferral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AffiliateReferralUpdateManyArgs>(args: SelectSubset<T, AffiliateReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AffiliateReferrals and returns the data updated in the database.
     * @param {AffiliateReferralUpdateManyAndReturnArgs} args - Arguments to update many AffiliateReferrals.
     * @example
     * // Update many AffiliateReferrals
     * const affiliateReferral = await prisma.affiliateReferral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AffiliateReferrals and only return the `id`
     * const affiliateReferralWithIdOnly = await prisma.affiliateReferral.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AffiliateReferralUpdateManyAndReturnArgs>(args: SelectSubset<T, AffiliateReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AffiliateReferral.
     * @param {AffiliateReferralUpsertArgs} args - Arguments to update or create a AffiliateReferral.
     * @example
     * // Update or create a AffiliateReferral
     * const affiliateReferral = await prisma.affiliateReferral.upsert({
     *   create: {
     *     // ... data to create a AffiliateReferral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AffiliateReferral we want to update
     *   }
     * })
     */
    upsert<T extends AffiliateReferralUpsertArgs>(args: SelectSubset<T, AffiliateReferralUpsertArgs<ExtArgs>>): Prisma__AffiliateReferralClient<$Result.GetResult<Prisma.$AffiliateReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AffiliateReferrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateReferralCountArgs} args - Arguments to filter AffiliateReferrals to count.
     * @example
     * // Count the number of AffiliateReferrals
     * const count = await prisma.affiliateReferral.count({
     *   where: {
     *     // ... the filter for the AffiliateReferrals we want to count
     *   }
     * })
    **/
    count<T extends AffiliateReferralCountArgs>(
      args?: Subset<T, AffiliateReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AffiliateReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AffiliateReferral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AffiliateReferralAggregateArgs>(args: Subset<T, AffiliateReferralAggregateArgs>): Prisma.PrismaPromise<GetAffiliateReferralAggregateType<T>>

    /**
     * Group by AffiliateReferral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateReferralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AffiliateReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AffiliateReferralGroupByArgs['orderBy'] }
        : { orderBy?: AffiliateReferralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AffiliateReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffiliateReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AffiliateReferral model
   */
  readonly fields: AffiliateReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AffiliateReferral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AffiliateReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    affiliate<T extends AffiliateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AffiliateDefaultArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referredUser<T extends AffiliateReferral$referredUserArgs<ExtArgs> = {}>(args?: Subset<T, AffiliateReferral$referredUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AffiliateReferral model
   */
  interface AffiliateReferralFieldRefs {
    readonly id: FieldRef<"AffiliateReferral", 'Int'>
    readonly affiliateId: FieldRef<"AffiliateReferral", 'Int'>
    readonly referredUserId: FieldRef<"AffiliateReferral", 'Int'>
    readonly type: FieldRef<"AffiliateReferral", 'ReferralType'>
    readonly value: FieldRef<"AffiliateReferral", 'Float'>
    readonly status: FieldRef<"AffiliateReferral", 'ReferralStatus'>
    readonly createAt: FieldRef<"AffiliateReferral", 'DateTime'>
    readonly updateAt: FieldRef<"AffiliateReferral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AffiliateReferral findUnique
   */
  export type AffiliateReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateReferral to fetch.
     */
    where: AffiliateReferralWhereUniqueInput
  }

  /**
   * AffiliateReferral findUniqueOrThrow
   */
  export type AffiliateReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateReferral to fetch.
     */
    where: AffiliateReferralWhereUniqueInput
  }

  /**
   * AffiliateReferral findFirst
   */
  export type AffiliateReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateReferral to fetch.
     */
    where?: AffiliateReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateReferrals to fetch.
     */
    orderBy?: AffiliateReferralOrderByWithRelationInput | AffiliateReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AffiliateReferrals.
     */
    cursor?: AffiliateReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateReferrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateReferrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AffiliateReferrals.
     */
    distinct?: AffiliateReferralScalarFieldEnum | AffiliateReferralScalarFieldEnum[]
  }

  /**
   * AffiliateReferral findFirstOrThrow
   */
  export type AffiliateReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateReferral to fetch.
     */
    where?: AffiliateReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateReferrals to fetch.
     */
    orderBy?: AffiliateReferralOrderByWithRelationInput | AffiliateReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AffiliateReferrals.
     */
    cursor?: AffiliateReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateReferrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateReferrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AffiliateReferrals.
     */
    distinct?: AffiliateReferralScalarFieldEnum | AffiliateReferralScalarFieldEnum[]
  }

  /**
   * AffiliateReferral findMany
   */
  export type AffiliateReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateReferrals to fetch.
     */
    where?: AffiliateReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateReferrals to fetch.
     */
    orderBy?: AffiliateReferralOrderByWithRelationInput | AffiliateReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AffiliateReferrals.
     */
    cursor?: AffiliateReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateReferrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateReferrals.
     */
    skip?: number
    distinct?: AffiliateReferralScalarFieldEnum | AffiliateReferralScalarFieldEnum[]
  }

  /**
   * AffiliateReferral create
   */
  export type AffiliateReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a AffiliateReferral.
     */
    data: XOR<AffiliateReferralCreateInput, AffiliateReferralUncheckedCreateInput>
  }

  /**
   * AffiliateReferral createMany
   */
  export type AffiliateReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AffiliateReferrals.
     */
    data: AffiliateReferralCreateManyInput | AffiliateReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AffiliateReferral createManyAndReturn
   */
  export type AffiliateReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * The data used to create many AffiliateReferrals.
     */
    data: AffiliateReferralCreateManyInput | AffiliateReferralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AffiliateReferral update
   */
  export type AffiliateReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a AffiliateReferral.
     */
    data: XOR<AffiliateReferralUpdateInput, AffiliateReferralUncheckedUpdateInput>
    /**
     * Choose, which AffiliateReferral to update.
     */
    where: AffiliateReferralWhereUniqueInput
  }

  /**
   * AffiliateReferral updateMany
   */
  export type AffiliateReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AffiliateReferrals.
     */
    data: XOR<AffiliateReferralUpdateManyMutationInput, AffiliateReferralUncheckedUpdateManyInput>
    /**
     * Filter which AffiliateReferrals to update
     */
    where?: AffiliateReferralWhereInput
    /**
     * Limit how many AffiliateReferrals to update.
     */
    limit?: number
  }

  /**
   * AffiliateReferral updateManyAndReturn
   */
  export type AffiliateReferralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * The data used to update AffiliateReferrals.
     */
    data: XOR<AffiliateReferralUpdateManyMutationInput, AffiliateReferralUncheckedUpdateManyInput>
    /**
     * Filter which AffiliateReferrals to update
     */
    where?: AffiliateReferralWhereInput
    /**
     * Limit how many AffiliateReferrals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AffiliateReferral upsert
   */
  export type AffiliateReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the AffiliateReferral to update in case it exists.
     */
    where: AffiliateReferralWhereUniqueInput
    /**
     * In case the AffiliateReferral found by the `where` argument doesn't exist, create a new AffiliateReferral with this data.
     */
    create: XOR<AffiliateReferralCreateInput, AffiliateReferralUncheckedCreateInput>
    /**
     * In case the AffiliateReferral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AffiliateReferralUpdateInput, AffiliateReferralUncheckedUpdateInput>
  }

  /**
   * AffiliateReferral delete
   */
  export type AffiliateReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
    /**
     * Filter which AffiliateReferral to delete.
     */
    where: AffiliateReferralWhereUniqueInput
  }

  /**
   * AffiliateReferral deleteMany
   */
  export type AffiliateReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AffiliateReferrals to delete
     */
    where?: AffiliateReferralWhereInput
    /**
     * Limit how many AffiliateReferrals to delete.
     */
    limit?: number
  }

  /**
   * AffiliateReferral.referredUser
   */
  export type AffiliateReferral$referredUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AffiliateReferral without action
   */
  export type AffiliateReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateReferral
     */
    select?: AffiliateReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AffiliateReferral
     */
    omit?: AffiliateReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateReferralInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    businessId: 'businessId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    businessId: 'businessId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    species: 'species',
    breed: 'breed',
    birthDate: 'birthDate',
    clientId: 'clientId',
    nextVaccineDate: 'nextVaccineDate',
    lastFedAt: 'lastFedAt',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    petId: 'petId',
    serviceId: 'serviceId',
    businessId: 'businessId',
    notes: 'notes',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    duration: 'duration',
    businessId: 'businessId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    stock: 'stock',
    businessId: 'businessId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    businessId: 'businessId',
    total: 'total',
    dateSale: 'dateSale',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleItemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum]


  export const MedicalRecordScalarFieldEnum: {
    id: 'id',
    petId: 'petId',
    vetId: 'vetId',
    date: 'date',
    description: 'description',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type MedicalRecordScalarFieldEnum = (typeof MedicalRecordScalarFieldEnum)[keyof typeof MedicalRecordScalarFieldEnum]


  export const AffiliateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    earnings: 'earnings',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type AffiliateScalarFieldEnum = (typeof AffiliateScalarFieldEnum)[keyof typeof AffiliateScalarFieldEnum]


  export const AffiliateReferralScalarFieldEnum: {
    id: 'id',
    affiliateId: 'affiliateId',
    referredUserId: 'referredUserId',
    type: 'type',
    value: 'value',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type AffiliateReferralScalarFieldEnum = (typeof AffiliateReferralScalarFieldEnum)[keyof typeof AffiliateReferralScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ReferralType'
   */
  export type EnumReferralTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralType'>
    


  /**
   * Reference to a field of type 'ReferralType[]'
   */
  export type ListEnumReferralTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralType[]'>
    


  /**
   * Reference to a field of type 'ReferralStatus'
   */
  export type EnumReferralStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralStatus'>
    


  /**
   * Reference to a field of type 'ReferralStatus[]'
   */
  export type ListEnumReferralStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    businessId?: IntNullableFilter<"User"> | number | null
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    Affiliate?: AffiliateListRelationFilter
    MedicalRecord?: MedicalRecordListRelationFilter
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    AffiliateReferral?: AffiliateReferralListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    businessId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Affiliate?: AffiliateOrderByRelationAggregateInput
    MedicalRecord?: MedicalRecordOrderByRelationAggregateInput
    business?: BusinessOrderByWithRelationInput
    AffiliateReferral?: AffiliateReferralOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    businessId?: IntNullableFilter<"User"> | number | null
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    Affiliate?: AffiliateListRelationFilter
    MedicalRecord?: MedicalRecordListRelationFilter
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    AffiliateReferral?: AffiliateReferralListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    businessId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    businessId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: IntFilter<"Business"> | number
    name?: StringFilter<"Business"> | string
    address?: StringFilter<"Business"> | string
    phone?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    createAt?: DateTimeFilter<"Business"> | Date | string
    updateAt?: DateTimeFilter<"Business"> | Date | string
    appointments?: AppointmentListRelationFilter
    clients?: ClientListRelationFilter
    products?: ProductListRelationFilter
    sales?: SaleListRelationFilter
    services?: ServiceListRelationFilter
    users?: UserListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    address?: StringFilter<"Business"> | string
    phone?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    createAt?: DateTimeFilter<"Business"> | Date | string
    updateAt?: DateTimeFilter<"Business"> | Date | string
    appointments?: AppointmentListRelationFilter
    clients?: ClientListRelationFilter
    products?: ProductListRelationFilter
    sales?: SaleListRelationFilter
    services?: ServiceListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _avg?: BusinessAvgOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
    _sum?: BusinessSumOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Business"> | number
    name?: StringWithAggregatesFilter<"Business"> | string
    address?: StringWithAggregatesFilter<"Business"> | string
    phone?: StringWithAggregatesFilter<"Business"> | string
    email?: StringWithAggregatesFilter<"Business"> | string
    createAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    businessId?: IntFilter<"Client"> | number
    createAt?: DateTimeFilter<"Client"> | Date | string
    updateAt?: DateTimeFilter<"Client"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    pets?: PetListRelationFilter
    Sale?: SaleListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    pets?: PetOrderByRelationAggregateInput
    Sale?: SaleOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    businessId?: IntFilter<"Client"> | number
    createAt?: DateTimeFilter<"Client"> | Date | string
    updateAt?: DateTimeFilter<"Client"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    pets?: PetListRelationFilter
    Sale?: SaleListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    businessId?: IntWithAggregatesFilter<"Client"> | number
    createAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    clientId?: IntFilter<"Pet"> | number
    nextVaccineDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    lastFedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createAt?: DateTimeFilter<"Pet"> | Date | string
    updateAt?: DateTimeFilter<"Pet"> | Date | string
    appointments?: AppointmentListRelationFilter
    records?: MedicalRecordListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    clientId?: SortOrder
    nextVaccineDate?: SortOrderInput | SortOrder
    lastFedAt?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    records?: MedicalRecordOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    clientId?: IntFilter<"Pet"> | number
    nextVaccineDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    lastFedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createAt?: DateTimeFilter<"Pet"> | Date | string
    updateAt?: DateTimeFilter<"Pet"> | Date | string
    appointments?: AppointmentListRelationFilter
    records?: MedicalRecordListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    clientId?: SortOrder
    nextVaccineDate?: SortOrderInput | SortOrder
    lastFedAt?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pet"> | number
    name?: StringWithAggregatesFilter<"Pet"> | string
    species?: StringWithAggregatesFilter<"Pet"> | string
    breed?: StringWithAggregatesFilter<"Pet"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    clientId?: IntWithAggregatesFilter<"Pet"> | number
    nextVaccineDate?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    lastFedAt?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    createAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    petId?: IntFilter<"Appointment"> | number
    serviceId?: IntNullableFilter<"Appointment"> | number | null
    businessId?: IntFilter<"Appointment"> | number
    notes?: StringNullableFilter<"Appointment"> | string | null
    createAt?: DateTimeFilter<"Appointment"> | Date | string
    updateAt?: DateTimeFilter<"Appointment"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    petId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    businessId?: SortOrder
    notes?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    pet?: PetOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    petId?: IntFilter<"Appointment"> | number
    serviceId?: IntNullableFilter<"Appointment"> | number | null
    businessId?: IntFilter<"Appointment"> | number
    notes?: StringNullableFilter<"Appointment"> | string | null
    createAt?: DateTimeFilter<"Appointment"> | Date | string
    updateAt?: DateTimeFilter<"Appointment"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    petId?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    businessId?: SortOrder
    notes?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    petId?: IntWithAggregatesFilter<"Appointment"> | number
    serviceId?: IntNullableWithAggregatesFilter<"Appointment"> | number | null
    businessId?: IntWithAggregatesFilter<"Appointment"> | number
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    duration?: IntFilter<"Service"> | number
    businessId?: IntFilter<"Service"> | number
    createAt?: DateTimeFilter<"Service"> | Date | string
    updateAt?: DateTimeFilter<"Service"> | Date | string
    Appointment?: AppointmentListRelationFilter
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Appointment?: AppointmentOrderByRelationAggregateInput
    business?: BusinessOrderByWithRelationInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    duration?: IntFilter<"Service"> | number
    businessId?: IntFilter<"Service"> | number
    createAt?: DateTimeFilter<"Service"> | Date | string
    updateAt?: DateTimeFilter<"Service"> | Date | string
    Appointment?: AppointmentListRelationFilter
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    price?: FloatWithAggregatesFilter<"Service"> | number
    duration?: IntWithAggregatesFilter<"Service"> | number
    businessId?: IntWithAggregatesFilter<"Service"> | number
    createAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    businessId?: IntFilter<"Product"> | number
    createAt?: DateTimeFilter<"Product"> | Date | string
    updateAt?: DateTimeFilter<"Product"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    SaleItem?: SaleItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    SaleItem?: SaleItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    businessId?: IntFilter<"Product"> | number
    createAt?: DateTimeFilter<"Product"> | Date | string
    updateAt?: DateTimeFilter<"Product"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    SaleItem?: SaleItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    stock?: IntWithAggregatesFilter<"Product"> | number
    businessId?: IntWithAggregatesFilter<"Product"> | number
    createAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: IntFilter<"Sale"> | number
    clientId?: IntNullableFilter<"Sale"> | number | null
    businessId?: IntFilter<"Sale"> | number
    total?: FloatFilter<"Sale"> | number
    dateSale?: DateTimeFilter<"Sale"> | Date | string
    createAt?: DateTimeFilter<"Sale"> | Date | string
    updateAt?: DateTimeFilter<"Sale"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    items?: SaleItemListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    businessId?: SortOrder
    total?: SortOrder
    dateSale?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    items?: SaleItemOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    clientId?: IntNullableFilter<"Sale"> | number | null
    businessId?: IntFilter<"Sale"> | number
    total?: FloatFilter<"Sale"> | number
    dateSale?: DateTimeFilter<"Sale"> | Date | string
    createAt?: DateTimeFilter<"Sale"> | Date | string
    updateAt?: DateTimeFilter<"Sale"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    items?: SaleItemListRelationFilter
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    businessId?: SortOrder
    total?: SortOrder
    dateSale?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sale"> | number
    clientId?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    businessId?: IntWithAggregatesFilter<"Sale"> | number
    total?: FloatWithAggregatesFilter<"Sale"> | number
    dateSale?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    createAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type SaleItemWhereInput = {
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    id?: IntFilter<"SaleItem"> | number
    saleId?: IntFilter<"SaleItem"> | number
    productId?: IntFilter<"SaleItem"> | number
    quantity?: IntFilter<"SaleItem"> | number
    price?: FloatFilter<"SaleItem"> | number
    createAt?: DateTimeFilter<"SaleItem"> | Date | string
    updateAt?: DateTimeFilter<"SaleItem"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
  }

  export type SaleItemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    sale?: SaleOrderByWithRelationInput
  }

  export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    saleId?: IntFilter<"SaleItem"> | number
    productId?: IntFilter<"SaleItem"> | number
    quantity?: IntFilter<"SaleItem"> | number
    price?: FloatFilter<"SaleItem"> | number
    createAt?: DateTimeFilter<"SaleItem"> | Date | string
    updateAt?: DateTimeFilter<"SaleItem"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
  }, "id">

  export type SaleItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: SaleItemCountOrderByAggregateInput
    _avg?: SaleItemAvgOrderByAggregateInput
    _max?: SaleItemMaxOrderByAggregateInput
    _min?: SaleItemMinOrderByAggregateInput
    _sum?: SaleItemSumOrderByAggregateInput
  }

  export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    OR?: SaleItemScalarWhereWithAggregatesInput[]
    NOT?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SaleItem"> | number
    saleId?: IntWithAggregatesFilter<"SaleItem"> | number
    productId?: IntWithAggregatesFilter<"SaleItem"> | number
    quantity?: IntWithAggregatesFilter<"SaleItem"> | number
    price?: FloatWithAggregatesFilter<"SaleItem"> | number
    createAt?: DateTimeWithAggregatesFilter<"SaleItem"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"SaleItem"> | Date | string
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    id?: IntFilter<"MedicalRecord"> | number
    petId?: IntFilter<"MedicalRecord"> | number
    vetId?: IntNullableFilter<"MedicalRecord"> | number | null
    date?: DateTimeFilter<"MedicalRecord"> | Date | string
    description?: StringFilter<"MedicalRecord"> | string
    createAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updateAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    vet?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MedicalRecordOrderByWithRelationInput = {
    id?: SortOrder
    petId?: SortOrder
    vetId?: SortOrderInput | SortOrder
    date?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    pet?: PetOrderByWithRelationInput
    vet?: UserOrderByWithRelationInput
  }

  export type MedicalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    petId?: IntFilter<"MedicalRecord"> | number
    vetId?: IntNullableFilter<"MedicalRecord"> | number | null
    date?: DateTimeFilter<"MedicalRecord"> | Date | string
    description?: StringFilter<"MedicalRecord"> | string
    createAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updateAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    vet?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MedicalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    petId?: SortOrder
    vetId?: SortOrderInput | SortOrder
    date?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: MedicalRecordCountOrderByAggregateInput
    _avg?: MedicalRecordAvgOrderByAggregateInput
    _max?: MedicalRecordMaxOrderByAggregateInput
    _min?: MedicalRecordMinOrderByAggregateInput
    _sum?: MedicalRecordSumOrderByAggregateInput
  }

  export type MedicalRecordScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalRecord"> | number
    petId?: IntWithAggregatesFilter<"MedicalRecord"> | number
    vetId?: IntNullableWithAggregatesFilter<"MedicalRecord"> | number | null
    date?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
    description?: StringWithAggregatesFilter<"MedicalRecord"> | string
    createAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
  }

  export type AffiliateWhereInput = {
    AND?: AffiliateWhereInput | AffiliateWhereInput[]
    OR?: AffiliateWhereInput[]
    NOT?: AffiliateWhereInput | AffiliateWhereInput[]
    id?: IntFilter<"Affiliate"> | number
    userId?: IntFilter<"Affiliate"> | number
    code?: StringFilter<"Affiliate"> | string
    earnings?: FloatFilter<"Affiliate"> | number
    createAt?: DateTimeFilter<"Affiliate"> | Date | string
    updateAt?: DateTimeFilter<"Affiliate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    AffiliateReferral?: AffiliateReferralListRelationFilter
  }

  export type AffiliateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    earnings?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
    AffiliateReferral?: AffiliateReferralOrderByRelationAggregateInput
  }

  export type AffiliateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: AffiliateWhereInput | AffiliateWhereInput[]
    OR?: AffiliateWhereInput[]
    NOT?: AffiliateWhereInput | AffiliateWhereInput[]
    userId?: IntFilter<"Affiliate"> | number
    earnings?: FloatFilter<"Affiliate"> | number
    createAt?: DateTimeFilter<"Affiliate"> | Date | string
    updateAt?: DateTimeFilter<"Affiliate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    AffiliateReferral?: AffiliateReferralListRelationFilter
  }, "id" | "code">

  export type AffiliateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    earnings?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: AffiliateCountOrderByAggregateInput
    _avg?: AffiliateAvgOrderByAggregateInput
    _max?: AffiliateMaxOrderByAggregateInput
    _min?: AffiliateMinOrderByAggregateInput
    _sum?: AffiliateSumOrderByAggregateInput
  }

  export type AffiliateScalarWhereWithAggregatesInput = {
    AND?: AffiliateScalarWhereWithAggregatesInput | AffiliateScalarWhereWithAggregatesInput[]
    OR?: AffiliateScalarWhereWithAggregatesInput[]
    NOT?: AffiliateScalarWhereWithAggregatesInput | AffiliateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Affiliate"> | number
    userId?: IntWithAggregatesFilter<"Affiliate"> | number
    code?: StringWithAggregatesFilter<"Affiliate"> | string
    earnings?: FloatWithAggregatesFilter<"Affiliate"> | number
    createAt?: DateTimeWithAggregatesFilter<"Affiliate"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Affiliate"> | Date | string
  }

  export type AffiliateReferralWhereInput = {
    AND?: AffiliateReferralWhereInput | AffiliateReferralWhereInput[]
    OR?: AffiliateReferralWhereInput[]
    NOT?: AffiliateReferralWhereInput | AffiliateReferralWhereInput[]
    id?: IntFilter<"AffiliateReferral"> | number
    affiliateId?: IntFilter<"AffiliateReferral"> | number
    referredUserId?: IntNullableFilter<"AffiliateReferral"> | number | null
    type?: EnumReferralTypeFilter<"AffiliateReferral"> | $Enums.ReferralType
    value?: FloatFilter<"AffiliateReferral"> | number
    status?: EnumReferralStatusFilter<"AffiliateReferral"> | $Enums.ReferralStatus
    createAt?: DateTimeFilter<"AffiliateReferral"> | Date | string
    updateAt?: DateTimeFilter<"AffiliateReferral"> | Date | string
    affiliate?: XOR<AffiliateScalarRelationFilter, AffiliateWhereInput>
    referredUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AffiliateReferralOrderByWithRelationInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    referredUserId?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    affiliate?: AffiliateOrderByWithRelationInput
    referredUser?: UserOrderByWithRelationInput
  }

  export type AffiliateReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AffiliateReferralWhereInput | AffiliateReferralWhereInput[]
    OR?: AffiliateReferralWhereInput[]
    NOT?: AffiliateReferralWhereInput | AffiliateReferralWhereInput[]
    affiliateId?: IntFilter<"AffiliateReferral"> | number
    referredUserId?: IntNullableFilter<"AffiliateReferral"> | number | null
    type?: EnumReferralTypeFilter<"AffiliateReferral"> | $Enums.ReferralType
    value?: FloatFilter<"AffiliateReferral"> | number
    status?: EnumReferralStatusFilter<"AffiliateReferral"> | $Enums.ReferralStatus
    createAt?: DateTimeFilter<"AffiliateReferral"> | Date | string
    updateAt?: DateTimeFilter<"AffiliateReferral"> | Date | string
    affiliate?: XOR<AffiliateScalarRelationFilter, AffiliateWhereInput>
    referredUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AffiliateReferralOrderByWithAggregationInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    referredUserId?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: AffiliateReferralCountOrderByAggregateInput
    _avg?: AffiliateReferralAvgOrderByAggregateInput
    _max?: AffiliateReferralMaxOrderByAggregateInput
    _min?: AffiliateReferralMinOrderByAggregateInput
    _sum?: AffiliateReferralSumOrderByAggregateInput
  }

  export type AffiliateReferralScalarWhereWithAggregatesInput = {
    AND?: AffiliateReferralScalarWhereWithAggregatesInput | AffiliateReferralScalarWhereWithAggregatesInput[]
    OR?: AffiliateReferralScalarWhereWithAggregatesInput[]
    NOT?: AffiliateReferralScalarWhereWithAggregatesInput | AffiliateReferralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AffiliateReferral"> | number
    affiliateId?: IntWithAggregatesFilter<"AffiliateReferral"> | number
    referredUserId?: IntNullableWithAggregatesFilter<"AffiliateReferral"> | number | null
    type?: EnumReferralTypeWithAggregatesFilter<"AffiliateReferral"> | $Enums.ReferralType
    value?: FloatWithAggregatesFilter<"AffiliateReferral"> | number
    status?: EnumReferralStatusWithAggregatesFilter<"AffiliateReferral"> | $Enums.ReferralStatus
    createAt?: DateTimeWithAggregatesFilter<"AffiliateReferral"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"AffiliateReferral"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createAt?: Date | string
    updateAt?: Date | string
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
    MedicalRecord?: MedicalRecordCreateNestedManyWithoutVetInput
    business?: BusinessCreateNestedOneWithoutUsersInput
    AffiliateReferral?: AffiliateReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    businessId?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
    MedicalRecord?: MedicalRecordUncheckedCreateNestedManyWithoutVetInput
    AffiliateReferral?: AffiliateReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
    MedicalRecord?: MedicalRecordUpdateManyWithoutVetNestedInput
    business?: BusinessUpdateOneWithoutUsersNestedInput
    AffiliateReferral?: AffiliateReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
    MedicalRecord?: MedicalRecordUncheckedUpdateManyWithoutVetNestedInput
    AffiliateReferral?: AffiliateReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    businessId?: number | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateInput = {
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutBusinessInput
    clients?: ClientCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    services?: ServiceCreateNestedManyWithoutBusinessInput
    users?: UserCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutBusinessInput
    clients?: ClientUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    services?: ServiceUncheckedCreateNestedManyWithoutBusinessInput
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutBusinessNestedInput
    clients?: ClientUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    services?: ServiceUpdateManyWithoutBusinessNestedInput
    users?: UserUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutBusinessNestedInput
    clients?: ClientUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBusinessNestedInput
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutClientsInput
    pets?: PetCreateNestedManyWithoutClientInput
    Sale?: SaleCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutClientInput
    Sale?: SaleUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutClientsNestedInput
    pets?: PetUpdateManyWithoutClientNestedInput
    Sale?: SaleUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutClientNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateInput = {
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPetInput
    records?: MedicalRecordCreateNestedManyWithoutPetInput
    client: ClientCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: number
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    clientId: number
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPetInput
    records?: MedicalRecordUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPetNestedInput
    records?: MedicalRecordUpdateManyWithoutPetNestedInput
    client?: ClientUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPetNestedInput
    records?: MedicalRecordUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: number
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    clientId: number
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutAppointmentsInput
    pet: PetCreateNestedOneWithoutAppointmentsInput
    service?: ServiceCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    petId: number
    serviceId?: number | null
    businessId: number
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAppointmentsNestedInput
    pet?: PetUpdateOneRequiredWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    petId?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    businessId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    petId: number
    serviceId?: number | null
    businessId: number
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    petId?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    businessId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    price: number
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
    Appointment?: AppointmentCreateNestedManyWithoutServiceInput
    business: BusinessCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    duration: number
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointment?: AppointmentUpdateManyWithoutServiceNestedInput
    business?: BusinessUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointment?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    price: number
    duration: number
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    price: number
    stock: number
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductsInput
    SaleItem?: SaleItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    stock: number
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
    SaleItem?: SaleItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductsNestedInput
    SaleItem?: SaleItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SaleItem?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    price: number
    stock: number
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutSalesInput
    client?: ClientCreateNestedOneWithoutSaleInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: number
    clientId?: number | null
    businessId: number
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutSalesNestedInput
    client?: ClientUpdateOneWithoutSaleNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    businessId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: number
    clientId?: number | null
    businessId: number
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    businessId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateInput = {
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
    product: ProductCreateNestedOneWithoutSaleItemInput
    sale: SaleCreateNestedOneWithoutItemsInput
  }

  export type SaleItemUncheckedCreateInput = {
    id?: number
    saleId: number
    productId: number
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutSaleItemNestedInput
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManyInput = {
    id?: number
    saleId: number
    productId: number
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordCreateInput = {
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    pet: PetCreateNestedOneWithoutRecordsInput
    vet?: UserCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateInput = {
    id?: number
    petId: number
    vetId?: number | null
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MedicalRecordUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutRecordsNestedInput
    vet?: UserUpdateOneWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: IntFieldUpdateOperationsInput | number
    vetId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordCreateManyInput = {
    id?: number
    petId: number
    vetId?: number | null
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MedicalRecordUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: IntFieldUpdateOperationsInput | number
    vetId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateCreateInput = {
    code: string
    earnings?: number
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutAffiliateInput
    AffiliateReferral?: AffiliateReferralCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUncheckedCreateInput = {
    id?: number
    userId: number
    code: string
    earnings?: number
    createAt?: Date | string
    updateAt?: Date | string
    AffiliateReferral?: AffiliateReferralUncheckedCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAffiliateNestedInput
    AffiliateReferral?: AffiliateReferralUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AffiliateReferral?: AffiliateReferralUncheckedUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateCreateManyInput = {
    id?: number
    userId: number
    code: string
    earnings?: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateReferralCreateInput = {
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
    affiliate: AffiliateCreateNestedOneWithoutAffiliateReferralInput
    referredUser?: UserCreateNestedOneWithoutAffiliateReferralInput
  }

  export type AffiliateReferralUncheckedCreateInput = {
    id?: number
    affiliateId: number
    referredUserId?: number | null
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateReferralUpdateInput = {
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliate?: AffiliateUpdateOneRequiredWithoutAffiliateReferralNestedInput
    referredUser?: UserUpdateOneWithoutAffiliateReferralNestedInput
  }

  export type AffiliateReferralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    affiliateId?: IntFieldUpdateOperationsInput | number
    referredUserId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateReferralCreateManyInput = {
    id?: number
    affiliateId: number
    referredUserId?: number | null
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateReferralUpdateManyMutationInput = {
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateReferralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    affiliateId?: IntFieldUpdateOperationsInput | number
    referredUserId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AffiliateListRelationFilter = {
    every?: AffiliateWhereInput
    some?: AffiliateWhereInput
    none?: AffiliateWhereInput
  }

  export type MedicalRecordListRelationFilter = {
    every?: MedicalRecordWhereInput
    some?: MedicalRecordWhereInput
    none?: MedicalRecordWhereInput
  }

  export type BusinessNullableScalarRelationFilter = {
    is?: BusinessWhereInput | null
    isNot?: BusinessWhereInput | null
  }

  export type AffiliateReferralListRelationFilter = {
    every?: AffiliateReferralWhereInput
    some?: AffiliateReferralWhereInput
    none?: AffiliateReferralWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AffiliateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AffiliateReferralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BusinessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BusinessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    clientId?: SortOrder
    nextVaccineDate?: SortOrder
    lastFedAt?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    clientId?: SortOrder
    nextVaccineDate?: SortOrder
    lastFedAt?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    clientId?: SortOrder
    nextVaccineDate?: SortOrder
    lastFedAt?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    petId?: SortOrder
    serviceId?: SortOrder
    businessId?: SortOrder
    notes?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    serviceId?: SortOrder
    businessId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    petId?: SortOrder
    serviceId?: SortOrder
    businessId?: SortOrder
    notes?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    petId?: SortOrder
    serviceId?: SortOrder
    businessId?: SortOrder
    notes?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    serviceId?: SortOrder
    businessId?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    businessId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    businessId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SaleItemListRelationFilter = {
    every?: SaleItemWhereInput
    some?: SaleItemWhereInput
    none?: SaleItemWhereInput
  }

  export type SaleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    businessId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    businessId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    businessId?: SortOrder
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    businessId?: SortOrder
    total?: SortOrder
    dateSale?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    businessId?: SortOrder
    total?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    businessId?: SortOrder
    total?: SortOrder
    dateSale?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    businessId?: SortOrder
    total?: SortOrder
    dateSale?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    businessId?: SortOrder
    total?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SaleScalarRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type SaleItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SaleItemAvgOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type SaleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SaleItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SaleItemSumOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MedicalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    vetId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MedicalRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    vetId?: SortOrder
  }

  export type MedicalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    vetId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MedicalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    vetId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MedicalRecordSumOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    vetId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AffiliateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    earnings?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AffiliateAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    earnings?: SortOrder
  }

  export type AffiliateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    earnings?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AffiliateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    earnings?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AffiliateSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    earnings?: SortOrder
  }

  export type EnumReferralTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralType | EnumReferralTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralTypeFilter<$PrismaModel> | $Enums.ReferralType
  }

  export type EnumReferralStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralStatus | EnumReferralStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralStatus[] | ListEnumReferralStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralStatus[] | ListEnumReferralStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralStatusFilter<$PrismaModel> | $Enums.ReferralStatus
  }

  export type AffiliateScalarRelationFilter = {
    is?: AffiliateWhereInput
    isNot?: AffiliateWhereInput
  }

  export type AffiliateReferralCountOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    referredUserId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AffiliateReferralAvgOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    referredUserId?: SortOrder
    value?: SortOrder
  }

  export type AffiliateReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    referredUserId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AffiliateReferralMinOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    referredUserId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AffiliateReferralSumOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    referredUserId?: SortOrder
    value?: SortOrder
  }

  export type EnumReferralTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralType | EnumReferralTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReferralType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferralTypeFilter<$PrismaModel>
    _max?: NestedEnumReferralTypeFilter<$PrismaModel>
  }

  export type EnumReferralStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralStatus | EnumReferralStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralStatus[] | ListEnumReferralStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralStatus[] | ListEnumReferralStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReferralStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferralStatusFilter<$PrismaModel>
    _max?: NestedEnumReferralStatusFilter<$PrismaModel>
  }

  export type AffiliateCreateNestedManyWithoutUserInput = {
    create?: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput> | AffiliateCreateWithoutUserInput[] | AffiliateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateCreateOrConnectWithoutUserInput | AffiliateCreateOrConnectWithoutUserInput[]
    createMany?: AffiliateCreateManyUserInputEnvelope
    connect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
  }

  export type MedicalRecordCreateNestedManyWithoutVetInput = {
    create?: XOR<MedicalRecordCreateWithoutVetInput, MedicalRecordUncheckedCreateWithoutVetInput> | MedicalRecordCreateWithoutVetInput[] | MedicalRecordUncheckedCreateWithoutVetInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutVetInput | MedicalRecordCreateOrConnectWithoutVetInput[]
    createMany?: MedicalRecordCreateManyVetInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type BusinessCreateNestedOneWithoutUsersInput = {
    create?: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUsersInput
    connect?: BusinessWhereUniqueInput
  }

  export type AffiliateReferralCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<AffiliateReferralCreateWithoutReferredUserInput, AffiliateReferralUncheckedCreateWithoutReferredUserInput> | AffiliateReferralCreateWithoutReferredUserInput[] | AffiliateReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: AffiliateReferralCreateOrConnectWithoutReferredUserInput | AffiliateReferralCreateOrConnectWithoutReferredUserInput[]
    createMany?: AffiliateReferralCreateManyReferredUserInputEnvelope
    connect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
  }

  export type AffiliateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput> | AffiliateCreateWithoutUserInput[] | AffiliateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateCreateOrConnectWithoutUserInput | AffiliateCreateOrConnectWithoutUserInput[]
    createMany?: AffiliateCreateManyUserInputEnvelope
    connect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutVetInput = {
    create?: XOR<MedicalRecordCreateWithoutVetInput, MedicalRecordUncheckedCreateWithoutVetInput> | MedicalRecordCreateWithoutVetInput[] | MedicalRecordUncheckedCreateWithoutVetInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutVetInput | MedicalRecordCreateOrConnectWithoutVetInput[]
    createMany?: MedicalRecordCreateManyVetInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type AffiliateReferralUncheckedCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<AffiliateReferralCreateWithoutReferredUserInput, AffiliateReferralUncheckedCreateWithoutReferredUserInput> | AffiliateReferralCreateWithoutReferredUserInput[] | AffiliateReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: AffiliateReferralCreateOrConnectWithoutReferredUserInput | AffiliateReferralCreateOrConnectWithoutReferredUserInput[]
    createMany?: AffiliateReferralCreateManyReferredUserInputEnvelope
    connect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AffiliateUpdateManyWithoutUserNestedInput = {
    create?: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput> | AffiliateCreateWithoutUserInput[] | AffiliateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateCreateOrConnectWithoutUserInput | AffiliateCreateOrConnectWithoutUserInput[]
    upsert?: AffiliateUpsertWithWhereUniqueWithoutUserInput | AffiliateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AffiliateCreateManyUserInputEnvelope
    set?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    disconnect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    delete?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    connect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    update?: AffiliateUpdateWithWhereUniqueWithoutUserInput | AffiliateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AffiliateUpdateManyWithWhereWithoutUserInput | AffiliateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AffiliateScalarWhereInput | AffiliateScalarWhereInput[]
  }

  export type MedicalRecordUpdateManyWithoutVetNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutVetInput, MedicalRecordUncheckedCreateWithoutVetInput> | MedicalRecordCreateWithoutVetInput[] | MedicalRecordUncheckedCreateWithoutVetInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutVetInput | MedicalRecordCreateOrConnectWithoutVetInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutVetInput | MedicalRecordUpsertWithWhereUniqueWithoutVetInput[]
    createMany?: MedicalRecordCreateManyVetInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutVetInput | MedicalRecordUpdateWithWhereUniqueWithoutVetInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutVetInput | MedicalRecordUpdateManyWithWhereWithoutVetInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type BusinessUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUsersInput
    upsert?: BusinessUpsertWithoutUsersInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutUsersInput, BusinessUpdateWithoutUsersInput>, BusinessUncheckedUpdateWithoutUsersInput>
  }

  export type AffiliateReferralUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<AffiliateReferralCreateWithoutReferredUserInput, AffiliateReferralUncheckedCreateWithoutReferredUserInput> | AffiliateReferralCreateWithoutReferredUserInput[] | AffiliateReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: AffiliateReferralCreateOrConnectWithoutReferredUserInput | AffiliateReferralCreateOrConnectWithoutReferredUserInput[]
    upsert?: AffiliateReferralUpsertWithWhereUniqueWithoutReferredUserInput | AffiliateReferralUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: AffiliateReferralCreateManyReferredUserInputEnvelope
    set?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    disconnect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    delete?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    connect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    update?: AffiliateReferralUpdateWithWhereUniqueWithoutReferredUserInput | AffiliateReferralUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: AffiliateReferralUpdateManyWithWhereWithoutReferredUserInput | AffiliateReferralUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: AffiliateReferralScalarWhereInput | AffiliateReferralScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AffiliateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput> | AffiliateCreateWithoutUserInput[] | AffiliateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateCreateOrConnectWithoutUserInput | AffiliateCreateOrConnectWithoutUserInput[]
    upsert?: AffiliateUpsertWithWhereUniqueWithoutUserInput | AffiliateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AffiliateCreateManyUserInputEnvelope
    set?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    disconnect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    delete?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    connect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    update?: AffiliateUpdateWithWhereUniqueWithoutUserInput | AffiliateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AffiliateUpdateManyWithWhereWithoutUserInput | AffiliateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AffiliateScalarWhereInput | AffiliateScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutVetNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutVetInput, MedicalRecordUncheckedCreateWithoutVetInput> | MedicalRecordCreateWithoutVetInput[] | MedicalRecordUncheckedCreateWithoutVetInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutVetInput | MedicalRecordCreateOrConnectWithoutVetInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutVetInput | MedicalRecordUpsertWithWhereUniqueWithoutVetInput[]
    createMany?: MedicalRecordCreateManyVetInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutVetInput | MedicalRecordUpdateWithWhereUniqueWithoutVetInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutVetInput | MedicalRecordUpdateManyWithWhereWithoutVetInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type AffiliateReferralUncheckedUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<AffiliateReferralCreateWithoutReferredUserInput, AffiliateReferralUncheckedCreateWithoutReferredUserInput> | AffiliateReferralCreateWithoutReferredUserInput[] | AffiliateReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: AffiliateReferralCreateOrConnectWithoutReferredUserInput | AffiliateReferralCreateOrConnectWithoutReferredUserInput[]
    upsert?: AffiliateReferralUpsertWithWhereUniqueWithoutReferredUserInput | AffiliateReferralUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: AffiliateReferralCreateManyReferredUserInputEnvelope
    set?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    disconnect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    delete?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    connect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    update?: AffiliateReferralUpdateWithWhereUniqueWithoutReferredUserInput | AffiliateReferralUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: AffiliateReferralUpdateManyWithWhereWithoutReferredUserInput | AffiliateReferralUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: AffiliateReferralScalarWhereInput | AffiliateReferralScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutBusinessInput = {
    create?: XOR<AppointmentCreateWithoutBusinessInput, AppointmentUncheckedCreateWithoutBusinessInput> | AppointmentCreateWithoutBusinessInput[] | AppointmentUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBusinessInput | AppointmentCreateOrConnectWithoutBusinessInput[]
    createMany?: AppointmentCreateManyBusinessInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ClientCreateWithoutBusinessInput, ClientUncheckedCreateWithoutBusinessInput> | ClientCreateWithoutBusinessInput[] | ClientUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutBusinessInput | ClientCreateOrConnectWithoutBusinessInput[]
    createMany?: ClientCreateManyBusinessInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutBusinessInput = {
    create?: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput> | SaleCreateWithoutBusinessInput[] | SaleUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBusinessInput | SaleCreateOrConnectWithoutBusinessInput[]
    createMany?: SaleCreateManyBusinessInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput> | ServiceCreateWithoutBusinessInput[] | ServiceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBusinessInput | ServiceCreateOrConnectWithoutBusinessInput[]
    createMany?: ServiceCreateManyBusinessInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutBusinessInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<AppointmentCreateWithoutBusinessInput, AppointmentUncheckedCreateWithoutBusinessInput> | AppointmentCreateWithoutBusinessInput[] | AppointmentUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBusinessInput | AppointmentCreateOrConnectWithoutBusinessInput[]
    createMany?: AppointmentCreateManyBusinessInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ClientCreateWithoutBusinessInput, ClientUncheckedCreateWithoutBusinessInput> | ClientCreateWithoutBusinessInput[] | ClientUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutBusinessInput | ClientCreateOrConnectWithoutBusinessInput[]
    createMany?: ClientCreateManyBusinessInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput> | SaleCreateWithoutBusinessInput[] | SaleUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBusinessInput | SaleCreateOrConnectWithoutBusinessInput[]
    createMany?: SaleCreateManyBusinessInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput> | ServiceCreateWithoutBusinessInput[] | ServiceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBusinessInput | ServiceCreateOrConnectWithoutBusinessInput[]
    createMany?: ServiceCreateManyBusinessInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<AppointmentCreateWithoutBusinessInput, AppointmentUncheckedCreateWithoutBusinessInput> | AppointmentCreateWithoutBusinessInput[] | AppointmentUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBusinessInput | AppointmentCreateOrConnectWithoutBusinessInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutBusinessInput | AppointmentUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: AppointmentCreateManyBusinessInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutBusinessInput | AppointmentUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutBusinessInput | AppointmentUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ClientCreateWithoutBusinessInput, ClientUncheckedCreateWithoutBusinessInput> | ClientCreateWithoutBusinessInput[] | ClientUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutBusinessInput | ClientCreateOrConnectWithoutBusinessInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutBusinessInput | ClientUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ClientCreateManyBusinessInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutBusinessInput | ClientUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutBusinessInput | ClientUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBusinessInput | ProductUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBusinessInput | ProductUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBusinessInput | ProductUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput> | SaleCreateWithoutBusinessInput[] | SaleUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBusinessInput | SaleCreateOrConnectWithoutBusinessInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutBusinessInput | SaleUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: SaleCreateManyBusinessInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutBusinessInput | SaleUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutBusinessInput | SaleUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput> | ServiceCreateWithoutBusinessInput[] | ServiceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBusinessInput | ServiceCreateOrConnectWithoutBusinessInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBusinessInput | ServiceUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ServiceCreateManyBusinessInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBusinessInput | ServiceUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBusinessInput | ServiceUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type UserUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBusinessInput | UserUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBusinessInput | UserUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBusinessInput | UserUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<AppointmentCreateWithoutBusinessInput, AppointmentUncheckedCreateWithoutBusinessInput> | AppointmentCreateWithoutBusinessInput[] | AppointmentUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBusinessInput | AppointmentCreateOrConnectWithoutBusinessInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutBusinessInput | AppointmentUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: AppointmentCreateManyBusinessInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutBusinessInput | AppointmentUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutBusinessInput | AppointmentUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ClientCreateWithoutBusinessInput, ClientUncheckedCreateWithoutBusinessInput> | ClientCreateWithoutBusinessInput[] | ClientUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutBusinessInput | ClientCreateOrConnectWithoutBusinessInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutBusinessInput | ClientUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ClientCreateManyBusinessInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutBusinessInput | ClientUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutBusinessInput | ClientUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBusinessInput | ProductUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBusinessInput | ProductUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBusinessInput | ProductUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput> | SaleCreateWithoutBusinessInput[] | SaleUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBusinessInput | SaleCreateOrConnectWithoutBusinessInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutBusinessInput | SaleUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: SaleCreateManyBusinessInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutBusinessInput | SaleUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutBusinessInput | SaleUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput> | ServiceCreateWithoutBusinessInput[] | ServiceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBusinessInput | ServiceCreateOrConnectWithoutBusinessInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBusinessInput | ServiceUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ServiceCreateManyBusinessInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBusinessInput | ServiceUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBusinessInput | ServiceUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBusinessInput | UserUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBusinessInput | UserUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBusinessInput | UserUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutClientsInput = {
    create?: XOR<BusinessCreateWithoutClientsInput, BusinessUncheckedCreateWithoutClientsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutClientsInput
    connect?: BusinessWhereUniqueInput
  }

  export type PetCreateNestedManyWithoutClientInput = {
    create?: XOR<PetCreateWithoutClientInput, PetUncheckedCreateWithoutClientInput> | PetCreateWithoutClientInput[] | PetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PetCreateOrConnectWithoutClientInput | PetCreateOrConnectWithoutClientInput[]
    createMany?: PetCreateManyClientInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutClientInput = {
    create?: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput> | SaleCreateWithoutClientInput[] | SaleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput | SaleCreateOrConnectWithoutClientInput[]
    createMany?: SaleCreateManyClientInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PetCreateWithoutClientInput, PetUncheckedCreateWithoutClientInput> | PetCreateWithoutClientInput[] | PetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PetCreateOrConnectWithoutClientInput | PetCreateOrConnectWithoutClientInput[]
    createMany?: PetCreateManyClientInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput> | SaleCreateWithoutClientInput[] | SaleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput | SaleCreateOrConnectWithoutClientInput[]
    createMany?: SaleCreateManyClientInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BusinessUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<BusinessCreateWithoutClientsInput, BusinessUncheckedCreateWithoutClientsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutClientsInput
    upsert?: BusinessUpsertWithoutClientsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutClientsInput, BusinessUpdateWithoutClientsInput>, BusinessUncheckedUpdateWithoutClientsInput>
  }

  export type PetUpdateManyWithoutClientNestedInput = {
    create?: XOR<PetCreateWithoutClientInput, PetUncheckedCreateWithoutClientInput> | PetCreateWithoutClientInput[] | PetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PetCreateOrConnectWithoutClientInput | PetCreateOrConnectWithoutClientInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutClientInput | PetUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PetCreateManyClientInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutClientInput | PetUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PetUpdateManyWithWhereWithoutClientInput | PetUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutClientNestedInput = {
    create?: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput> | SaleCreateWithoutClientInput[] | SaleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput | SaleCreateOrConnectWithoutClientInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutClientInput | SaleUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SaleCreateManyClientInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutClientInput | SaleUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutClientInput | SaleUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PetCreateWithoutClientInput, PetUncheckedCreateWithoutClientInput> | PetCreateWithoutClientInput[] | PetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PetCreateOrConnectWithoutClientInput | PetCreateOrConnectWithoutClientInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutClientInput | PetUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PetCreateManyClientInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutClientInput | PetUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PetUpdateManyWithWhereWithoutClientInput | PetUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput> | SaleCreateWithoutClientInput[] | SaleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput | SaleCreateOrConnectWithoutClientInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutClientInput | SaleUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SaleCreateManyClientInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutClientInput | SaleUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutClientInput | SaleUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutPetInput = {
    create?: XOR<AppointmentCreateWithoutPetInput, AppointmentUncheckedCreateWithoutPetInput> | AppointmentCreateWithoutPetInput[] | AppointmentUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPetInput | AppointmentCreateOrConnectWithoutPetInput[]
    createMany?: AppointmentCreateManyPetInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalRecordCreateNestedManyWithoutPetInput = {
    create?: XOR<MedicalRecordCreateWithoutPetInput, MedicalRecordUncheckedCreateWithoutPetInput> | MedicalRecordCreateWithoutPetInput[] | MedicalRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPetInput | MedicalRecordCreateOrConnectWithoutPetInput[]
    createMany?: MedicalRecordCreateManyPetInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutPetsInput = {
    create?: XOR<ClientCreateWithoutPetsInput, ClientUncheckedCreateWithoutPetsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPetsInput
    connect?: ClientWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<AppointmentCreateWithoutPetInput, AppointmentUncheckedCreateWithoutPetInput> | AppointmentCreateWithoutPetInput[] | AppointmentUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPetInput | AppointmentCreateOrConnectWithoutPetInput[]
    createMany?: AppointmentCreateManyPetInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<MedicalRecordCreateWithoutPetInput, MedicalRecordUncheckedCreateWithoutPetInput> | MedicalRecordCreateWithoutPetInput[] | MedicalRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPetInput | MedicalRecordCreateOrConnectWithoutPetInput[]
    createMany?: MedicalRecordCreateManyPetInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AppointmentUpdateManyWithoutPetNestedInput = {
    create?: XOR<AppointmentCreateWithoutPetInput, AppointmentUncheckedCreateWithoutPetInput> | AppointmentCreateWithoutPetInput[] | AppointmentUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPetInput | AppointmentCreateOrConnectWithoutPetInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPetInput | AppointmentUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AppointmentCreateManyPetInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPetInput | AppointmentUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPetInput | AppointmentUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalRecordUpdateManyWithoutPetNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPetInput, MedicalRecordUncheckedCreateWithoutPetInput> | MedicalRecordCreateWithoutPetInput[] | MedicalRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPetInput | MedicalRecordCreateOrConnectWithoutPetInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPetInput | MedicalRecordUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: MedicalRecordCreateManyPetInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPetInput | MedicalRecordUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPetInput | MedicalRecordUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type ClientUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<ClientCreateWithoutPetsInput, ClientUncheckedCreateWithoutPetsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPetsInput
    upsert?: ClientUpsertWithoutPetsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutPetsInput, ClientUpdateWithoutPetsInput>, ClientUncheckedUpdateWithoutPetsInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<AppointmentCreateWithoutPetInput, AppointmentUncheckedCreateWithoutPetInput> | AppointmentCreateWithoutPetInput[] | AppointmentUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPetInput | AppointmentCreateOrConnectWithoutPetInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPetInput | AppointmentUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AppointmentCreateManyPetInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPetInput | AppointmentUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPetInput | AppointmentUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPetInput, MedicalRecordUncheckedCreateWithoutPetInput> | MedicalRecordCreateWithoutPetInput[] | MedicalRecordUncheckedCreateWithoutPetInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPetInput | MedicalRecordCreateOrConnectWithoutPetInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPetInput | MedicalRecordUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: MedicalRecordCreateManyPetInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPetInput | MedicalRecordUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPetInput | MedicalRecordUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<BusinessCreateWithoutAppointmentsInput, BusinessUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAppointmentsInput
    connect?: BusinessWhereUniqueInput
  }

  export type PetCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PetCreateWithoutAppointmentsInput, PetUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PetCreateOrConnectWithoutAppointmentsInput
    connect?: PetWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ServiceCreateWithoutAppointmentInput, ServiceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentInput
    connect?: ServiceWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type BusinessUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<BusinessCreateWithoutAppointmentsInput, BusinessUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAppointmentsInput
    upsert?: BusinessUpsertWithoutAppointmentsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutAppointmentsInput, BusinessUpdateWithoutAppointmentsInput>, BusinessUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PetUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PetCreateWithoutAppointmentsInput, PetUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PetCreateOrConnectWithoutAppointmentsInput
    upsert?: PetUpsertWithoutAppointmentsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutAppointmentsInput, PetUpdateWithoutAppointmentsInput>, PetUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ServiceUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ServiceCreateWithoutAppointmentInput, ServiceUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentInput
    upsert?: ServiceUpsertWithoutAppointmentInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAppointmentInput, ServiceUpdateWithoutAppointmentInput>, ServiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BusinessCreateNestedOneWithoutServicesInput = {
    create?: XOR<BusinessCreateWithoutServicesInput, BusinessUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutServicesInput
    connect?: BusinessWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BusinessUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<BusinessCreateWithoutServicesInput, BusinessUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutServicesInput
    upsert?: BusinessUpsertWithoutServicesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutServicesInput, BusinessUpdateWithoutServicesInput>, BusinessUncheckedUpdateWithoutServicesInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutProductsInput = {
    create?: XOR<BusinessCreateWithoutProductsInput, BusinessUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutProductsInput
    connect?: BusinessWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type BusinessUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BusinessCreateWithoutProductsInput, BusinessUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutProductsInput
    upsert?: BusinessUpsertWithoutProductsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutProductsInput, BusinessUpdateWithoutProductsInput>, BusinessUncheckedUpdateWithoutProductsInput>
  }

  export type SaleItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutSalesInput = {
    create?: XOR<BusinessCreateWithoutSalesInput, BusinessUncheckedCreateWithoutSalesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutSalesInput
    connect?: BusinessWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutSaleInput = {
    create?: XOR<ClientCreateWithoutSaleInput, ClientUncheckedCreateWithoutSaleInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSaleInput
    connect?: ClientWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type BusinessUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<BusinessCreateWithoutSalesInput, BusinessUncheckedCreateWithoutSalesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutSalesInput
    upsert?: BusinessUpsertWithoutSalesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutSalesInput, BusinessUpdateWithoutSalesInput>, BusinessUncheckedUpdateWithoutSalesInput>
  }

  export type ClientUpdateOneWithoutSaleNestedInput = {
    create?: XOR<ClientCreateWithoutSaleInput, ClientUncheckedCreateWithoutSaleInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSaleInput
    upsert?: ClientUpsertWithoutSaleInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSaleInput, ClientUpdateWithoutSaleInput>, ClientUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSaleItemInput = {
    create?: XOR<ProductCreateWithoutSaleItemInput, ProductUncheckedCreateWithoutSaleItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSaleItemNestedInput = {
    create?: XOR<ProductCreateWithoutSaleItemInput, ProductUncheckedCreateWithoutSaleItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemInput
    upsert?: ProductUpsertWithoutSaleItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleItemInput, ProductUpdateWithoutSaleItemInput>, ProductUncheckedUpdateWithoutSaleItemInput>
  }

  export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    upsert?: SaleUpsertWithoutItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutItemsInput, SaleUpdateWithoutItemsInput>, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type PetCreateNestedOneWithoutRecordsInput = {
    create?: XOR<PetCreateWithoutRecordsInput, PetUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: PetCreateOrConnectWithoutRecordsInput
    connect?: PetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMedicalRecordInput = {
    create?: XOR<UserCreateWithoutMedicalRecordInput, UserUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicalRecordInput
    connect?: UserWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<PetCreateWithoutRecordsInput, PetUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: PetCreateOrConnectWithoutRecordsInput
    upsert?: PetUpsertWithoutRecordsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutRecordsInput, PetUpdateWithoutRecordsInput>, PetUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateOneWithoutMedicalRecordNestedInput = {
    create?: XOR<UserCreateWithoutMedicalRecordInput, UserUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicalRecordInput
    upsert?: UserUpsertWithoutMedicalRecordInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicalRecordInput, UserUpdateWithoutMedicalRecordInput>, UserUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type UserCreateNestedOneWithoutAffiliateInput = {
    create?: XOR<UserCreateWithoutAffiliateInput, UserUncheckedCreateWithoutAffiliateInput>
    connectOrCreate?: UserCreateOrConnectWithoutAffiliateInput
    connect?: UserWhereUniqueInput
  }

  export type AffiliateReferralCreateNestedManyWithoutAffiliateInput = {
    create?: XOR<AffiliateReferralCreateWithoutAffiliateInput, AffiliateReferralUncheckedCreateWithoutAffiliateInput> | AffiliateReferralCreateWithoutAffiliateInput[] | AffiliateReferralUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: AffiliateReferralCreateOrConnectWithoutAffiliateInput | AffiliateReferralCreateOrConnectWithoutAffiliateInput[]
    createMany?: AffiliateReferralCreateManyAffiliateInputEnvelope
    connect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
  }

  export type AffiliateReferralUncheckedCreateNestedManyWithoutAffiliateInput = {
    create?: XOR<AffiliateReferralCreateWithoutAffiliateInput, AffiliateReferralUncheckedCreateWithoutAffiliateInput> | AffiliateReferralCreateWithoutAffiliateInput[] | AffiliateReferralUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: AffiliateReferralCreateOrConnectWithoutAffiliateInput | AffiliateReferralCreateOrConnectWithoutAffiliateInput[]
    createMany?: AffiliateReferralCreateManyAffiliateInputEnvelope
    connect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAffiliateNestedInput = {
    create?: XOR<UserCreateWithoutAffiliateInput, UserUncheckedCreateWithoutAffiliateInput>
    connectOrCreate?: UserCreateOrConnectWithoutAffiliateInput
    upsert?: UserUpsertWithoutAffiliateInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAffiliateInput, UserUpdateWithoutAffiliateInput>, UserUncheckedUpdateWithoutAffiliateInput>
  }

  export type AffiliateReferralUpdateManyWithoutAffiliateNestedInput = {
    create?: XOR<AffiliateReferralCreateWithoutAffiliateInput, AffiliateReferralUncheckedCreateWithoutAffiliateInput> | AffiliateReferralCreateWithoutAffiliateInput[] | AffiliateReferralUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: AffiliateReferralCreateOrConnectWithoutAffiliateInput | AffiliateReferralCreateOrConnectWithoutAffiliateInput[]
    upsert?: AffiliateReferralUpsertWithWhereUniqueWithoutAffiliateInput | AffiliateReferralUpsertWithWhereUniqueWithoutAffiliateInput[]
    createMany?: AffiliateReferralCreateManyAffiliateInputEnvelope
    set?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    disconnect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    delete?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    connect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    update?: AffiliateReferralUpdateWithWhereUniqueWithoutAffiliateInput | AffiliateReferralUpdateWithWhereUniqueWithoutAffiliateInput[]
    updateMany?: AffiliateReferralUpdateManyWithWhereWithoutAffiliateInput | AffiliateReferralUpdateManyWithWhereWithoutAffiliateInput[]
    deleteMany?: AffiliateReferralScalarWhereInput | AffiliateReferralScalarWhereInput[]
  }

  export type AffiliateReferralUncheckedUpdateManyWithoutAffiliateNestedInput = {
    create?: XOR<AffiliateReferralCreateWithoutAffiliateInput, AffiliateReferralUncheckedCreateWithoutAffiliateInput> | AffiliateReferralCreateWithoutAffiliateInput[] | AffiliateReferralUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: AffiliateReferralCreateOrConnectWithoutAffiliateInput | AffiliateReferralCreateOrConnectWithoutAffiliateInput[]
    upsert?: AffiliateReferralUpsertWithWhereUniqueWithoutAffiliateInput | AffiliateReferralUpsertWithWhereUniqueWithoutAffiliateInput[]
    createMany?: AffiliateReferralCreateManyAffiliateInputEnvelope
    set?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    disconnect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    delete?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    connect?: AffiliateReferralWhereUniqueInput | AffiliateReferralWhereUniqueInput[]
    update?: AffiliateReferralUpdateWithWhereUniqueWithoutAffiliateInput | AffiliateReferralUpdateWithWhereUniqueWithoutAffiliateInput[]
    updateMany?: AffiliateReferralUpdateManyWithWhereWithoutAffiliateInput | AffiliateReferralUpdateManyWithWhereWithoutAffiliateInput[]
    deleteMany?: AffiliateReferralScalarWhereInput | AffiliateReferralScalarWhereInput[]
  }

  export type AffiliateCreateNestedOneWithoutAffiliateReferralInput = {
    create?: XOR<AffiliateCreateWithoutAffiliateReferralInput, AffiliateUncheckedCreateWithoutAffiliateReferralInput>
    connectOrCreate?: AffiliateCreateOrConnectWithoutAffiliateReferralInput
    connect?: AffiliateWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAffiliateReferralInput = {
    create?: XOR<UserCreateWithoutAffiliateReferralInput, UserUncheckedCreateWithoutAffiliateReferralInput>
    connectOrCreate?: UserCreateOrConnectWithoutAffiliateReferralInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReferralTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReferralType
  }

  export type EnumReferralStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReferralStatus
  }

  export type AffiliateUpdateOneRequiredWithoutAffiliateReferralNestedInput = {
    create?: XOR<AffiliateCreateWithoutAffiliateReferralInput, AffiliateUncheckedCreateWithoutAffiliateReferralInput>
    connectOrCreate?: AffiliateCreateOrConnectWithoutAffiliateReferralInput
    upsert?: AffiliateUpsertWithoutAffiliateReferralInput
    connect?: AffiliateWhereUniqueInput
    update?: XOR<XOR<AffiliateUpdateToOneWithWhereWithoutAffiliateReferralInput, AffiliateUpdateWithoutAffiliateReferralInput>, AffiliateUncheckedUpdateWithoutAffiliateReferralInput>
  }

  export type UserUpdateOneWithoutAffiliateReferralNestedInput = {
    create?: XOR<UserCreateWithoutAffiliateReferralInput, UserUncheckedCreateWithoutAffiliateReferralInput>
    connectOrCreate?: UserCreateOrConnectWithoutAffiliateReferralInput
    upsert?: UserUpsertWithoutAffiliateReferralInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAffiliateReferralInput, UserUpdateWithoutAffiliateReferralInput>, UserUncheckedUpdateWithoutAffiliateReferralInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumReferralTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralType | EnumReferralTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralTypeFilter<$PrismaModel> | $Enums.ReferralType
  }

  export type NestedEnumReferralStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralStatus | EnumReferralStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralStatus[] | ListEnumReferralStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralStatus[] | ListEnumReferralStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralStatusFilter<$PrismaModel> | $Enums.ReferralStatus
  }

  export type NestedEnumReferralTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralType | EnumReferralTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReferralType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferralTypeFilter<$PrismaModel>
    _max?: NestedEnumReferralTypeFilter<$PrismaModel>
  }

  export type NestedEnumReferralStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralStatus | EnumReferralStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralStatus[] | ListEnumReferralStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralStatus[] | ListEnumReferralStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReferralStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferralStatusFilter<$PrismaModel>
    _max?: NestedEnumReferralStatusFilter<$PrismaModel>
  }

  export type AffiliateCreateWithoutUserInput = {
    code: string
    earnings?: number
    createAt?: Date | string
    updateAt?: Date | string
    AffiliateReferral?: AffiliateReferralCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    earnings?: number
    createAt?: Date | string
    updateAt?: Date | string
    AffiliateReferral?: AffiliateReferralUncheckedCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateCreateOrConnectWithoutUserInput = {
    where: AffiliateWhereUniqueInput
    create: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput>
  }

  export type AffiliateCreateManyUserInputEnvelope = {
    data: AffiliateCreateManyUserInput | AffiliateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordCreateWithoutVetInput = {
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    pet: PetCreateNestedOneWithoutRecordsInput
  }

  export type MedicalRecordUncheckedCreateWithoutVetInput = {
    id?: number
    petId: number
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MedicalRecordCreateOrConnectWithoutVetInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutVetInput, MedicalRecordUncheckedCreateWithoutVetInput>
  }

  export type MedicalRecordCreateManyVetInputEnvelope = {
    data: MedicalRecordCreateManyVetInput | MedicalRecordCreateManyVetInput[]
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutUsersInput = {
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutBusinessInput
    clients?: ClientCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    services?: ServiceCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutBusinessInput
    clients?: ClientUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    services?: ServiceUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutUsersInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
  }

  export type AffiliateReferralCreateWithoutReferredUserInput = {
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
    affiliate: AffiliateCreateNestedOneWithoutAffiliateReferralInput
  }

  export type AffiliateReferralUncheckedCreateWithoutReferredUserInput = {
    id?: number
    affiliateId: number
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateReferralCreateOrConnectWithoutReferredUserInput = {
    where: AffiliateReferralWhereUniqueInput
    create: XOR<AffiliateReferralCreateWithoutReferredUserInput, AffiliateReferralUncheckedCreateWithoutReferredUserInput>
  }

  export type AffiliateReferralCreateManyReferredUserInputEnvelope = {
    data: AffiliateReferralCreateManyReferredUserInput | AffiliateReferralCreateManyReferredUserInput[]
    skipDuplicates?: boolean
  }

  export type AffiliateUpsertWithWhereUniqueWithoutUserInput = {
    where: AffiliateWhereUniqueInput
    update: XOR<AffiliateUpdateWithoutUserInput, AffiliateUncheckedUpdateWithoutUserInput>
    create: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput>
  }

  export type AffiliateUpdateWithWhereUniqueWithoutUserInput = {
    where: AffiliateWhereUniqueInput
    data: XOR<AffiliateUpdateWithoutUserInput, AffiliateUncheckedUpdateWithoutUserInput>
  }

  export type AffiliateUpdateManyWithWhereWithoutUserInput = {
    where: AffiliateScalarWhereInput
    data: XOR<AffiliateUpdateManyMutationInput, AffiliateUncheckedUpdateManyWithoutUserInput>
  }

  export type AffiliateScalarWhereInput = {
    AND?: AffiliateScalarWhereInput | AffiliateScalarWhereInput[]
    OR?: AffiliateScalarWhereInput[]
    NOT?: AffiliateScalarWhereInput | AffiliateScalarWhereInput[]
    id?: IntFilter<"Affiliate"> | number
    userId?: IntFilter<"Affiliate"> | number
    code?: StringFilter<"Affiliate"> | string
    earnings?: FloatFilter<"Affiliate"> | number
    createAt?: DateTimeFilter<"Affiliate"> | Date | string
    updateAt?: DateTimeFilter<"Affiliate"> | Date | string
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutVetInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutVetInput, MedicalRecordUncheckedUpdateWithoutVetInput>
    create: XOR<MedicalRecordCreateWithoutVetInput, MedicalRecordUncheckedCreateWithoutVetInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutVetInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutVetInput, MedicalRecordUncheckedUpdateWithoutVetInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutVetInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutVetInput>
  }

  export type MedicalRecordScalarWhereInput = {
    AND?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    OR?: MedicalRecordScalarWhereInput[]
    NOT?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    id?: IntFilter<"MedicalRecord"> | number
    petId?: IntFilter<"MedicalRecord"> | number
    vetId?: IntNullableFilter<"MedicalRecord"> | number | null
    date?: DateTimeFilter<"MedicalRecord"> | Date | string
    description?: StringFilter<"MedicalRecord"> | string
    createAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updateAt?: DateTimeFilter<"MedicalRecord"> | Date | string
  }

  export type BusinessUpsertWithoutUsersInput = {
    update: XOR<BusinessUpdateWithoutUsersInput, BusinessUncheckedUpdateWithoutUsersInput>
    create: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutUsersInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutUsersInput, BusinessUncheckedUpdateWithoutUsersInput>
  }

  export type BusinessUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutBusinessNestedInput
    clients?: ClientUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    services?: ServiceUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutBusinessNestedInput
    clients?: ClientUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type AffiliateReferralUpsertWithWhereUniqueWithoutReferredUserInput = {
    where: AffiliateReferralWhereUniqueInput
    update: XOR<AffiliateReferralUpdateWithoutReferredUserInput, AffiliateReferralUncheckedUpdateWithoutReferredUserInput>
    create: XOR<AffiliateReferralCreateWithoutReferredUserInput, AffiliateReferralUncheckedCreateWithoutReferredUserInput>
  }

  export type AffiliateReferralUpdateWithWhereUniqueWithoutReferredUserInput = {
    where: AffiliateReferralWhereUniqueInput
    data: XOR<AffiliateReferralUpdateWithoutReferredUserInput, AffiliateReferralUncheckedUpdateWithoutReferredUserInput>
  }

  export type AffiliateReferralUpdateManyWithWhereWithoutReferredUserInput = {
    where: AffiliateReferralScalarWhereInput
    data: XOR<AffiliateReferralUpdateManyMutationInput, AffiliateReferralUncheckedUpdateManyWithoutReferredUserInput>
  }

  export type AffiliateReferralScalarWhereInput = {
    AND?: AffiliateReferralScalarWhereInput | AffiliateReferralScalarWhereInput[]
    OR?: AffiliateReferralScalarWhereInput[]
    NOT?: AffiliateReferralScalarWhereInput | AffiliateReferralScalarWhereInput[]
    id?: IntFilter<"AffiliateReferral"> | number
    affiliateId?: IntFilter<"AffiliateReferral"> | number
    referredUserId?: IntNullableFilter<"AffiliateReferral"> | number | null
    type?: EnumReferralTypeFilter<"AffiliateReferral"> | $Enums.ReferralType
    value?: FloatFilter<"AffiliateReferral"> | number
    status?: EnumReferralStatusFilter<"AffiliateReferral"> | $Enums.ReferralStatus
    createAt?: DateTimeFilter<"AffiliateReferral"> | Date | string
    updateAt?: DateTimeFilter<"AffiliateReferral"> | Date | string
  }

  export type AppointmentCreateWithoutBusinessInput = {
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    pet: PetCreateNestedOneWithoutAppointmentsInput
    service?: ServiceCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutBusinessInput = {
    id?: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    petId: number
    serviceId?: number | null
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutBusinessInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutBusinessInput, AppointmentUncheckedCreateWithoutBusinessInput>
  }

  export type AppointmentCreateManyBusinessInputEnvelope = {
    data: AppointmentCreateManyBusinessInput | AppointmentCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutBusinessInput = {
    name: string
    email?: string | null
    phone?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    pets?: PetCreateNestedManyWithoutClientInput
    Sale?: SaleCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutBusinessInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutClientInput
    Sale?: SaleUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutBusinessInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBusinessInput, ClientUncheckedCreateWithoutBusinessInput>
  }

  export type ClientCreateManyBusinessInputEnvelope = {
    data: ClientCreateManyBusinessInput | ClientCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutBusinessInput = {
    name: string
    price: number
    stock: number
    createAt?: Date | string
    updateAt?: Date | string
    SaleItem?: SaleItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBusinessInput = {
    id?: number
    name: string
    price: number
    stock: number
    createAt?: Date | string
    updateAt?: Date | string
    SaleItem?: SaleItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput>
  }

  export type ProductCreateManyBusinessInputEnvelope = {
    data: ProductCreateManyBusinessInput | ProductCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutBusinessInput = {
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    client?: ClientCreateNestedOneWithoutSaleInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutBusinessInput = {
    id?: number
    clientId?: number | null
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutBusinessInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput>
  }

  export type SaleCreateManyBusinessInputEnvelope = {
    data: SaleCreateManyBusinessInput | SaleCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutBusinessInput = {
    name: string
    price: number
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
    Appointment?: AppointmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBusinessInput = {
    id?: number
    name: string
    price: number
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBusinessInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput>
  }

  export type ServiceCreateManyBusinessInputEnvelope = {
    data: ServiceCreateManyBusinessInput | ServiceCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBusinessInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createAt?: Date | string
    updateAt?: Date | string
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
    MedicalRecord?: MedicalRecordCreateNestedManyWithoutVetInput
    AffiliateReferral?: AffiliateReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutBusinessInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createAt?: Date | string
    updateAt?: Date | string
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
    MedicalRecord?: MedicalRecordUncheckedCreateNestedManyWithoutVetInput
    AffiliateReferral?: AffiliateReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutBusinessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
  }

  export type UserCreateManyBusinessInputEnvelope = {
    data: UserCreateManyBusinessInput | UserCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutBusinessInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutBusinessInput, AppointmentUncheckedUpdateWithoutBusinessInput>
    create: XOR<AppointmentCreateWithoutBusinessInput, AppointmentUncheckedCreateWithoutBusinessInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutBusinessInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutBusinessInput, AppointmentUncheckedUpdateWithoutBusinessInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutBusinessInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutBusinessInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    petId?: IntFilter<"Appointment"> | number
    serviceId?: IntNullableFilter<"Appointment"> | number | null
    businessId?: IntFilter<"Appointment"> | number
    notes?: StringNullableFilter<"Appointment"> | string | null
    createAt?: DateTimeFilter<"Appointment"> | Date | string
    updateAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type ClientUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutBusinessInput, ClientUncheckedUpdateWithoutBusinessInput>
    create: XOR<ClientCreateWithoutBusinessInput, ClientUncheckedCreateWithoutBusinessInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutBusinessInput, ClientUncheckedUpdateWithoutBusinessInput>
  }

  export type ClientUpdateManyWithWhereWithoutBusinessInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    businessId?: IntFilter<"Client"> | number
    createAt?: DateTimeFilter<"Client"> | Date | string
    updateAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBusinessInput, ProductUncheckedUpdateWithoutBusinessInput>
    create: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBusinessInput, ProductUncheckedUpdateWithoutBusinessInput>
  }

  export type ProductUpdateManyWithWhereWithoutBusinessInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    businessId?: IntFilter<"Product"> | number
    createAt?: DateTimeFilter<"Product"> | Date | string
    updateAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutBusinessInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutBusinessInput, SaleUncheckedUpdateWithoutBusinessInput>
    create: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutBusinessInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutBusinessInput, SaleUncheckedUpdateWithoutBusinessInput>
  }

  export type SaleUpdateManyWithWhereWithoutBusinessInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutBusinessInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: IntFilter<"Sale"> | number
    clientId?: IntNullableFilter<"Sale"> | number | null
    businessId?: IntFilter<"Sale"> | number
    total?: FloatFilter<"Sale"> | number
    dateSale?: DateTimeFilter<"Sale"> | Date | string
    createAt?: DateTimeFilter<"Sale"> | Date | string
    updateAt?: DateTimeFilter<"Sale"> | Date | string
  }

  export type ServiceUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutBusinessInput, ServiceUncheckedUpdateWithoutBusinessInput>
    create: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutBusinessInput, ServiceUncheckedUpdateWithoutBusinessInput>
  }

  export type ServiceUpdateManyWithWhereWithoutBusinessInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    duration?: IntFilter<"Service"> | number
    businessId?: IntFilter<"Service"> | number
    createAt?: DateTimeFilter<"Service"> | Date | string
    updateAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutBusinessInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBusinessInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
  }

  export type UserUpdateManyWithWhereWithoutBusinessInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBusinessInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    businessId?: IntNullableFilter<"User"> | number | null
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
  }

  export type BusinessCreateWithoutClientsInput = {
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    services?: ServiceCreateNestedManyWithoutBusinessInput
    users?: UserCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutClientsInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    services?: ServiceUncheckedCreateNestedManyWithoutBusinessInput
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutClientsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutClientsInput, BusinessUncheckedCreateWithoutClientsInput>
  }

  export type PetCreateWithoutClientInput = {
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPetInput
    records?: MedicalRecordCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutClientInput = {
    id?: number
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPetInput
    records?: MedicalRecordUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutClientInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutClientInput, PetUncheckedCreateWithoutClientInput>
  }

  export type PetCreateManyClientInputEnvelope = {
    data: PetCreateManyClientInput | PetCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutClientInput = {
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutClientInput = {
    id?: number
    businessId: number
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutClientInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput>
  }

  export type SaleCreateManyClientInputEnvelope = {
    data: SaleCreateManyClientInput | SaleCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutClientsInput = {
    update: XOR<BusinessUpdateWithoutClientsInput, BusinessUncheckedUpdateWithoutClientsInput>
    create: XOR<BusinessCreateWithoutClientsInput, BusinessUncheckedCreateWithoutClientsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutClientsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutClientsInput, BusinessUncheckedUpdateWithoutClientsInput>
  }

  export type BusinessUpdateWithoutClientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    services?: ServiceUpdateManyWithoutBusinessNestedInput
    users?: UserUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBusinessNestedInput
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type PetUpsertWithWhereUniqueWithoutClientInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutClientInput, PetUncheckedUpdateWithoutClientInput>
    create: XOR<PetCreateWithoutClientInput, PetUncheckedCreateWithoutClientInput>
  }

  export type PetUpdateWithWhereUniqueWithoutClientInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutClientInput, PetUncheckedUpdateWithoutClientInput>
  }

  export type PetUpdateManyWithWhereWithoutClientInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutClientInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringFilter<"Pet"> | string
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    clientId?: IntFilter<"Pet"> | number
    nextVaccineDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    lastFedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createAt?: DateTimeFilter<"Pet"> | Date | string
    updateAt?: DateTimeFilter<"Pet"> | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutClientInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutClientInput, SaleUncheckedUpdateWithoutClientInput>
    create: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutClientInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutClientInput, SaleUncheckedUpdateWithoutClientInput>
  }

  export type SaleUpdateManyWithWhereWithoutClientInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutClientInput>
  }

  export type AppointmentCreateWithoutPetInput = {
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutAppointmentsInput
    service?: ServiceCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPetInput = {
    id?: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    serviceId?: number | null
    businessId: number
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutPetInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPetInput, AppointmentUncheckedCreateWithoutPetInput>
  }

  export type AppointmentCreateManyPetInputEnvelope = {
    data: AppointmentCreateManyPetInput | AppointmentCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordCreateWithoutPetInput = {
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    vet?: UserCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutPetInput = {
    id?: number
    vetId?: number | null
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MedicalRecordCreateOrConnectWithoutPetInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutPetInput, MedicalRecordUncheckedCreateWithoutPetInput>
  }

  export type MedicalRecordCreateManyPetInputEnvelope = {
    data: MedicalRecordCreateManyPetInput | MedicalRecordCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutPetsInput = {
    name: string
    email?: string | null
    phone?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutClientsInput
    Sale?: SaleCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPetsInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
    Sale?: SaleUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPetsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPetsInput, ClientUncheckedCreateWithoutPetsInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPetInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPetInput, AppointmentUncheckedUpdateWithoutPetInput>
    create: XOR<AppointmentCreateWithoutPetInput, AppointmentUncheckedCreateWithoutPetInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPetInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPetInput, AppointmentUncheckedUpdateWithoutPetInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPetInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPetInput>
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutPetInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutPetInput, MedicalRecordUncheckedUpdateWithoutPetInput>
    create: XOR<MedicalRecordCreateWithoutPetInput, MedicalRecordUncheckedCreateWithoutPetInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutPetInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutPetInput, MedicalRecordUncheckedUpdateWithoutPetInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutPetInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutPetInput>
  }

  export type ClientUpsertWithoutPetsInput = {
    update: XOR<ClientUpdateWithoutPetsInput, ClientUncheckedUpdateWithoutPetsInput>
    create: XOR<ClientCreateWithoutPetsInput, ClientUncheckedCreateWithoutPetsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutPetsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutPetsInput, ClientUncheckedUpdateWithoutPetsInput>
  }

  export type ClientUpdateWithoutPetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutClientsNestedInput
    Sale?: SaleUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sale?: SaleUncheckedUpdateManyWithoutClientNestedInput
  }

  export type BusinessCreateWithoutAppointmentsInput = {
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    clients?: ClientCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    services?: ServiceCreateNestedManyWithoutBusinessInput
    users?: UserCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    services?: ServiceUncheckedCreateNestedManyWithoutBusinessInput
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutAppointmentsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutAppointmentsInput, BusinessUncheckedCreateWithoutAppointmentsInput>
  }

  export type PetCreateWithoutAppointmentsInput = {
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    records?: MedicalRecordCreateNestedManyWithoutPetInput
    client: ClientCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    clientId: number
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    records?: MedicalRecordUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutAppointmentsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutAppointmentsInput, PetUncheckedCreateWithoutAppointmentsInput>
  }

  export type ServiceCreateWithoutAppointmentInput = {
    name: string
    price: number
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutAppointmentInput = {
    id?: number
    name: string
    price: number
    duration: number
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutAppointmentInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAppointmentInput, ServiceUncheckedCreateWithoutAppointmentInput>
  }

  export type BusinessUpsertWithoutAppointmentsInput = {
    update: XOR<BusinessUpdateWithoutAppointmentsInput, BusinessUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<BusinessCreateWithoutAppointmentsInput, BusinessUncheckedCreateWithoutAppointmentsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutAppointmentsInput, BusinessUncheckedUpdateWithoutAppointmentsInput>
  }

  export type BusinessUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    services?: ServiceUpdateManyWithoutBusinessNestedInput
    users?: UserUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBusinessNestedInput
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type PetUpsertWithoutAppointmentsInput = {
    update: XOR<PetUpdateWithoutAppointmentsInput, PetUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PetCreateWithoutAppointmentsInput, PetUncheckedCreateWithoutAppointmentsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutAppointmentsInput, PetUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PetUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: MedicalRecordUpdateManyWithoutPetNestedInput
    client?: ClientUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: MedicalRecordUncheckedUpdateManyWithoutPetNestedInput
  }

  export type ServiceUpsertWithoutAppointmentInput = {
    update: XOR<ServiceUpdateWithoutAppointmentInput, ServiceUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ServiceCreateWithoutAppointmentInput, ServiceUncheckedCreateWithoutAppointmentInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAppointmentInput, ServiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type ServiceUpdateWithoutAppointmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateWithoutServiceInput = {
    date: Date | string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutAppointmentsInput
    pet: PetCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutServiceInput = {
    id?: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    petId: number
    businessId: number
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentCreateManyServiceInputEnvelope = {
    data: AppointmentCreateManyServiceInput | AppointmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutServicesInput = {
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutBusinessInput
    clients?: ClientCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    users?: UserCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutServicesInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutBusinessInput
    clients?: ClientUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutServicesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutServicesInput, BusinessUncheckedCreateWithoutServicesInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutServiceInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutServiceInput>
  }

  export type BusinessUpsertWithoutServicesInput = {
    update: XOR<BusinessUpdateWithoutServicesInput, BusinessUncheckedUpdateWithoutServicesInput>
    create: XOR<BusinessCreateWithoutServicesInput, BusinessUncheckedCreateWithoutServicesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutServicesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutServicesInput, BusinessUncheckedUpdateWithoutServicesInput>
  }

  export type BusinessUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutBusinessNestedInput
    clients?: ClientUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    users?: UserUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutBusinessNestedInput
    clients?: ClientUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateWithoutProductsInput = {
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutBusinessInput
    clients?: ClientCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    services?: ServiceCreateNestedManyWithoutBusinessInput
    users?: UserCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutBusinessInput
    clients?: ClientUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    services?: ServiceUncheckedCreateNestedManyWithoutBusinessInput
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutProductsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutProductsInput, BusinessUncheckedCreateWithoutProductsInput>
  }

  export type SaleItemCreateWithoutProductInput = {
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
    sale: SaleCreateNestedOneWithoutItemsInput
  }

  export type SaleItemUncheckedCreateWithoutProductInput = {
    id?: number
    saleId: number
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleItemCreateOrConnectWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemCreateManyProductInputEnvelope = {
    data: SaleItemCreateManyProductInput | SaleItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutProductsInput = {
    update: XOR<BusinessUpdateWithoutProductsInput, BusinessUncheckedUpdateWithoutProductsInput>
    create: XOR<BusinessCreateWithoutProductsInput, BusinessUncheckedCreateWithoutProductsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutProductsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutProductsInput, BusinessUncheckedUpdateWithoutProductsInput>
  }

  export type BusinessUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutBusinessNestedInput
    clients?: ClientUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    services?: ServiceUpdateManyWithoutBusinessNestedInput
    users?: UserUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutBusinessNestedInput
    clients?: ClientUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBusinessNestedInput
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutProductInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleItemScalarWhereInput = {
    AND?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    OR?: SaleItemScalarWhereInput[]
    NOT?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    id?: IntFilter<"SaleItem"> | number
    saleId?: IntFilter<"SaleItem"> | number
    productId?: IntFilter<"SaleItem"> | number
    quantity?: IntFilter<"SaleItem"> | number
    price?: FloatFilter<"SaleItem"> | number
    createAt?: DateTimeFilter<"SaleItem"> | Date | string
    updateAt?: DateTimeFilter<"SaleItem"> | Date | string
  }

  export type BusinessCreateWithoutSalesInput = {
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutBusinessInput
    clients?: ClientCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    services?: ServiceCreateNestedManyWithoutBusinessInput
    users?: UserCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutSalesInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutBusinessInput
    clients?: ClientUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    services?: ServiceUncheckedCreateNestedManyWithoutBusinessInput
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutSalesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutSalesInput, BusinessUncheckedCreateWithoutSalesInput>
  }

  export type ClientCreateWithoutSaleInput = {
    name: string
    email?: string | null
    phone?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutClientsInput
    pets?: PetCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSaleInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSaleInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSaleInput, ClientUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateWithoutSaleInput = {
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
    product: ProductCreateNestedOneWithoutSaleItemInput
  }

  export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: number
    productId: number
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateManySaleInputEnvelope = {
    data: SaleItemCreateManySaleInput | SaleItemCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutSalesInput = {
    update: XOR<BusinessUpdateWithoutSalesInput, BusinessUncheckedUpdateWithoutSalesInput>
    create: XOR<BusinessCreateWithoutSalesInput, BusinessUncheckedCreateWithoutSalesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutSalesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutSalesInput, BusinessUncheckedUpdateWithoutSalesInput>
  }

  export type BusinessUpdateWithoutSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutBusinessNestedInput
    clients?: ClientUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    services?: ServiceUpdateManyWithoutBusinessNestedInput
    users?: UserUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutBusinessNestedInput
    clients?: ClientUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBusinessNestedInput
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type ClientUpsertWithoutSaleInput = {
    update: XOR<ClientUpdateWithoutSaleInput, ClientUncheckedUpdateWithoutSaleInput>
    create: XOR<ClientCreateWithoutSaleInput, ClientUncheckedCreateWithoutSaleInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSaleInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSaleInput, ClientUncheckedUpdateWithoutSaleInput>
  }

  export type ClientUpdateWithoutSaleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutClientsNestedInput
    pets?: PetUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutClientNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type ProductCreateWithoutSaleItemInput = {
    name: string
    price: number
    stock: number
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutSaleItemInput = {
    id?: number
    name: string
    price: number
    stock: number
    businessId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutSaleItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleItemInput, ProductUncheckedCreateWithoutSaleItemInput>
  }

  export type SaleCreateWithoutItemsInput = {
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    business: BusinessCreateNestedOneWithoutSalesInput
    client?: ClientCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutItemsInput = {
    id?: number
    clientId?: number | null
    businessId: number
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type ProductUpsertWithoutSaleItemInput = {
    update: XOR<ProductUpdateWithoutSaleItemInput, ProductUncheckedUpdateWithoutSaleItemInput>
    create: XOR<ProductCreateWithoutSaleItemInput, ProductUncheckedCreateWithoutSaleItemInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleItemInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleItemInput, ProductUncheckedUpdateWithoutSaleItemInput>
  }

  export type ProductUpdateWithoutSaleItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpsertWithoutItemsInput = {
    update: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SaleUpdateWithoutItemsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutSalesNestedInput
    client?: ClientUpdateOneWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    businessId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateWithoutRecordsInput = {
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPetInput
    client: ClientCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutRecordsInput = {
    id?: number
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    clientId: number
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutRecordsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutRecordsInput, PetUncheckedCreateWithoutRecordsInput>
  }

  export type UserCreateWithoutMedicalRecordInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createAt?: Date | string
    updateAt?: Date | string
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
    business?: BusinessCreateNestedOneWithoutUsersInput
    AffiliateReferral?: AffiliateReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutMedicalRecordInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    businessId?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
    AffiliateReferral?: AffiliateReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutMedicalRecordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicalRecordInput, UserUncheckedCreateWithoutMedicalRecordInput>
  }

  export type PetUpsertWithoutRecordsInput = {
    update: XOR<PetUpdateWithoutRecordsInput, PetUncheckedUpdateWithoutRecordsInput>
    create: XOR<PetCreateWithoutRecordsInput, PetUncheckedCreateWithoutRecordsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutRecordsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutRecordsInput, PetUncheckedUpdateWithoutRecordsInput>
  }

  export type PetUpdateWithoutRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPetNestedInput
    client?: ClientUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPetNestedInput
  }

  export type UserUpsertWithoutMedicalRecordInput = {
    update: XOR<UserUpdateWithoutMedicalRecordInput, UserUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<UserCreateWithoutMedicalRecordInput, UserUncheckedCreateWithoutMedicalRecordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicalRecordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicalRecordInput, UserUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type UserUpdateWithoutMedicalRecordInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
    business?: BusinessUpdateOneWithoutUsersNestedInput
    AffiliateReferral?: AffiliateReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicalRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
    AffiliateReferral?: AffiliateReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserCreateWithoutAffiliateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createAt?: Date | string
    updateAt?: Date | string
    MedicalRecord?: MedicalRecordCreateNestedManyWithoutVetInput
    business?: BusinessCreateNestedOneWithoutUsersInput
    AffiliateReferral?: AffiliateReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutAffiliateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    businessId?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    MedicalRecord?: MedicalRecordUncheckedCreateNestedManyWithoutVetInput
    AffiliateReferral?: AffiliateReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutAffiliateInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAffiliateInput, UserUncheckedCreateWithoutAffiliateInput>
  }

  export type AffiliateReferralCreateWithoutAffiliateInput = {
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
    referredUser?: UserCreateNestedOneWithoutAffiliateReferralInput
  }

  export type AffiliateReferralUncheckedCreateWithoutAffiliateInput = {
    id?: number
    referredUserId?: number | null
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateReferralCreateOrConnectWithoutAffiliateInput = {
    where: AffiliateReferralWhereUniqueInput
    create: XOR<AffiliateReferralCreateWithoutAffiliateInput, AffiliateReferralUncheckedCreateWithoutAffiliateInput>
  }

  export type AffiliateReferralCreateManyAffiliateInputEnvelope = {
    data: AffiliateReferralCreateManyAffiliateInput | AffiliateReferralCreateManyAffiliateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAffiliateInput = {
    update: XOR<UserUpdateWithoutAffiliateInput, UserUncheckedUpdateWithoutAffiliateInput>
    create: XOR<UserCreateWithoutAffiliateInput, UserUncheckedCreateWithoutAffiliateInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAffiliateInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAffiliateInput, UserUncheckedUpdateWithoutAffiliateInput>
  }

  export type UserUpdateWithoutAffiliateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalRecord?: MedicalRecordUpdateManyWithoutVetNestedInput
    business?: BusinessUpdateOneWithoutUsersNestedInput
    AffiliateReferral?: AffiliateReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAffiliateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalRecord?: MedicalRecordUncheckedUpdateManyWithoutVetNestedInput
    AffiliateReferral?: AffiliateReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type AffiliateReferralUpsertWithWhereUniqueWithoutAffiliateInput = {
    where: AffiliateReferralWhereUniqueInput
    update: XOR<AffiliateReferralUpdateWithoutAffiliateInput, AffiliateReferralUncheckedUpdateWithoutAffiliateInput>
    create: XOR<AffiliateReferralCreateWithoutAffiliateInput, AffiliateReferralUncheckedCreateWithoutAffiliateInput>
  }

  export type AffiliateReferralUpdateWithWhereUniqueWithoutAffiliateInput = {
    where: AffiliateReferralWhereUniqueInput
    data: XOR<AffiliateReferralUpdateWithoutAffiliateInput, AffiliateReferralUncheckedUpdateWithoutAffiliateInput>
  }

  export type AffiliateReferralUpdateManyWithWhereWithoutAffiliateInput = {
    where: AffiliateReferralScalarWhereInput
    data: XOR<AffiliateReferralUpdateManyMutationInput, AffiliateReferralUncheckedUpdateManyWithoutAffiliateInput>
  }

  export type AffiliateCreateWithoutAffiliateReferralInput = {
    code: string
    earnings?: number
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutAffiliateInput
  }

  export type AffiliateUncheckedCreateWithoutAffiliateReferralInput = {
    id?: number
    userId: number
    code: string
    earnings?: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateCreateOrConnectWithoutAffiliateReferralInput = {
    where: AffiliateWhereUniqueInput
    create: XOR<AffiliateCreateWithoutAffiliateReferralInput, AffiliateUncheckedCreateWithoutAffiliateReferralInput>
  }

  export type UserCreateWithoutAffiliateReferralInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createAt?: Date | string
    updateAt?: Date | string
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
    MedicalRecord?: MedicalRecordCreateNestedManyWithoutVetInput
    business?: BusinessCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAffiliateReferralInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    businessId?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
    MedicalRecord?: MedicalRecordUncheckedCreateNestedManyWithoutVetInput
  }

  export type UserCreateOrConnectWithoutAffiliateReferralInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAffiliateReferralInput, UserUncheckedCreateWithoutAffiliateReferralInput>
  }

  export type AffiliateUpsertWithoutAffiliateReferralInput = {
    update: XOR<AffiliateUpdateWithoutAffiliateReferralInput, AffiliateUncheckedUpdateWithoutAffiliateReferralInput>
    create: XOR<AffiliateCreateWithoutAffiliateReferralInput, AffiliateUncheckedCreateWithoutAffiliateReferralInput>
    where?: AffiliateWhereInput
  }

  export type AffiliateUpdateToOneWithWhereWithoutAffiliateReferralInput = {
    where?: AffiliateWhereInput
    data: XOR<AffiliateUpdateWithoutAffiliateReferralInput, AffiliateUncheckedUpdateWithoutAffiliateReferralInput>
  }

  export type AffiliateUpdateWithoutAffiliateReferralInput = {
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateWithoutAffiliateReferralInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAffiliateReferralInput = {
    update: XOR<UserUpdateWithoutAffiliateReferralInput, UserUncheckedUpdateWithoutAffiliateReferralInput>
    create: XOR<UserCreateWithoutAffiliateReferralInput, UserUncheckedCreateWithoutAffiliateReferralInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAffiliateReferralInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAffiliateReferralInput, UserUncheckedUpdateWithoutAffiliateReferralInput>
  }

  export type UserUpdateWithoutAffiliateReferralInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
    MedicalRecord?: MedicalRecordUpdateManyWithoutVetNestedInput
    business?: BusinessUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAffiliateReferralInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
    MedicalRecord?: MedicalRecordUncheckedUpdateManyWithoutVetNestedInput
  }

  export type AffiliateCreateManyUserInput = {
    id?: number
    code: string
    earnings?: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MedicalRecordCreateManyVetInput = {
    id?: number
    petId: number
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateReferralCreateManyReferredUserInput = {
    id?: number
    affiliateId: number
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AffiliateReferral?: AffiliateReferralUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AffiliateReferral?: AffiliateReferralUncheckedUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUpdateWithoutVetInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutVetInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUncheckedUpdateManyWithoutVetInput = {
    id?: IntFieldUpdateOperationsInput | number
    petId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateReferralUpdateWithoutReferredUserInput = {
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliate?: AffiliateUpdateOneRequiredWithoutAffiliateReferralNestedInput
  }

  export type AffiliateReferralUncheckedUpdateWithoutReferredUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    affiliateId?: IntFieldUpdateOperationsInput | number
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateReferralUncheckedUpdateManyWithoutReferredUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    affiliateId?: IntFieldUpdateOperationsInput | number
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyBusinessInput = {
    id?: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    petId: number
    serviceId?: number | null
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ClientCreateManyBusinessInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ProductCreateManyBusinessInput = {
    id?: number
    name: string
    price: number
    stock: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleCreateManyBusinessInput = {
    id?: number
    clientId?: number | null
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ServiceCreateManyBusinessInput = {
    id?: number
    name: string
    price: number
    duration: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserCreateManyBusinessInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AppointmentUpdateWithoutBusinessInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    petId?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    petId?: IntFieldUpdateOperationsInput | number
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutBusinessInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutClientNestedInput
    Sale?: SaleUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutClientNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutBusinessInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SaleItem?: SaleItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SaleItem?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutBusinessInput = {
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutSaleNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpdateWithoutBusinessInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointment?: AppointmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointment?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutBusinessInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
    MedicalRecord?: MedicalRecordUpdateManyWithoutVetNestedInput
    AffiliateReferral?: AffiliateReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
    MedicalRecord?: MedicalRecordUncheckedUpdateManyWithoutVetNestedInput
    AffiliateReferral?: AffiliateReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateManyClientInput = {
    id?: number
    name: string
    species: string
    breed: string
    birthDate?: Date | string | null
    nextVaccineDate?: Date | string | null
    lastFedAt?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleCreateManyClientInput = {
    id?: number
    businessId: number
    total: number
    dateSale?: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PetUpdateWithoutClientInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPetNestedInput
    records?: MedicalRecordUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPetNestedInput
    records?: MedicalRecordUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVaccineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutClientInput = {
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    dateSale?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyPetInput = {
    id?: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    serviceId?: number | null
    businessId: number
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MedicalRecordCreateManyPetInput = {
    id?: number
    vetId?: number | null
    date?: Date | string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AppointmentUpdateWithoutPetInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    businessId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    serviceId?: NullableIntFieldUpdateOperationsInput | number | null
    businessId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUpdateWithoutPetInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vet?: UserUpdateOneWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    vetId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    vetId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyServiceInput = {
    id?: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    petId: number
    businessId: number
    notes?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AppointmentUpdateWithoutServiceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAppointmentsNestedInput
    pet?: PetUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    petId?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    petId?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManyProductInput = {
    id?: number
    saleId: number
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManySaleInput = {
    id?: number
    productId: number
    quantity: number
    price: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SaleItemUpdateWithoutSaleInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutSaleItemNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateReferralCreateManyAffiliateInput = {
    id?: number
    referredUserId?: number | null
    type: $Enums.ReferralType
    value: number
    status: $Enums.ReferralStatus
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AffiliateReferralUpdateWithoutAffiliateInput = {
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUser?: UserUpdateOneWithoutAffiliateReferralNestedInput
  }

  export type AffiliateReferralUncheckedUpdateWithoutAffiliateInput = {
    id?: IntFieldUpdateOperationsInput | number
    referredUserId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateReferralUncheckedUpdateManyWithoutAffiliateInput = {
    id?: IntFieldUpdateOperationsInput | number
    referredUserId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    value?: FloatFieldUpdateOperationsInput | number
    status?: EnumReferralStatusFieldUpdateOperationsInput | $Enums.ReferralStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}