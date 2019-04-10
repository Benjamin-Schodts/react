import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function NotFound() {
    const {t} = useTranslation('translation', {useSuspense: false});

    return (
        <div className="container">
            <h1>{t('404')}</h1>
            <p>
                <Link
                    to={'/'}
                >
                    {t('return_to', {page: 'cart'})}
                </Link>
            </p>
        </div>
    );
}

export default NotFound;
