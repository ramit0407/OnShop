import mongoose from 'mongoose'
const CartSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
          },
          items:[{
            countInStock: {
              type: Number,
            },
            name: {
              type: String,
              
            },
            image: {
              type: String,
              
            },
            price: {
              type: Number,
              
            },
            product:{
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Product',
            },
            qty: {
              type: Number,
            },
           }]
    },
    {
      timestamps: true,
    }
  )

  const CartItems = mongoose.model('CartItems', CartSchema)

  export default CartItems