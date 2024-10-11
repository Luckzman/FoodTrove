import Product from '../models/ProductSchema.js'

const getProducts = async(req, res) => {

    const categories = ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing']

    try {
        const page = parseInt(req.query.page) - 1 || 0
        const limit = parseInt(req.query.limit) || 5
        const search = req.query.search || '';
        let sort = req.query.sort ? req.query.sort.split(',') : 'price,asc'.split(',')
        const category = req.query.category ? req.query.category.split(',') : [...categories]

        sort = {[sort[0]]: sort[1]}
        
        const products = await Product
            .find({ name: { $regex: search, $options: 'i'} })
            .where('category')
            .in(category)
            .sort(sort)
            .skip(page * limit)
            .limit(limit)

        const total = await Product.countDocuments({
            category: { $in: category },
            name: { $regex: search, $options: 'i' }
        })

        return res.status(200).json({
            error: false,
            total,
            page: page + 1,
            limit,
            categories,
            products
        })

    } catch (error) {
        console.log(error, 'error')
        return res.status(500).json({ error: true, message: 'Internal Server Error' })
    }
}

export default getProducts;
