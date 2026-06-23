import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/styles';

/*.then'n'.catch:*/
// export const usePhone = () => {
//     const input = document.querySelector('#phone');

//     intlTelInput(input, {
//         initialCountry: 'auto',
//         geoIpLookup: (callback) => {
//             fetch('https://ipapi.co/json')
//                 .then((res) => res.json())
//                 .then((data) => callback(data.country_code))
//                 .catch(() => callback('us'));
//         },
//         utilsScript:
//             'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
//     });
// };

/*async'n'await:*/
export const usePhone = () => {
    const input = document.querySelector('#phone');

    if (!input) return;

    intlTelInput(input, {
        initialCountry: 'auto',
        geoIpLookup: async (callback) => {
            try {
                const res = await fetch('https://ipapi.co/json');
                const data = await res.json();
                callback(data.country_code);
            } catch {
                callback('us');
            }
        },
        utilsScript:
            'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });
};
