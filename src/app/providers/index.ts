import {InjectionToken, Provider} from '@angular/core';

export const RED_QL_LANGUAGE_NAME = 'red-ql';

export const RED_QL_LANGUAGE_ID = new InjectionToken<string>(
    '[RED_QL_LANGUAGE_ID]: LANGUAGE ID',
);

export const RED_QL_LANGUAGE_ID_PROVIDER: Provider = {
    provide: RED_QL_LANGUAGE_ID,
    useValue: RED_QL_LANGUAGE_NAME,
};
