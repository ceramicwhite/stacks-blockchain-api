/* tslint:disable */
/* eslint-disable */
/**
 * Stacks Blockchain API
 * Welcome to the API reference overview for the <a href=\"https://docs.hiro.so/get-started/stacks-blockchain-api\">Stacks Blockchain API</a>.  <a href=\"https://hirosystems.github.io/stacks-blockchain-api/collection.json\" download=\"stacks-api-collection.json\">Download Postman collection</a> 
 *
 * The version of the OpenAPI document: STACKS_API_VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    RosettaSubAccount,
    RosettaSubAccountFromJSON,
    RosettaSubAccountFromJSONTyped,
    RosettaSubAccountToJSON,
} from './';

/**
 * The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).
 * @export
 * @interface RosettaAccount
 */
export interface RosettaAccount {
    /**
     * The address may be a cryptographic public key (or some encoding of it) or a provided username.
     * @type {string}
     * @memberof RosettaAccount
     */
    address: string;
    /**
     * 
     * @type {RosettaSubAccount}
     * @memberof RosettaAccount
     */
    sub_account?: RosettaSubAccount;
    /**
     * Blockchains that utilize a username model (where the address is not a derivative of a cryptographic public key) should specify the public key(s) owned by the address in metadata.
     * @type {object}
     * @memberof RosettaAccount
     */
    metadata?: object;
}

export function RosettaAccountFromJSON(json: any): RosettaAccount {
    return RosettaAccountFromJSONTyped(json, false);
}

export function RosettaAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'sub_account': !exists(json, 'sub_account') ? undefined : RosettaSubAccountFromJSON(json['sub_account']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RosettaAccountToJSON(value?: RosettaAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'sub_account': RosettaSubAccountToJSON(value.sub_account),
        'metadata': value.metadata,
    };
}

