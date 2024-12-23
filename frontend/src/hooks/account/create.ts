// This file is generated by greenstar scripts. DO NOT EDIT.
// noinspection DuplicatedCode

import { Account, DateProperties } from "../../models/account.ts"
import { BaseAPIURL } from "../../services/util.ts"
import { Hook, Method, useOperation } from "../../util/operation.ts"

export interface Request {
    displayName: string
    icon?: string
    parentID?: string
}

export type Response = Account | undefined

export function useCreateAccount(): Hook<Request, Response> {
    const opts = {
        initial: undefined,
        method: "POST" as Method,
        url: `${BaseAPIURL}/accounts`,
        dateProperties: DateProperties,
    }
    return useOperation<Request, Response>(opts)
}
