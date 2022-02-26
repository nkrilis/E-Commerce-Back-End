const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try 
  {
    const productData = await Product.findAll(
    {
      include: [{ model: Category}, { model: Tag }],
    });

    res.status(200).json(productData);
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }

});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try 
  {
    const productData = await Product.findByPk(req.params.id, 
      {
        include: [{ model: Category }, { model: Tag }],
      });

    if (!productData) 
    {
      res.status(404).json({ message: 'No Product found with that id!' });
      return;
    }

    res.status(200).json(productData);
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }

});

// create new product
router.post('/', async (req, res) => {
  try 
  {
    const productData = await Product.create(
      {
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        tagIds: req.body.tagIds
      });

      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          {
            id: req.body.id,
            tag_id
          }
        });
        const createdTags = await ProductTag.bulkCreate(productTagIdArr);
      }

    res.status(200).json(productData);
  } 
  catch (err) 
  {
    res.status(400).json(err);
  }

  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  
});

// update product
router.put('/:id', async (req, res) => {
  // update product data
  try 
  {
    const productData = await Product.update(req.body, 
    {
      where: 
      {
        id: req.params.id,
      },
    });

    if (!productData) 
    {
      res.status(404).json({ message: 'No Product with this id!' });
      return;
    }
    res.status(200).json({message: `Product with id: ${req.params.id} has been updated!`});
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try
  {
    const deletedProduct = await Product.destroy(
      {
        where:
        { 
          id: req.params.id
        },
      });

      res.status(200).json({message: `The Product with id: ${req.params.id} has been deleted!`});
  }
  catch(err)
  {
    res.status(500).json(err)
  }

});

module.exports = router;
