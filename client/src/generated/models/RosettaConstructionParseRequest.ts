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
    NetworkIdentifier,
    NetworkIdentifierFromJSON,
    NetworkIdentifierFromJSONTyped,
    NetworkIdentifierToJSON,
} from './';

/**
 * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after /construction/payloads) and before broadcast (after /construction/combine).
 * @export
 * @interface RosettaConstructionParseRequest
 */
export interface RosettaConstructionParseRequest {
    /**
     * 
     * @type {NetworkIdentifier}
     * @memberof RosettaConstructionParseRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     * Signed is a boolean indicating whether the transaction is signed.
     * @type {boolean}
     * @memberof RosettaConstructionParseRequest
     */
    signed: boolean;
    /**
     * This must be either the unsigned transaction blob returned by /construction/payloads or the signed transaction blob returned by /construction/combine.
     * @type {string}
     * @memberof RosettaConstructionParseRequest
     */
    transaction: string;
}

export function RosettaConstructionParseRequestFromJSON(json: any): RosettaConstructionParseRequest {
    return RosettaConstructionParseRequestFromJSONTyped(json, false);
}

export function RosettaConstructionParseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaConstructionParseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network_identifier': NetworkIdentifierFromJSON(json['network_identifier']),
        'signed': json['signed'],
        'transaction': json['transaction'],
    };
}

export function RosettaConstructionParseRequestToJSON(value?: RosettaConstructionParseRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network_identifier': NetworkIdentifierToJSON(value.network_identifier),
        'signed': value.signed,
        'transaction': value.transaction,
    };
}

