const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', (_req, _res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id','product_name','price','stock','category_id']
      }
    ]
})
});



router.get('/:id', (req, _res) => {
  Category.findOne({
    where:{
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id','product_name','price','stock','category_id']
      }
    ]
})

});

router.post('/', (req, _res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
});

router.put('/:id', (req, _res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name:req.body.category_name
    },
    {
      where:{
        id: req.params.id
      }
    }
  )
});

router.delete('/:id', (req, _res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id: req.params.id
    }
  })
});

module.exports = router;
