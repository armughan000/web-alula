// useCmsStore.js

import { defineStore } from 'pinia';

export const useCmsStore = defineStore({
    id: 'cms',
    state: () => ({
        cmsData: null,
    }),
    actions: {
        setApiData(data) {
            this.cmsData = data;
        },
    },
});
