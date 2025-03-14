// This file is generated by greenstar scripts. DO NOT EDIT.
// noinspection DuplicatedCode

import { BaseAPIURL } from "../../services/util.ts"
import { useOperation, Method, Hook } from "../../util/operation.ts"

export interface Request {}
export type Response = {} | undefined

export function useDeleteAllTransactions(): Hook<Request, Response> {
    const opts = {
        initial: undefined,
        method: "DELETE" as Method,
        url: `${BaseAPIURL}/transactions`,
    }
    return useOperation<Request, Response>(opts)
}
