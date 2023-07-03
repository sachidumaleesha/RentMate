export default function Validation(values){
    const errors = {}

    if(values.name === ''){
        errors.name = "Card Holder Name is Required!"
    }

    if (values.card_Num.length != 16) {
        errors.name = "Card Number is Invalid"
    }

    if (values.cardType_master != "master" || values.cardType_master != "visa") {
        errors.name = "You should select card Type"
    }

    if(values.name === ''){
        errors.name = "Card Holder Name is Required!"
    }

    if(values.Ex_month === ''){
        errors.name = "Select Expiry month"
    }

    if(values.Ex_year === ''){
        errors.name = "Select Expiry Year"
    }

    return errors;
}