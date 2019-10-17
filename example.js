const {TypeSafe, makeTypeSafe} = require('./');

class User extends TypeSafe {
    // constructor() {
    //     super({
    //         name: String,
    //         email: {
    //             type: String,
    //             allowNull: false,
    //         },
    //         age: Number,
    //     }, { unknown: false });
    // }
}

const user = new User();

user.name = null;
user.email = 'asd';

const anyObject = makeTypeSafe({}, {
    min: Number,
    max: {
        allowNull: false,
        type: Number,
        defaultValue: 44,
    },
    user: {
        type: User,
        allowNull: false,
    },
    params: {
        type: Array({
            type: String,
            allowNull: false,
        }),
    },
}, {unknown: false});

anyObject.min = 0;
anyObject.max = 2;
anyObject.user = new User();
anyObject.params = ['ad', '2'];


console.log(anyObject.params, anyObject.max);
