'use strict';
const DomainSchema = require('../../../models/index').Domain.schema;
const Joi = require('joi');

class DomainValidate {
    constructor() {

        this.add = {
            payload: (() => {

                return {
                    agent: DomainSchema.agent.required(),
                    domainName: DomainSchema.domainName.required(),
                    enabled: DomainSchema.enabled.required(),
                    intentThreshold: DomainSchema.intentThreshold.required(),
                    lastTraining: DomainSchema.lastTraining,
                    model: DomainSchema.model
                };
            })()
        };

        this.findById = {
            params: (() => {

                return {
                    id: DomainSchema.id.required().description('Id of the domain')
                };
            })()
        };

        this.updateById = {
            params: (() => {

                return {
                    id: DomainSchema.id.required().description('Id of the domain')
                };
            })(),
            payload: (() => {

                return {
                    domainName: DomainSchema.domainName,
                    enabled: DomainSchema.enabled,
                    intentThreshold: DomainSchema.intentThreshold,
                    lastTraining: DomainSchema.lastTraining,
                    model: DomainSchema.model
                };
            })()
        };

        this.deleteById = {
            params: (() => {

                return {
                    id: DomainSchema.id.required().description('Id of the domain')
                };
            })()
        };

        this.findEntitiesByDomainId = {
            params: (() => {

                return {
                    id: DomainSchema.id.required().description('Id of the domain')
                };
            })()
        };

        this.findIntentsByDomainId = {
            params: (() => {

                return {
                    id: DomainSchema.id.required().description('Id of the domain')
                };
            })(),
            query: (() => {

                return {
                    start: Joi.number().description('The index of the first element to return. 0 is the default start.'),
                    limit: Joi.number().description('Number of elements to return from start. All the elements are returned by default')
                };
            })()
        };

        this.train = {
            params: (() => {

                return {
                    id: DomainSchema.id.required().description('Id of the domain')
                };
            })()
        };

    }
}

const domainValidate = new DomainValidate();
module.exports = domainValidate;
