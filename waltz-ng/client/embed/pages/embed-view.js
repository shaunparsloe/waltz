/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017, 2018, 2019 Waltz open source project
 * See README.md for more information
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific
 *
 */

import _ from "lodash";
import {initialiseData} from "../../common";
import {dynamicSections} from "../../dynamic-section/dynamic-section-definitions";
import template from "./embed-view.html";
import Toasts from "../../notification/components/toaster/Toasts.svelte";

const initialState = {
    Toasts
};

function controller($stateParams) {
    const vm = initialiseData(this, initialState);

    vm.$onInit = () => {
        vm.entityRef = {
            kind: $stateParams.kind,
            id: $stateParams.id
        };

        vm.section = _.find(dynamicSections, { id: $stateParams.sectionId });
    }
}


controller.$inject = [
    "$stateParams"
];


const view = {
    template,
    controller,
    controllerAs: "$ctrl"
};


export default view;
