import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export const namedOperations = {
  Query: {
    getAllToDoList: 'getAllToDoList' as const
  },
  Mutation: {
    deletebyId: 'deletebyId' as const,
    insertbyName: 'insertbyName' as const,
    updateNamebyId: 'updateNamebyId' as const,
    updateStatusbyId: 'updateStatusbyId' as const
  }
}
export type ToDo_ListKeySpecifier = ('body' | 'created_at' | 'id' | 'name' | 'status' | 'updated_at' | ToDo_ListKeySpecifier)[];
export type ToDo_ListFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ToDo_List_aggregateKeySpecifier = ('aggregate' | 'nodes' | ToDo_List_aggregateKeySpecifier)[];
export type ToDo_List_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ToDo_List_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | ToDo_List_aggregate_fieldsKeySpecifier)[];
export type ToDo_List_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ToDo_List_max_fieldsKeySpecifier = ('body' | 'created_at' | 'id' | 'name' | 'updated_at' | ToDo_List_max_fieldsKeySpecifier)[];
export type ToDo_List_max_fieldsFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ToDo_List_min_fieldsKeySpecifier = ('body' | 'created_at' | 'id' | 'name' | 'updated_at' | ToDo_List_min_fieldsKeySpecifier)[];
export type ToDo_List_min_fieldsFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ToDo_List_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | ToDo_List_mutation_responseKeySpecifier)[];
export type ToDo_List_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customerKeySpecifier = ('email' | 'first_name' | 'id' | 'ip_address' | 'last_name' | 'orders' | 'orders_aggregate' | 'phone' | 'username' | customerKeySpecifier)[];
export type customerFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip_address?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	orders_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_aggregateKeySpecifier = ('aggregate' | 'nodes' | customer_aggregateKeySpecifier)[];
export type customer_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | customer_aggregate_fieldsKeySpecifier)[];
export type customer_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_avg_fieldsKeySpecifier = ('id' | customer_avg_fieldsKeySpecifier)[];
export type customer_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_max_fieldsKeySpecifier = ('email' | 'first_name' | 'id' | 'ip_address' | 'last_name' | 'phone' | 'username' | customer_max_fieldsKeySpecifier)[];
export type customer_max_fieldsFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip_address?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_min_fieldsKeySpecifier = ('email' | 'first_name' | 'id' | 'ip_address' | 'last_name' | 'phone' | 'username' | customer_min_fieldsKeySpecifier)[];
export type customer_min_fieldsFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip_address?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | customer_mutation_responseKeySpecifier)[];
export type customer_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_stddev_fieldsKeySpecifier = ('id' | customer_stddev_fieldsKeySpecifier)[];
export type customer_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_stddev_pop_fieldsKeySpecifier = ('id' | customer_stddev_pop_fieldsKeySpecifier)[];
export type customer_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_stddev_samp_fieldsKeySpecifier = ('id' | customer_stddev_samp_fieldsKeySpecifier)[];
export type customer_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_sum_fieldsKeySpecifier = ('id' | customer_sum_fieldsKeySpecifier)[];
export type customer_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_var_pop_fieldsKeySpecifier = ('id' | customer_var_pop_fieldsKeySpecifier)[];
export type customer_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_var_samp_fieldsKeySpecifier = ('id' | customer_var_samp_fieldsKeySpecifier)[];
export type customer_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type customer_variance_fieldsKeySpecifier = ('id' | customer_variance_fieldsKeySpecifier)[];
export type customer_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_ToDo_List' | 'delete_ToDo_List_by_pk' | 'delete_customer' | 'delete_customer_by_pk' | 'delete_order' | 'delete_order_by_pk' | 'insert_ToDo_List' | 'insert_ToDo_List_one' | 'insert_customer' | 'insert_customer_one' | 'insert_order' | 'insert_order_one' | 'update_ToDo_List' | 'update_ToDo_List_by_pk' | 'update_ToDo_List_many' | 'update_customer' | 'update_customer_by_pk' | 'update_customer_many' | 'update_order' | 'update_order_by_pk' | 'update_order_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_ToDo_List?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_ToDo_List_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_customer?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_customer_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_order?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_order_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_ToDo_List?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_ToDo_List_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_customer?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_customer_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_order?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_order_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ToDo_List?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ToDo_List_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ToDo_List_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_customer?: FieldPolicy<any> | FieldReadFunction<any>,
	update_customer_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_customer_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_order?: FieldPolicy<any> | FieldReadFunction<any>,
	update_order_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_order_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type orderKeySpecifier = ('customer' | 'customer_id' | 'discount_price' | 'id' | 'order_date' | 'product' | 'purchase_price' | 'transaction_id' | orderKeySpecifier)[];
export type orderFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	discount_price?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_date?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_price?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_aggregateKeySpecifier = ('aggregate' | 'nodes' | order_aggregateKeySpecifier)[];
export type order_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | order_aggregate_fieldsKeySpecifier)[];
export type order_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_avg_fieldsKeySpecifier = ('customer_id' | 'id' | order_avg_fieldsKeySpecifier)[];
export type order_avg_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_max_fieldsKeySpecifier = ('customer_id' | 'discount_price' | 'id' | 'order_date' | 'product' | 'purchase_price' | 'transaction_id' | order_max_fieldsKeySpecifier)[];
export type order_max_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	discount_price?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_date?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_price?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_min_fieldsKeySpecifier = ('customer_id' | 'discount_price' | 'id' | 'order_date' | 'product' | 'purchase_price' | 'transaction_id' | order_min_fieldsKeySpecifier)[];
export type order_min_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	discount_price?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	order_date?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase_price?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | order_mutation_responseKeySpecifier)[];
export type order_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_stddev_fieldsKeySpecifier = ('customer_id' | 'id' | order_stddev_fieldsKeySpecifier)[];
export type order_stddev_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_stddev_pop_fieldsKeySpecifier = ('customer_id' | 'id' | order_stddev_pop_fieldsKeySpecifier)[];
export type order_stddev_pop_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_stddev_samp_fieldsKeySpecifier = ('customer_id' | 'id' | order_stddev_samp_fieldsKeySpecifier)[];
export type order_stddev_samp_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_sum_fieldsKeySpecifier = ('customer_id' | 'id' | order_sum_fieldsKeySpecifier)[];
export type order_sum_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_var_pop_fieldsKeySpecifier = ('customer_id' | 'id' | order_var_pop_fieldsKeySpecifier)[];
export type order_var_pop_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_var_samp_fieldsKeySpecifier = ('customer_id' | 'id' | order_var_samp_fieldsKeySpecifier)[];
export type order_var_samp_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type order_variance_fieldsKeySpecifier = ('customer_id' | 'id' | order_variance_fieldsKeySpecifier)[];
export type order_variance_fieldsFieldPolicy = {
	customer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('ToDo_List' | 'ToDo_List_aggregate' | 'ToDo_List_by_pk' | 'customer' | 'customer_aggregate' | 'customer_by_pk' | 'order' | 'order_aggregate' | 'order_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	ToDo_List?: FieldPolicy<any> | FieldReadFunction<any>,
	ToDo_List_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ToDo_List_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	order_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	order_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('ToDo_List' | 'ToDo_List_aggregate' | 'ToDo_List_by_pk' | 'ToDo_List_stream' | 'customer' | 'customer_aggregate' | 'customer_by_pk' | 'customer_stream' | 'order' | 'order_aggregate' | 'order_by_pk' | 'order_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	ToDo_List?: FieldPolicy<any> | FieldReadFunction<any>,
	ToDo_List_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ToDo_List_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	ToDo_List_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	customer_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	order_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	order_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	order_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ToDo_List: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ToDo_ListKeySpecifier | (() => undefined | ToDo_ListKeySpecifier),
		fields?: ToDo_ListFieldPolicy,
	},
	ToDo_List_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ToDo_List_aggregateKeySpecifier | (() => undefined | ToDo_List_aggregateKeySpecifier),
		fields?: ToDo_List_aggregateFieldPolicy,
	},
	ToDo_List_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ToDo_List_aggregate_fieldsKeySpecifier | (() => undefined | ToDo_List_aggregate_fieldsKeySpecifier),
		fields?: ToDo_List_aggregate_fieldsFieldPolicy,
	},
	ToDo_List_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ToDo_List_max_fieldsKeySpecifier | (() => undefined | ToDo_List_max_fieldsKeySpecifier),
		fields?: ToDo_List_max_fieldsFieldPolicy,
	},
	ToDo_List_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ToDo_List_min_fieldsKeySpecifier | (() => undefined | ToDo_List_min_fieldsKeySpecifier),
		fields?: ToDo_List_min_fieldsFieldPolicy,
	},
	ToDo_List_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | ToDo_List_mutation_responseKeySpecifier | (() => undefined | ToDo_List_mutation_responseKeySpecifier),
		fields?: ToDo_List_mutation_responseFieldPolicy,
	},
	customer: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customerKeySpecifier | (() => undefined | customerKeySpecifier),
		fields?: customerFieldPolicy,
	},
	customer_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_aggregateKeySpecifier | (() => undefined | customer_aggregateKeySpecifier),
		fields?: customer_aggregateFieldPolicy,
	},
	customer_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_aggregate_fieldsKeySpecifier | (() => undefined | customer_aggregate_fieldsKeySpecifier),
		fields?: customer_aggregate_fieldsFieldPolicy,
	},
	customer_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_avg_fieldsKeySpecifier | (() => undefined | customer_avg_fieldsKeySpecifier),
		fields?: customer_avg_fieldsFieldPolicy,
	},
	customer_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_max_fieldsKeySpecifier | (() => undefined | customer_max_fieldsKeySpecifier),
		fields?: customer_max_fieldsFieldPolicy,
	},
	customer_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_min_fieldsKeySpecifier | (() => undefined | customer_min_fieldsKeySpecifier),
		fields?: customer_min_fieldsFieldPolicy,
	},
	customer_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_mutation_responseKeySpecifier | (() => undefined | customer_mutation_responseKeySpecifier),
		fields?: customer_mutation_responseFieldPolicy,
	},
	customer_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_stddev_fieldsKeySpecifier | (() => undefined | customer_stddev_fieldsKeySpecifier),
		fields?: customer_stddev_fieldsFieldPolicy,
	},
	customer_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_stddev_pop_fieldsKeySpecifier | (() => undefined | customer_stddev_pop_fieldsKeySpecifier),
		fields?: customer_stddev_pop_fieldsFieldPolicy,
	},
	customer_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_stddev_samp_fieldsKeySpecifier | (() => undefined | customer_stddev_samp_fieldsKeySpecifier),
		fields?: customer_stddev_samp_fieldsFieldPolicy,
	},
	customer_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_sum_fieldsKeySpecifier | (() => undefined | customer_sum_fieldsKeySpecifier),
		fields?: customer_sum_fieldsFieldPolicy,
	},
	customer_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_var_pop_fieldsKeySpecifier | (() => undefined | customer_var_pop_fieldsKeySpecifier),
		fields?: customer_var_pop_fieldsFieldPolicy,
	},
	customer_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_var_samp_fieldsKeySpecifier | (() => undefined | customer_var_samp_fieldsKeySpecifier),
		fields?: customer_var_samp_fieldsFieldPolicy,
	},
	customer_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | customer_variance_fieldsKeySpecifier | (() => undefined | customer_variance_fieldsKeySpecifier),
		fields?: customer_variance_fieldsFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	order: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | orderKeySpecifier | (() => undefined | orderKeySpecifier),
		fields?: orderFieldPolicy,
	},
	order_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_aggregateKeySpecifier | (() => undefined | order_aggregateKeySpecifier),
		fields?: order_aggregateFieldPolicy,
	},
	order_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_aggregate_fieldsKeySpecifier | (() => undefined | order_aggregate_fieldsKeySpecifier),
		fields?: order_aggregate_fieldsFieldPolicy,
	},
	order_avg_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_avg_fieldsKeySpecifier | (() => undefined | order_avg_fieldsKeySpecifier),
		fields?: order_avg_fieldsFieldPolicy,
	},
	order_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_max_fieldsKeySpecifier | (() => undefined | order_max_fieldsKeySpecifier),
		fields?: order_max_fieldsFieldPolicy,
	},
	order_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_min_fieldsKeySpecifier | (() => undefined | order_min_fieldsKeySpecifier),
		fields?: order_min_fieldsFieldPolicy,
	},
	order_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_mutation_responseKeySpecifier | (() => undefined | order_mutation_responseKeySpecifier),
		fields?: order_mutation_responseFieldPolicy,
	},
	order_stddev_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_stddev_fieldsKeySpecifier | (() => undefined | order_stddev_fieldsKeySpecifier),
		fields?: order_stddev_fieldsFieldPolicy,
	},
	order_stddev_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_stddev_pop_fieldsKeySpecifier | (() => undefined | order_stddev_pop_fieldsKeySpecifier),
		fields?: order_stddev_pop_fieldsFieldPolicy,
	},
	order_stddev_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_stddev_samp_fieldsKeySpecifier | (() => undefined | order_stddev_samp_fieldsKeySpecifier),
		fields?: order_stddev_samp_fieldsFieldPolicy,
	},
	order_sum_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_sum_fieldsKeySpecifier | (() => undefined | order_sum_fieldsKeySpecifier),
		fields?: order_sum_fieldsFieldPolicy,
	},
	order_var_pop_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_var_pop_fieldsKeySpecifier | (() => undefined | order_var_pop_fieldsKeySpecifier),
		fields?: order_var_pop_fieldsFieldPolicy,
	},
	order_var_samp_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_var_samp_fieldsKeySpecifier | (() => undefined | order_var_samp_fieldsKeySpecifier),
		fields?: order_var_samp_fieldsFieldPolicy,
	},
	order_variance_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | order_variance_fieldsKeySpecifier | (() => undefined | order_variance_fieldsKeySpecifier),
		fields?: order_variance_fieldsFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    