import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'your name must have 3 characters'),
    email: yup
        .string()
        .email(),
    password: yup
        .string()
        .min(8, 'your password must have 8 characters'),
    tos: yup
        .bool()
        .oneOf([true], 'you must accept the terms of service'),
    role: yup
        .string()
        .oneOf(["", 'ui_ux', 'front_end', 'backend', 'ios', 'data_science'])
})

export default formSchema 