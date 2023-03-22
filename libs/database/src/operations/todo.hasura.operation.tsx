import type * as Types from '../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type GetAllToDoListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllToDoListQuery = { __typename: 'query_root', ToDo_List: Array<{ __typename: 'ToDo_List', created_at: string, status: boolean, id: string, name: string, body: string, updated_at: string }> };

export type DeletebyIdMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
}>;


export type DeletebyIdMutation = { __typename: 'mutation_root', delete_ToDo_List_by_pk: { __typename: 'ToDo_List', id: string } | null };

export type InsertbyNameMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  body: Types.Scalars['String'];
}>;


export type InsertbyNameMutation = { __typename: 'mutation_root', insert_ToDo_List_one: { __typename: 'ToDo_List', name: string, id: string, body: string } | null };

export type UpdateNamebyIdMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  name: Types.Scalars['String'];
  body: Types.Scalars['String'];
}>;


export type UpdateNamebyIdMutation = { __typename: 'mutation_root', update_ToDo_List_by_pk: { __typename: 'ToDo_List', id: string, name: string } | null };

export type UpdateStatusbyIdMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  status: Types.Scalars['Boolean'];
}>;


export type UpdateStatusbyIdMutation = { __typename: 'mutation_root', update_ToDo_List_by_pk: { __typename: 'ToDo_List', id: string, name: string } | null };


export const GetAllToDoListDocument = /*#__PURE__*/ gql`
    query getAllToDoList {
  ToDo_List {
    created_at
    status
    id
    name
    body
    updated_at
  }
}
    `;

/**
 * __useGetAllToDoListQuery__
 *
 * To run a query within a React component, call `useGetAllToDoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllToDoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllToDoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllToDoListQuery(baseOptions?: Apollo.QueryHookOptions<GetAllToDoListQuery, GetAllToDoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllToDoListQuery, GetAllToDoListQueryVariables>(GetAllToDoListDocument, options);
      }
export function useGetAllToDoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllToDoListQuery, GetAllToDoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllToDoListQuery, GetAllToDoListQueryVariables>(GetAllToDoListDocument, options);
        }
export type GetAllToDoListQueryHookResult = ReturnType<typeof useGetAllToDoListQuery>;
export type GetAllToDoListLazyQueryHookResult = ReturnType<typeof useGetAllToDoListLazyQuery>;
export type GetAllToDoListQueryResult = Apollo.QueryResult<GetAllToDoListQuery, GetAllToDoListQueryVariables>;
export function refetchGetAllToDoListQuery(variables?: GetAllToDoListQueryVariables) {
      return { query: GetAllToDoListDocument, variables: variables }
    }
export const DeletebyIdDocument = /*#__PURE__*/ gql`
    mutation deletebyId($id: uuid!) {
  delete_ToDo_List_by_pk(id: $id) {
    id
  }
}
    `;
export type DeletebyIdMutationFn = Apollo.MutationFunction<DeletebyIdMutation, DeletebyIdMutationVariables>;

/**
 * __useDeletebyIdMutation__
 *
 * To run a mutation, you first call `useDeletebyIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletebyIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletebyIdMutation, { data, loading, error }] = useDeletebyIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletebyIdMutation(baseOptions?: Apollo.MutationHookOptions<DeletebyIdMutation, DeletebyIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletebyIdMutation, DeletebyIdMutationVariables>(DeletebyIdDocument, options);
      }
export type DeletebyIdMutationHookResult = ReturnType<typeof useDeletebyIdMutation>;
export type DeletebyIdMutationResult = Apollo.MutationResult<DeletebyIdMutation>;
export type DeletebyIdMutationOptions = Apollo.BaseMutationOptions<DeletebyIdMutation, DeletebyIdMutationVariables>;
export const InsertbyNameDocument = /*#__PURE__*/ gql`
    mutation insertbyName($name: String!, $body: String!) {
  insert_ToDo_List_one(object: {name: $name, body: $body}) {
    name
    id
    body
  }
}
    `;
export type InsertbyNameMutationFn = Apollo.MutationFunction<InsertbyNameMutation, InsertbyNameMutationVariables>;

/**
 * __useInsertbyNameMutation__
 *
 * To run a mutation, you first call `useInsertbyNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertbyNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertbyNameMutation, { data, loading, error }] = useInsertbyNameMutation({
 *   variables: {
 *      name: // value for 'name'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useInsertbyNameMutation(baseOptions?: Apollo.MutationHookOptions<InsertbyNameMutation, InsertbyNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertbyNameMutation, InsertbyNameMutationVariables>(InsertbyNameDocument, options);
      }
export type InsertbyNameMutationHookResult = ReturnType<typeof useInsertbyNameMutation>;
export type InsertbyNameMutationResult = Apollo.MutationResult<InsertbyNameMutation>;
export type InsertbyNameMutationOptions = Apollo.BaseMutationOptions<InsertbyNameMutation, InsertbyNameMutationVariables>;
export const UpdateNamebyIdDocument = /*#__PURE__*/ gql`
    mutation updateNamebyId($id: uuid!, $name: String!, $body: String!) {
  update_ToDo_List_by_pk(pk_columns: {id: $id}, _set: {name: $name, body: $body}) {
    id
    name
  }
}
    `;
export type UpdateNamebyIdMutationFn = Apollo.MutationFunction<UpdateNamebyIdMutation, UpdateNamebyIdMutationVariables>;

/**
 * __useUpdateNamebyIdMutation__
 *
 * To run a mutation, you first call `useUpdateNamebyIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNamebyIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNamebyIdMutation, { data, loading, error }] = useUpdateNamebyIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useUpdateNamebyIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNamebyIdMutation, UpdateNamebyIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNamebyIdMutation, UpdateNamebyIdMutationVariables>(UpdateNamebyIdDocument, options);
      }
export type UpdateNamebyIdMutationHookResult = ReturnType<typeof useUpdateNamebyIdMutation>;
export type UpdateNamebyIdMutationResult = Apollo.MutationResult<UpdateNamebyIdMutation>;
export type UpdateNamebyIdMutationOptions = Apollo.BaseMutationOptions<UpdateNamebyIdMutation, UpdateNamebyIdMutationVariables>;
export const UpdateStatusbyIdDocument = /*#__PURE__*/ gql`
    mutation updateStatusbyId($id: uuid!, $status: Boolean!) {
  update_ToDo_List_by_pk(pk_columns: {id: $id}, _set: {status: $status}) {
    id
    name
  }
}
    `;
export type UpdateStatusbyIdMutationFn = Apollo.MutationFunction<UpdateStatusbyIdMutation, UpdateStatusbyIdMutationVariables>;

/**
 * __useUpdateStatusbyIdMutation__
 *
 * To run a mutation, you first call `useUpdateStatusbyIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStatusbyIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStatusbyIdMutation, { data, loading, error }] = useUpdateStatusbyIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateStatusbyIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStatusbyIdMutation, UpdateStatusbyIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStatusbyIdMutation, UpdateStatusbyIdMutationVariables>(UpdateStatusbyIdDocument, options);
      }
export type UpdateStatusbyIdMutationHookResult = ReturnType<typeof useUpdateStatusbyIdMutation>;
export type UpdateStatusbyIdMutationResult = Apollo.MutationResult<UpdateStatusbyIdMutation>;
export type UpdateStatusbyIdMutationOptions = Apollo.BaseMutationOptions<UpdateStatusbyIdMutation, UpdateStatusbyIdMutationVariables>;