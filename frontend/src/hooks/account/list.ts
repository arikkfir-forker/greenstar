// This file is generated by greenstar scripts. DO NOT EDIT.
// noinspection DuplicatedCode

import { Account, DateProperties } from "../../models/account.ts"
import { BaseAPIURL, QueryNilValue } from "../../services/util.ts"
import { Hook, Method, useOperation } from "../../util/operation.ts"

export type SortableProperty =
    | "balance"
    | "displayName"
    | "icon"
    | "parentID"
    | "totalIncomingAmount"
    | "totalOutgoingAmount"

export interface Request {
    offset?: number
    count?: number
    sort?: SortableProperty[]
    displayName?: string
    currency: string
}

export interface Response {
    offset: number
    totalCount: number
    items: Account[]
}

function buildURL(req: Request): string {
    const urlParams = new URLSearchParams()

    if (req.offset !== undefined && req.offset >= 0) {
        urlParams.set("_offset", req.offset + "")
    }
    if (req.count !== undefined && req.count >= 0) {
        urlParams.set("_count", req.count + "")
    }
    if (req.sort !== undefined && req?.sort.length) {
        req.sort.forEach((s) => urlParams.append("_sort", s))
    }
    if (req.displayName !== undefined) {
        if (req.displayName === null) {
            urlParams.set("displayName", QueryNilValue)
        } else {
            urlParams.set("displayName", req.displayName)
        }
    }
    if (req.currency !== undefined) {
        if (req.currency === null) {
            urlParams.set("currency", QueryNilValue)
        } else {
            urlParams.set("currency", req.currency)
        }
    }

    return `${BaseAPIURL}/accounts${urlParams.size ? "?" + urlParams.toString() : ""}`
}

export function useListAccounts(): Hook<Request, Response> {
    const opts = {
        initial: {
            offset: 0,
            totalCount: 0,
            items: [],
        },
        method: "GET" as Method,
        url: buildURL,
        dateProperties: DateProperties,
    }
    return useOperation<Request, Response>(opts)
}
