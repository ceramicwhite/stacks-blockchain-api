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
/**
 * 
 * @export
 * @interface TransactionFeeEstimateResponseEstimations
 */
export interface TransactionFeeEstimateResponseEstimations {
    /**
     * 
     * @type {number}
     * @memberof TransactionFeeEstimateResponseEstimations
     */
    fee_rate?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionFeeEstimateResponseEstimations
     */
    fee?: number;
}

export function TransactionFeeEstimateResponseEstimationsFromJSON(json: any): TransactionFeeEstimateResponseEstimations {
    return TransactionFeeEstimateResponseEstimationsFromJSONTyped(json, false);
}

export function TransactionFeeEstimateResponseEstimationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionFeeEstimateResponseEstimations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fee_rate': !exists(json, 'fee_rate') ? undefined : json['fee_rate'],
        'fee': !exists(json, 'fee') ? undefined : json['fee'],
    };
}

export function TransactionFeeEstimateResponseEstimationsToJSON(value?: TransactionFeeEstimateResponseEstimations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fee_rate': value.fee_rate,
        'fee': value.fee,
    };
}

