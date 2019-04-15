/* eslint-disable max-len */
import * as actionTypes from '../constants/ActionTypes';

const initialState = {
    addedItems: [
        {
            id: 'rnd',
            amount: 1
        },
        {
            id: 24592,
            amount: 2
        }
    ],
    total: 100.00,
    reduction: {
        amount: 10.00,
        name: 'Korting'
    },
    delivery: {
        method: 'pickup',
        cost: 0,
        options: {
            default: [
                {
                    from: '09.00',
                    to: '17.00'
                },
                {
                    from: '08.00',
                    to: '13.00'
                },
                {
                    from: '13.00',
                    to: '18.00'
                },
                {
                    from: '11.00',
                    to: '22.00'
                }
            ],
            extra: [
                {
                    from: '08.00',
                    to: '10.00',
                    extra: '(+ €9,95)'
                },
                {
                    from: '09.00',
                    to: '11.00',
                    extra: '(+ €9,95)'
                },
                {
                    from: '11.00',
                    to: '14.00',
                    extra: '(+ €9,95)'
                },
                {
                    from: '14.00',
                    to: '17.00',
                    extra: '(+ €9,95)'
                },
                {
                    from: '17.00',
                    to: '21.00',
                    extra: '(+ €9,95)'
                },
                {
                    from: '18.00',
                    to: '22.00',
                    extra: '(+ €9,95)'
                }
            ]
        }
    },

    transportOptions: [
        {
            type: 'external',
            earliest: {
                id: '5',
                dayOfWeek: '5',
                date: {
                    date: '2019-04-12 11:17:28.582420',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                lastOrderTime: {
                    date: '2019-04-11 15:00:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                openingTimeAm: {
                    date: '2019-04-11 09:00:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                closingTimeAm: {
                    date: '2019-04-11 12:30:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                openingTimePm: {
                    date: '2019-04-11 17:56:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                closingTimePm: {
                    date: '2019-04-11 17:56:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                opened: 'no',
                isException: false,
                shipping: true
            },
            options: [
                {
                    title: 'Belgi\u00eb (+ &euro;&nbsp;9,95) - gratis bij aankoop van &euro;&nbsp;100,00',
                    id: 'BE'
                },
                {
                    title: 'Frankrijk (+ &euro;&nbsp;15,00) - gratis bij aankoop van &euro;&nbsp;195,00',
                    id: 'FR'
                },
                {
                    title: 'Luxemburg (+ &euro;&nbsp;9,95) - gratis bij aankoop van &euro;&nbsp;195,00',
                    id: 'LU'
                },
                {
                    title: 'Nederland (+ &euro;&nbsp;9,95) - gratis bij aankoop van &euro;&nbsp;195,00',
                    id: 'NL'
                }
            ]
        },
        {
            type: 'pickup',
            earliest: {
                id: '4',
                dayOfWeek: '4',
                date: {
                    date: '2019-04-11 11:17:28.582420',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                lastOrderTime: {
                    date: '2019-04-11 15:00:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                openingTimeAm: {
                    date: '2019-04-11 09:00:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                closingTimeAm: {
                    date: '2019-04-11 12:30:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                openingTimePm: {
                    date: '2019-04-11 17:00:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                closingTimePm: {
                    date: '2019-04-11 17:00:00.000000',
                    timezone_type: 3,
                    timezone: 'Europe/Brussels'
                },
                opened: 'continuously',
                isException: false,
                shipping: true
            }
        }
    ],
    cart: {
        costExclShipping: 134.88,
        vatExclShipping: 23.41,
        orderLines: [
            {
                title: 'pinot-nero-solisterrae',
                quantity: 3,
                unitPrice: 34.97,
                costWithoutDiscount: 104.91,
                totalDiscount: 0,
                totalCost: 104.91,
                discounts: [],
                index: 0,
                orderLines: null,
                metadata: {
                    relatedId: '10446',
                    relatedModel: 'products',
                    description: 'De Solisterraeheet een granaatrode kleur. Het boeket is intens en complex met aroma\'s van bosfruit, kuirden en aardse toetsen. De smaak is sappig en mooi in evenwicht, nobele tannnies en lange verfijnde afdronk.',
                    url: '/nl/wijnen/pinot-nero-solisterrae/10446/',
                    id: '191139',
                    parent_id: null,
                    total: '104.9070',
                    sub_total: '86.7000',
                    vat_total: '18.2070',
                    discounted_total: '0.0000',
                    is_shipping_free: false,
                    shipping_free_from: null,
                    shipping_free_till: null,
                    imageUrl: 'https://www.licata.be/images/products/labels_image/TOBRU90013.jpg'
                }
            },
            {
                title: 'fontanasanta-nosiola',
                quantity: 1,
                unitPrice: 29.97,
                costWithoutDiscount: 29.97,
                totalDiscount: 0,
                totalCost: 29.97,
                discounts: [],
                index: 1,
                orderLines: null,
                metadata: {
                    relatedId: '10519',
                    relatedModel: 'products',
                    description: 'Foradori is mijn Italiaanse vertaling voor... schoonheid. Schoonheid in het rijk der \'zinnen\'. Soberheid en sereniteit zijn daarvan enkele van de belangrijkste \'zinnen\'. Als je de website opent, dan merk je meteen die innemende schoonheid op. En als je op',
                    url: '/nl/wijnen/fontanasanta-nosiola/10519/',
                    id: '191234',
                    parent_id: null,
                    total: '29.9717',
                    sub_total: '24.7700',
                    vat_total: '5.2017',
                    discounted_total: '0.0000',
                    is_shipping_free: false,
                    shipping_free_from: null,
                    shipping_free_till: null,
                    imageUrl: 'https://www.licata.be/images/products/labels_image/TOBRU90013.jpg'
                }
            }
        ],
        shippingCost: 0,
        discounts: [],
        totalDiscount: 0,
        costExclDiscountAndShipping: 134.88,
        vatInclusive: true,
        order: {
            order: {},
            shippingType: 'external',
            fallPriceReached: true,
            shippingCost: 0,
            shippingTimeCostsApply: true,
            shippingCountryCode: 'BE',
            index: 0,
            shippingAddress: {
                firstName: null,
                lastName: null,
                street: null,
                number: null,
                bus: null,
                zip: null,
                city: '3560',
                countryCode: 'BE',
                countryName: 'Belgi\u00eb',
                companyName: null,
                companyVat: null,
                attn: ''
            },
            shippingData: {},
            invoice: {
                email: 'jonas@inventis.be',
                phone: '+32498664137',
                company: '',
                address: {
                    firstName: 'Bart',
                    lastName: 'Ari\u00ebn',
                    street: 'Weg naar as, 182',
                    number: '85',
                    bus: '',
                    zip: '3660',
                    city: 'Opglabbeek',
                    countryCode: 'BE',
                    countryName: null,
                    companyName: null,
                    companyVat: null,
                    attn: ''
                },
                code: ''
            },
            totalCost: 0,
            itemCount: 0
        },
        marking: [],
        totalCost: 134.88,
        itemCount: 4
    },
    errors: [],
    redirect_to: null
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            let data = 1;

            state.cart.orderLines.forEach((item) => {
                if (item.index.toString() === action.orderLineIndex.toString()) {
                    data = {
                        step: 1,
                        handlers: [
                            {
                                action: 'quantityUpdate',
                                orderLines: [
                                    {
                                        orderIndex: parseInt(action.orderIndex, 10),
                                        orderLineIndex: item.index,
                                        quantity: item.quantity + 1
                                    }
                                ]
                            }
                        ]
                    };
                }
            });

            console.log(data);

            return state;
        }
        case actionTypes.REMOVE_FROM_CART: {
            let data = 1;

            state.cart.orderLines.forEach((item) => {
                if (item.index.toString() === action.orderLineIndex.toString()) {
                    data = {
                        step: 1,
                        handlers: [
                            {
                                action: 'quantityUpdate',
                                orderLines: [
                                    {
                                        orderIndex: parseInt(action.orderIndex, 10),
                                        orderLineIndex: item.index,
                                        quantity: item.quantity - 1
                                    }
                                ]
                            }
                        ]
                    };
                }
            });

            console.log(data);

            return state;
        }
        case actionTypes.DELETE_FROM_CART: {
            const data = {
                step: 1,
                handlers: [
                    {
                        action: 'orderlineRemoval',
                        orderIndex: parseInt(action.orderIndex, 10),
                        orderLineIndex: parseInt(action.orderLineIndex, 10)
                    }
                ]
            };
            console.log(data);

            return state;
        }
        case actionTypes.UPDATE_AMOUNT_IN_CART: {
            const data = {
                step: 1,
                handlers: [
                    {
                        action: 'quantityUpdate',
                        orderLines: [
                            {
                                orderIndex: parseInt(action.orderIndex, 10),
                                orderLineIndex: parseInt(action.orderLineIndex, 10),
                                quantity: parseInt(action.payload, 10)
                            }
                        ]
                    }
                ]
            };

            console.log(data);

            return state;
        }
        case actionTypes.UPDATE_DELIVERY_METHOD: {
            return {
                ...state,
                delivery: {
                    ...state.delivery,
                    method: action.method
                }
            };
        }
        default:
            return state;
    }
};

export default cart;
