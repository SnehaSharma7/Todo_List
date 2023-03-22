export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Boolean']>;
  _gt: InputMaybe<Scalars['Boolean']>;
  _gte: InputMaybe<Scalars['Boolean']>;
  _in: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Boolean']>;
  _lte: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<Scalars['Boolean']>;
  _nin: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Int']>;
  _gt: InputMaybe<Scalars['Int']>;
  _gte: InputMaybe<Scalars['Int']>;
  _in: InputMaybe<Array<Scalars['Int']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Int']>;
  _lte: InputMaybe<Scalars['Int']>;
  _neq: InputMaybe<Scalars['Int']>;
  _nin: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']>;
  _gt: InputMaybe<Scalars['String']>;
  _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']>;
  _in: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']>;
  _lt: InputMaybe<Scalars['String']>;
  _lte: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']>;
  _nin: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "ToDo_List" */
export type ToDo_List = {
  __typename: 'ToDo_List';
  body: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  status: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "ToDo_List" */
export type ToDo_List_Aggregate = {
  __typename: 'ToDo_List_aggregate';
  aggregate: Maybe<ToDo_List_Aggregate_Fields>;
  nodes: Array<ToDo_List>;
};

/** aggregate fields of "ToDo_List" */
export type ToDo_List_Aggregate_Fields = {
  __typename: 'ToDo_List_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<ToDo_List_Max_Fields>;
  min: Maybe<ToDo_List_Min_Fields>;
};


/** aggregate fields of "ToDo_List" */
export type ToDo_List_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<ToDo_List_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ToDo_List". All fields are combined with a logical 'AND'. */
export type ToDo_List_Bool_Exp = {
  _and: InputMaybe<Array<ToDo_List_Bool_Exp>>;
  _not: InputMaybe<ToDo_List_Bool_Exp>;
  _or: InputMaybe<Array<ToDo_List_Bool_Exp>>;
  body: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  status: InputMaybe<Boolean_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "ToDo_List" */
export enum ToDo_List_Constraint {
  /** unique or primary key constraint on columns "id" */
  ToDoListPkey = 'ToDo_List_pkey'
}

/** input type for inserting data into table "ToDo_List" */
export type ToDo_List_Insert_Input = {
  body: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['Boolean']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ToDo_List_Max_Fields = {
  __typename: 'ToDo_List_max_fields';
  body: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ToDo_List_Min_Fields = {
  __typename: 'ToDo_List_min_fields';
  body: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "ToDo_List" */
export type ToDo_List_Mutation_Response = {
  __typename: 'ToDo_List_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ToDo_List>;
};

/** on_conflict condition type for table "ToDo_List" */
export type ToDo_List_On_Conflict = {
  constraint: ToDo_List_Constraint;
  update_columns: Array<ToDo_List_Update_Column>;
  where: InputMaybe<ToDo_List_Bool_Exp>;
};

/** Ordering options when selecting data from "ToDo_List". */
export type ToDo_List_Order_By = {
  body: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** primary key columns input for table: ToDo_List */
export type ToDo_List_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ToDo_List" */
export enum ToDo_List_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "ToDo_List" */
export type ToDo_List_Set_Input = {
  body: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['Boolean']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "ToDo_List" */
export type ToDo_List_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ToDo_List_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ToDo_List_Stream_Cursor_Value_Input = {
  body: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['Boolean']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "ToDo_List" */
export enum ToDo_List_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type ToDo_List_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<ToDo_List_Set_Input>;
  /** filter the rows which have to be updated */
  where: ToDo_List_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "customer" */
export type Customer = {
  __typename: 'customer';
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  ip_address: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  phone: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};


/** columns and relationships of "customer" */
export type CustomerOrdersArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "customer" */
export type CustomerOrders_AggregateArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
  __typename: 'customer_aggregate';
  aggregate: Maybe<Customer_Aggregate_Fields>;
  nodes: Array<Customer>;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
  __typename: 'customer_aggregate_fields';
  avg: Maybe<Customer_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Customer_Max_Fields>;
  min: Maybe<Customer_Min_Fields>;
  stddev: Maybe<Customer_Stddev_Fields>;
  stddev_pop: Maybe<Customer_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Customer_Stddev_Samp_Fields>;
  sum: Maybe<Customer_Sum_Fields>;
  var_pop: Maybe<Customer_Var_Pop_Fields>;
  var_samp: Maybe<Customer_Var_Samp_Fields>;
  variance: Maybe<Customer_Variance_Fields>;
};


/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Customer_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Customer_Avg_Fields = {
  __typename: 'customer_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and: InputMaybe<Array<Customer_Bool_Exp>>;
  _not: InputMaybe<Customer_Bool_Exp>;
  _or: InputMaybe<Array<Customer_Bool_Exp>>;
  email: InputMaybe<String_Comparison_Exp>;
  first_name: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  ip_address: InputMaybe<String_Comparison_Exp>;
  last_name: InputMaybe<String_Comparison_Exp>;
  orders: InputMaybe<Order_Bool_Exp>;
  orders_aggregate: InputMaybe<Order_Aggregate_Bool_Exp>;
  phone: InputMaybe<String_Comparison_Exp>;
  username: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomerPkey = 'customer_pkey'
}

/** input type for incrementing numeric columns in table "customer" */
export type Customer_Inc_Input = {
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
  email: InputMaybe<Scalars['String']>;
  first_name: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  ip_address: InputMaybe<Scalars['String']>;
  last_name: InputMaybe<Scalars['String']>;
  orders: InputMaybe<Order_Arr_Rel_Insert_Input>;
  phone: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename: 'customer_max_fields';
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  ip_address: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename: 'customer_min_fields';
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  ip_address: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customer" */
export type Customer_Mutation_Response = {
  __typename: 'customer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer>;
};

/** input type for inserting object relation for remote table "customer" */
export type Customer_Obj_Rel_Insert_Input = {
  data: Customer_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Customer_On_Conflict>;
};

/** on_conflict condition type for table "customer" */
export type Customer_On_Conflict = {
  constraint: Customer_Constraint;
  update_columns: Array<Customer_Update_Column>;
  where: InputMaybe<Customer_Bool_Exp>;
};

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
  email: InputMaybe<Order_By>;
  first_name: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  ip_address: InputMaybe<Order_By>;
  last_name: InputMaybe<Order_By>;
  orders_aggregate: InputMaybe<Order_Aggregate_Order_By>;
  phone: InputMaybe<Order_By>;
  username: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer */
export type Customer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  email: InputMaybe<Scalars['String']>;
  first_name: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  ip_address: InputMaybe<Scalars['String']>;
  last_name: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Customer_Stddev_Fields = {
  __typename: 'customer_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Customer_Stddev_Pop_Fields = {
  __typename: 'customer_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Customer_Stddev_Samp_Fields = {
  __typename: 'customer_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "customer" */
export type Customer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Stream_Cursor_Value_Input = {
  email: InputMaybe<Scalars['String']>;
  first_name: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  ip_address: InputMaybe<Scalars['String']>;
  last_name: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Customer_Sum_Fields = {
  __typename: 'customer_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Username = 'username'
}

export type Customer_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Customer_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Customer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customer_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Customer_Var_Pop_Fields = {
  __typename: 'customer_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Customer_Var_Samp_Fields = {
  __typename: 'customer_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Customer_Variance_Fields = {
  __typename: 'customer_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename: 'mutation_root';
  /** delete data from the table: "ToDo_List" */
  delete_ToDo_List: Maybe<ToDo_List_Mutation_Response>;
  /** delete single row from the table: "ToDo_List" */
  delete_ToDo_List_by_pk: Maybe<ToDo_List>;
  /** delete data from the table: "customer" */
  delete_customer: Maybe<Customer_Mutation_Response>;
  /** delete single row from the table: "customer" */
  delete_customer_by_pk: Maybe<Customer>;
  /** delete data from the table: "order" */
  delete_order: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk: Maybe<Order>;
  /** insert data into the table: "ToDo_List" */
  insert_ToDo_List: Maybe<ToDo_List_Mutation_Response>;
  /** insert a single row into the table: "ToDo_List" */
  insert_ToDo_List_one: Maybe<ToDo_List>;
  /** insert data into the table: "customer" */
  insert_customer: Maybe<Customer_Mutation_Response>;
  /** insert a single row into the table: "customer" */
  insert_customer_one: Maybe<Customer>;
  /** insert data into the table: "order" */
  insert_order: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one: Maybe<Order>;
  /** update data of the table: "ToDo_List" */
  update_ToDo_List: Maybe<ToDo_List_Mutation_Response>;
  /** update single row of the table: "ToDo_List" */
  update_ToDo_List_by_pk: Maybe<ToDo_List>;
  /** update multiples rows of table: "ToDo_List" */
  update_ToDo_List_many: Maybe<Array<Maybe<ToDo_List_Mutation_Response>>>;
  /** update data of the table: "customer" */
  update_customer: Maybe<Customer_Mutation_Response>;
  /** update single row of the table: "customer" */
  update_customer_by_pk: Maybe<Customer>;
  /** update multiples rows of table: "customer" */
  update_customer_many: Maybe<Array<Maybe<Customer_Mutation_Response>>>;
  /** update data of the table: "order" */
  update_order: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk: Maybe<Order>;
  /** update multiples rows of table: "order" */
  update_order_many: Maybe<Array<Maybe<Order_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ToDo_ListArgs = {
  where: ToDo_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ToDo_List_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CustomerArgs = {
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ToDo_ListArgs = {
  objects: Array<ToDo_List_Insert_Input>;
  on_conflict: InputMaybe<ToDo_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ToDo_List_OneArgs = {
  object: ToDo_List_Insert_Input;
  on_conflict: InputMaybe<ToDo_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomerArgs = {
  objects: Array<Customer_Insert_Input>;
  on_conflict: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_OneArgs = {
  object: Customer_Insert_Input;
  on_conflict: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ToDo_ListArgs = {
  _set: InputMaybe<ToDo_List_Set_Input>;
  where: ToDo_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ToDo_List_By_PkArgs = {
  _set: InputMaybe<ToDo_List_Set_Input>;
  pk_columns: ToDo_List_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ToDo_List_ManyArgs = {
  updates: Array<ToDo_List_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomerArgs = {
  _inc: InputMaybe<Customer_Inc_Input>;
  _set: InputMaybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_By_PkArgs = {
  _inc: InputMaybe<Customer_Inc_Input>;
  _set: InputMaybe<Customer_Set_Input>;
  pk_columns: Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_ManyArgs = {
  updates: Array<Customer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc: InputMaybe<Order_Inc_Input>;
  _set: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc: InputMaybe<Order_Inc_Input>;
  _set: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ManyArgs = {
  updates: Array<Order_Updates>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename: 'order';
  /** An object relationship */
  customer: Maybe<Customer>;
  customer_id: Maybe<Scalars['Int']>;
  discount_price: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  order_date: Maybe<Scalars['String']>;
  product: Maybe<Scalars['String']>;
  purchase_price: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['String']>;
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename: 'order_aggregate';
  aggregate: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

export type Order_Aggregate_Bool_Exp = {
  count: InputMaybe<Order_Aggregate_Bool_Exp_Count>;
};

export type Order_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Order_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<Order_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename: 'order_aggregate_fields';
  avg: Maybe<Order_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Order_Max_Fields>;
  min: Maybe<Order_Min_Fields>;
  stddev: Maybe<Order_Stddev_Fields>;
  stddev_pop: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Order_Stddev_Samp_Fields>;
  sum: Maybe<Order_Sum_Fields>;
  var_pop: Maybe<Order_Var_Pop_Fields>;
  var_samp: Maybe<Order_Var_Samp_Fields>;
  variance: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Order_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg: InputMaybe<Order_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Order_Max_Order_By>;
  min: InputMaybe<Order_Min_Order_By>;
  stddev: InputMaybe<Order_Stddev_Order_By>;
  stddev_pop: InputMaybe<Order_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Order_Stddev_Samp_Order_By>;
  sum: InputMaybe<Order_Sum_Order_By>;
  var_pop: InputMaybe<Order_Var_Pop_Order_By>;
  var_samp: InputMaybe<Order_Var_Samp_Order_By>;
  variance: InputMaybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename: 'order_avg_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  customer_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and: InputMaybe<Array<Order_Bool_Exp>>;
  _not: InputMaybe<Order_Bool_Exp>;
  _or: InputMaybe<Array<Order_Bool_Exp>>;
  customer: InputMaybe<Customer_Bool_Exp>;
  customer_id: InputMaybe<Int_Comparison_Exp>;
  discount_price: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  order_date: InputMaybe<String_Comparison_Exp>;
  product: InputMaybe<String_Comparison_Exp>;
  purchase_price: InputMaybe<String_Comparison_Exp>;
  transaction_id: InputMaybe<String_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  customer_id: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  customer: InputMaybe<Customer_Obj_Rel_Insert_Input>;
  customer_id: InputMaybe<Scalars['Int']>;
  discount_price: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  order_date: InputMaybe<Scalars['String']>;
  product: InputMaybe<Scalars['String']>;
  purchase_price: InputMaybe<Scalars['String']>;
  transaction_id: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename: 'order_max_fields';
  customer_id: Maybe<Scalars['Int']>;
  discount_price: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  order_date: Maybe<Scalars['String']>;
  product: Maybe<Scalars['String']>;
  purchase_price: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  customer_id: InputMaybe<Order_By>;
  discount_price: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  order_date: InputMaybe<Order_By>;
  product: InputMaybe<Order_By>;
  purchase_price: InputMaybe<Order_By>;
  transaction_id: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename: 'order_min_fields';
  customer_id: Maybe<Scalars['Int']>;
  discount_price: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  order_date: Maybe<Scalars['String']>;
  product: Maybe<Scalars['String']>;
  purchase_price: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  customer_id: InputMaybe<Order_By>;
  discount_price: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  order_date: InputMaybe<Order_By>;
  product: InputMaybe<Order_By>;
  purchase_price: InputMaybe<Order_By>;
  transaction_id: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** on_conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns: Array<Order_Update_Column>;
  where: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  customer: InputMaybe<Customer_Order_By>;
  customer_id: InputMaybe<Order_By>;
  discount_price: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  order_date: InputMaybe<Order_By>;
  product: InputMaybe<Order_By>;
  purchase_price: InputMaybe<Order_By>;
  transaction_id: InputMaybe<Order_By>;
};

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DiscountPrice = 'discount_price',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  Product = 'product',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  TransactionId = 'transaction_id'
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  customer_id: InputMaybe<Scalars['Int']>;
  discount_price: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  order_date: InputMaybe<Scalars['String']>;
  product: InputMaybe<Scalars['String']>;
  purchase_price: InputMaybe<Scalars['String']>;
  transaction_id: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename: 'order_stddev_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  customer_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename: 'order_stddev_pop_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  customer_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename: 'order_stddev_samp_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  customer_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order" */
export type Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Stream_Cursor_Value_Input = {
  customer_id: InputMaybe<Scalars['Int']>;
  discount_price: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  order_date: InputMaybe<Scalars['String']>;
  product: InputMaybe<Scalars['String']>;
  purchase_price: InputMaybe<Scalars['String']>;
  transaction_id: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename: 'order_sum_fields';
  customer_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  customer_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DiscountPrice = 'discount_price',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  Product = 'product',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  TransactionId = 'transaction_id'
}

export type Order_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Order_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Order_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename: 'order_var_pop_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  customer_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename: 'order_var_samp_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  customer_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename: 'order_variance_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  customer_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename: 'query_root';
  /** fetch data from the table: "ToDo_List" */
  ToDo_List: Array<ToDo_List>;
  /** fetch aggregated fields from the table: "ToDo_List" */
  ToDo_List_aggregate: ToDo_List_Aggregate;
  /** fetch data from the table: "ToDo_List" using primary key columns */
  ToDo_List_by_pk: Maybe<ToDo_List>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk: Maybe<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk: Maybe<Order>;
};


export type Query_RootToDo_ListArgs = {
  distinct_on: InputMaybe<Array<ToDo_List_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<ToDo_List_Order_By>>;
  where: InputMaybe<ToDo_List_Bool_Exp>;
};


export type Query_RootToDo_List_AggregateArgs = {
  distinct_on: InputMaybe<Array<ToDo_List_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<ToDo_List_Order_By>>;
  where: InputMaybe<ToDo_List_Bool_Exp>;
};


export type Query_RootToDo_List_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCustomerArgs = {
  distinct_on: InputMaybe<Array<Customer_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Customer_Order_By>>;
  where: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_AggregateArgs = {
  distinct_on: InputMaybe<Array<Customer_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Customer_Order_By>>;
  where: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrderArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename: 'subscription_root';
  /** fetch data from the table: "ToDo_List" */
  ToDo_List: Array<ToDo_List>;
  /** fetch aggregated fields from the table: "ToDo_List" */
  ToDo_List_aggregate: ToDo_List_Aggregate;
  /** fetch data from the table: "ToDo_List" using primary key columns */
  ToDo_List_by_pk: Maybe<ToDo_List>;
  /** fetch data from the table in a streaming manner: "ToDo_List" */
  ToDo_List_stream: Array<ToDo_List>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk: Maybe<Customer>;
  /** fetch data from the table in a streaming manner: "customer" */
  customer_stream: Array<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk: Maybe<Order>;
  /** fetch data from the table in a streaming manner: "order" */
  order_stream: Array<Order>;
};


export type Subscription_RootToDo_ListArgs = {
  distinct_on: InputMaybe<Array<ToDo_List_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<ToDo_List_Order_By>>;
  where: InputMaybe<ToDo_List_Bool_Exp>;
};


export type Subscription_RootToDo_List_AggregateArgs = {
  distinct_on: InputMaybe<Array<ToDo_List_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<ToDo_List_Order_By>>;
  where: InputMaybe<ToDo_List_Bool_Exp>;
};


export type Subscription_RootToDo_List_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootToDo_List_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ToDo_List_Stream_Cursor_Input>>;
  where: InputMaybe<ToDo_List_Bool_Exp>;
};


export type Subscription_RootCustomerArgs = {
  distinct_on: InputMaybe<Array<Customer_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Customer_Order_By>>;
  where: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_AggregateArgs = {
  distinct_on: InputMaybe<Array<Customer_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Customer_Order_By>>;
  where: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCustomer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>;
  where: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootOrderArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrder_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Order_Stream_Cursor_Input>>;
  where: InputMaybe<Order_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']>;
  _gt: InputMaybe<Scalars['timestamptz']>;
  _gte: InputMaybe<Scalars['timestamptz']>;
  _in: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamptz']>;
  _lte: InputMaybe<Scalars['timestamptz']>;
  _neq: InputMaybe<Scalars['timestamptz']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: InputMaybe<Scalars['uuid']>;
  _gt: InputMaybe<Scalars['uuid']>;
  _gte: InputMaybe<Scalars['uuid']>;
  _in: InputMaybe<Array<Scalars['uuid']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['uuid']>;
  _lte: InputMaybe<Scalars['uuid']>;
  _neq: InputMaybe<Scalars['uuid']>;
  _nin: InputMaybe<Array<Scalars['uuid']>>;
};
